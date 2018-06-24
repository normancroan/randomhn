import React from "react";
import Story from "../Story";

export default props => (
  <div>
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
      <tbody>
        {props.stories.map((story, i) => (
          <Story key={story.id} story={story} position={i} />
        ))}
      </tbody>
    </table>
  </div>
);
