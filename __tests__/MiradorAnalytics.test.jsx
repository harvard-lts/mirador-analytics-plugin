import {
  describe, it, expect, vi, beforeEach,
} from 'vitest';
import { render } from '@testing-library/react';

// Mock `mirador` to avoid loading the full bundle (which triggers a jsdom
// canvas error). The plugin itself doesn't import mirador, but the demo and
// host wiring do, so keep the test output clean.
vi.mock('mirador', () => ({ getManifestoInstance: vi.fn() }));

const { default: plugin } = await import('../src/plugins/MiradorAnalytics.js');
const { component: MiradorAnalytics, mapStateToProps } = plugin;

describe('mapStateToProps', () => {
  it('maps the configured containerId', () => {
    const state = { config: { miradorAnalyticsPlugin: { containerId: 'GTM-ABC123' } } };
    const props = mapStateToProps(state, { windowId: 'w1' });
    expect(props.containerId).toBe('GTM-ABC123');
  });

  it('is undefined when no analytics config present', () => {
    const props = mapStateToProps({ config: {} }, { windowId: 'w1' });
    expect(props.containerId).toBeUndefined();
  });
});

describe('MiradorAnalytics component', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  it('renders nothing', () => {
    const { container } = render(<MiradorAnalytics containerId="GTM-ABC123" />);
    expect(container.firstChild).toBeNull();
  });

  it('injects the Google Tag Manager snippets on mount', () => {
    render(<MiradorAnalytics containerId="GTM-ABC123" />);
    expect(document.head.innerHTML).toContain('GTM-ABC123');
    expect(document.body.innerHTML).toContain('googletagmanager.com/ns.html?id=GTM-ABC123');
  });
});
