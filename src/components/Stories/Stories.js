import React from "react";
import Story from "../Story";

export default props => (
  <div>
    <table>
      <tbody>
        {props.stories.map(story => <Story key={story.id} story={story} />)}
      </tbody>
    </table>
  </div>
);
