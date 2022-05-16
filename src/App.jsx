import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  //以下はJavaScriptの中でHTMLを描いている感じ
  return (
    <>
      <h1 style={{ color: "red" }}>おはようございます！</h1>
      {/* 以下共通のコンポーネント（共通パーツ）を使うことでわかりやすく書くことができる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">
        はい！サクラバクシンオーです！！
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
