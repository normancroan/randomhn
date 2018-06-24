import React from "react";

//title: "Microsoft Employees Pressure Leadership to Cancel ICE Contract"
//url: "https://gizmodo.com/microsoft-employees-pressure-leadership-to-cancel-ice-c-1826965297"
//time: 1529452555
//score: 233
//also need to grab Author Karma to display:
//by: "rumcajz"
//• Author id
//• Author karma score.
//<a href="http://www.yahoo.com">here</a>
//https://news.ycombinator.com/item?id=17359787
export default props => {
  const { title, url, time, score, id } = props.story;
  return (
    <div>
      <p>
        {title}
        <span>
          (
          {url ? (
            <a href={url}>{props.formatUrl(url)}</a>
          ) : (
            <a
              href={`https://news.ycombinator.com/item?id=${id}`}
            >{`news.ycombinator.com`}</a>
          )}
          )
        </span>
      </p>
    </div>
  );
};
