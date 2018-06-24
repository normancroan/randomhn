import React, { Component } from "react";
import Story from "./Story";
import URI from "urijs";
import moment from "moment";

//title: "Microsoft Employees Pressure Leadership to Cancel ICE Contract"
//url: "https://gizmodo.com/microsoft-employees-pressure-leadership-to-cancel-ice-c-1826965297"
//time: 1529452555
//score: 233
//also need to grab Author Karma to display:
//by: "rumcajz"
//• Author id
//• Author karma score.

export default class StoryContainer extends Component {
  formatUrl = url => {
    if (!url) {
      return;
    }
    try {
      const domain = URI(url).domain();
      return domain;
    } catch (error) {
      console.log(error);
      return url;
    }
  };
  formatDate = time => {
    return moment.unix(time).calendar();
  };
  render() {
    return (
      <Story
        story={this.props.story}
        formatUrl={this.formatUrl}
        formatDate={this.formatDate}
        position={this.props.position}
      />
    );
  }
}
