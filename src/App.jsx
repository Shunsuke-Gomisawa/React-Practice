import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  //ここが状態を表す"state"である
  const [num, setNum] = useState(0); //ここは初期値を入れる
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //ここは"state"における関数処理を描く
  const onClickUpUp = () => {
    setNum(num + 1);
  };
  //ボタンを押すと絵文字の表示非表示が切り替わる関数処理
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //関心の分岐
  useEffect(() => {
    //3の倍数の時に顔文字が表示されるようにする
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line
  }, [num]);

  //以下はJavaScriptの中でHTMLを描いている感じ
  return (
    <>
      <h1 style={{ color: "red" }}>おはようございます！</h1>
      {/* 以下共通のコンポーネント（共通パーツ）を使うことでわかりやすく書くことができる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">
        はい！サクラバクシンオーです！！
      </ColorfulMessage>
      <button onClick={onClickUpUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>

      {faceShowFlag && <p>┌(┌^o^)┐</p>}
    </>
  );
};

export default App;

//Reactは特定の条件の時にコンポーネントを再読み込みする　→
//何か動作が行われる度に再レンダリングされるため、わざわざ再読み込みを行わなくても反映される
//処理が重くなる原因にもなるのでのちのち注意！！
