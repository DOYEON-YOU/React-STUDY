import './App.css';
import {useState} from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '아기 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  let clickLike = function(){
    따봉변경(따봉 + 1)
  }
  let [postNum, postChange] = useState(0);
  let ChangePostNum = function(){
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy)
  }

  //! array와 state 생성은 다르다.
  //@ 변수는 값을 바꾸어도 html에 바로 반영되지 않지만, state는 바로 반영이 된다.
  //# 동적인 값은 state, 정적인 값은 변수

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div> 
      <div className="list">
        <h4>{글제목[postNum]} <span onClick={clickLike}>💘</span> {따봉} </h4>
        <p>5월 발행</p>
      </div>
      <hr />
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>5월 발행</p>
      </div>
      <hr />
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>5월 발행</p>
      </div>
      <hr />
      <button onClick={ChangePostNum}>변경</button>
    </div>
  );
}

export default App;
