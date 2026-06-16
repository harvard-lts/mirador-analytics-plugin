import { describe, it, expect } from 'vitest';
import plugins, { MiradorAnalyticsPlugin } from '../src/index.js';

describe('mirador-analytics-plugin smoke test', () => {
  it('exports the analytics plugin', () => {
    expect(MiradorAnalyticsPlugin).toBeDefined();
  });

  it('exports an array of plugins as the default export', () => {
    expect(Array.isArray(plugins)).toBe(true);
    expect(plugins).toHaveLength(1);
    expect(plugins).toContain(MiradorAnalyticsPlugin);
  });

  it('configures each plugin with a target and component', () => {
    plugins.forEach((plugin) => {
      expect(typeof plugin.target).toBe('string');
      expect(plugin.target.length).toBeGreaterThan(0);
      expect(plugin.component).toBeDefined();
    });
  });

  it('registers the analytics plugin against the window', () => {
    expect(MiradorAnalyticsPlugin.target).toBe('Window');
    expect(MiradorAnalyticsPlugin.mode).toBe('add');
    expect(typeof MiradorAnalyticsPlugin.mapStateToProps).toBe('function');
  });
});
