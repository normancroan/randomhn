import React from "react";

//from?site=domain
//title (url points to provided OR item url to comment thread)
export default props => {
  const { title, url, time, score, id, by, authorData } = props.story;
  const formattedUrl = props.formatUrl(url);
  const formattedDate = props.formatDate(time);
  return (
    <tr style={{ backgroundColor: "#f6f6ef" }}>
      <td>
        <p align="left">
          <span style={{ paddingRight: "0.5em" }}>{props.position + 1}.</span>
          <a href={url ? url : `https://news.ycombinator.com/item?id=${id}`}>
            {title}
          </a>
          {url && (
            <span style={{ paddingLeft: "0.25em" }}>
              (
              <a
                href={`https://news.ycombinator.com/from?site=${formattedUrl}`}
              >
                {formattedUrl}
              </a>
              )
            </span>
          )}
        </p>
        <p align="left">
          <span style={{ paddingLeft: "1.5em" }}>{`${score} points`}</span>
          {/* <span style={{ paddingLeft: "0.25em" }}>{`by ${by} (karma: ${authorData.karma})`}</span> */}
          <span style={{ paddingLeft: "0.25em" }}>
            by <a href={`https://news.ycombinator.com/user?id=${by}`}>{by}</a>{" "}
            {`(k:${authorData.karma})`}
          </span>
          <span style={{ paddingLeft: "0.25em" }}>{formattedDate}</span>
        </p>
      </td>
    </tr>
  );
};
//https://news.ycombinator.com/user?id=mkagenius
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
