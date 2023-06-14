import React, { Component } from 'react';
import $ from "jquery";

const mapStateToProps = (state, { windowId, containerId }) => ({
  scriptTag: state.config.miradorAnalyticsPlugin.scriptTag,
  noscriptTag: state.config.miradorAnalyticsPlugin.noscriptTag,
});

class harvardAnalytics extends Component {
  render() {

    return (
      <></>
    );
  }

  componentDidMount() {
    const { scriptTag, noscriptTag } = this.props;

    $("head").prepend(
      scriptTag
    );
    $("body").prepend(
      noscriptTag
    );
  }
}

export default {
  target: 'Window',
  mode: 'add',
  component: harvardAnalytics,
  mapStateToProps,
}