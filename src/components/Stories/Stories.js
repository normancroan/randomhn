import React from "react";
import Story from "../Story";

export default props => (
  <div>
    {props.stories.map(story => <Story key={story.id} story={story} />)}
  </div>
);
