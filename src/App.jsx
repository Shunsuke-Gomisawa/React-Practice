import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  //ここが状態を表す"state"である
  const [num, setNum] = useState(0); //ここは初期値を入れる
  const [faceShowFlag, setFaceShowFlag] = useState(false); //ここで実際にstateが変更されたりしている

  //ここは"state"における関数処理を描く
  const onClickUp = () => {
    return setNum(num + 1); //ここのreturnは省略可能
  };
  //ボタンを押すと絵文字の表示非表示が切り替わる関数処理
  //ここの処理はstateを更新しているので、ボタンを押すとまた初めから再レンダリングされてしまう
  const onClickSwitchShowFlag = () => {
    return setFaceShowFlag(!faceShowFlag); //ここのreturnは省略可能
  };

  //関心の分岐
  //numの値に関心を持ち、faceShowFlagには関心を持たないようにした
  //これにより、子コンポーネントでありながら親コンポーネントであるAppのstate
  //「faceShowFlag」が更新された場合はレンダリングがされなくなった
  useEffect(() => {
    //3の倍数の時に顔文字が表示されるようにする
    console.log("useEffectを通過");
    if (num > 0) {
      if (num % 3 === 0) {
        //orを使うことによって、すでにフラグがtrueの場合はset関数を呼ばないようにすることで、無限レンダリングを回避
        //左がfalseの時、右側を返す
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
      {/* 以下共通のコンポーネント（共通パーツ）を使うことでわかりやすく書くことができる 
      今回のpropsの名前はcolor↓で、代入するのは“blue”という情報*/}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>

      <ColorfulMessage color="pink">はい！元気です！！</ColorfulMessage>
      <button onClick={onClickUp}>カウントアップ!</button>
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
