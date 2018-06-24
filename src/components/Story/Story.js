import React from "react";

//title: "Microsoft Employees Pressure Leadership to Cancel ICE Contract"
//url: "https://gizmodo.com/microsoft-employees-pressure-leadership-to-cancel-ice-c-1826965297"
//time: 1529452555
//score: 233
//also need to grab Author Karma to display:
//by: "rumcajz"
//• Author id
//• Author karma score.

export default props => {
  const { title, url, time, score } = props.story;
  return (
    <div>
      <p>
        {title} {url && `(${props.formatUrl(url)})`}
      </p>
    </div>
  );
};
