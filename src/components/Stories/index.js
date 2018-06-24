import React, { Component } from "react";
import { getRandomStories } from "../../utils/hackernews";
import Stories from "./Stories";

export default class StoriesContainer extends Component {
  state = {
    stories: []
  };
  componentWillMount() {
    getRandomStories().then(stories => {
      this.setState({
        stories: stories.sort((a, b) => {
          return a.score > b.score;
        })
      });
    });
  }
  render() {
    return (
      <div>
        <Stories stories={this.state.stories} />
      </div>
    );
  }
}
