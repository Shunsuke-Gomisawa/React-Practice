import React from "react";

export const ColorfulMessage = (props) => {
  //オブジェクトの分割代入を使用("props.color"→"color"のように"props."の部分が省略できるようになる)
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  //"children"はHTMLにおけるタグで囲まれた部分を表すと特別な関数
  //例<p>"ここだ！！"</p>               ↓
  return <p style={contentStyle}>{children}</p>;
};
