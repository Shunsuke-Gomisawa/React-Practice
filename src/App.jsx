import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  //以下はJavaScriptの中でCSSを描いている感じ
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  //以下はJavaScriptの中でHTMLを描いている感じ
  return (
    <>
      <h1 style={{ color: "red" }}>おはようございます！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
