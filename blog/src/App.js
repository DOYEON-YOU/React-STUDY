/* eslint-disable */
//@ 이거 적어주면 터미널 창에 never used 어쩌고 저쩌고 하는 오류 안 뜸.

import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '여자 코트 추천',
    '아기 코트 추천',
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [postNum, postChange] = useState(0);

  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState('');
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>
        변경
      </button>
      {/* 게시글 만드는 반복문 */}
      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}>
              {a}{' '}
              <span
                onClick={e => {
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                  e.stopPropagation();
                }}>
                💘
              </span>{' '}
              {따봉[i]}{' '}
              <button
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={e => {
                  let copy=[...글제목]
                  copy.splice(i, 1);
                  글제목변경(copy)
                  e.stopPropagation();
                  따봉.pop();
                }}>
                삭제
              </button>
            </h4>
            <p>5월 발행</p>
            <hr />
          </div>
        );
      })}

      <input
        type='text'
        onChange={e => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.push(입력값);
          글제목변경(copy);
          따봉.push(0);
        }}
        style={{ backgroundColor: 'black', color: 'white' }}>
        발행
      </button>

      {/* state modal의 값이 true일 때 모달창 띄우기 */}
      {modal == true ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}

// Modal 컴포넌트

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button>글 수정</button>
    </div>
  );
}

export default App;

//* State

//# array와 state 생성은 다르다.

//& 변수는 값을 바꾸어도 html에 바로 반영되지 않지만, state는 바로 반영이 된다.

//@ 동적인 값은 state, 정적인 값은 변수

//- state를 작명할 때에는 let [state, setState] = useState(); 로 작명하는 것이 일반적이다.

//~ state를 세팅할 때 필요한 state 변경 함수는 set~ 으로 작명하는 것이 관습이다.

//* 컴포넌트

//# 컴포넌트 만드는 법
// function 컴포넌트명(){ return(넣고 싶은 html) }
// Arrow Function을 사용해도 된다.
// let/const 컴포넌트명 = () => { return(넣고 싶은 html) }
// 다른 함수의 바깥에서 컴포넌트를 생성한다.
// 많은 div를 한 단어로 줄이고 싶을 때 사용한다.
// 컴포넌트 이름을 작명할 때에는 영어 대문자를 시작으로 보통 작명한다.
// return() 안에는 html 태그들이 평행하게 여러 개가 들어갈 수 없다.
// function App(){} 안에서 만들면 안 된다. App도 또한 컴포넌트이기 때문이다. 컴포넌트 안에 컴포넌트를 만들 수는 없다.

//& 아래의 Modal 컴포넌트를 불러오고 싶을 때는 위의 App 컴포넌트에서 Modal을 Tag 형식으로 불러와 주면 된다.
// <Modal></Modal> 이렇게 적어도 되지만 <Modal/> 이렇게 적어도 됨.

//@ 굳이 div와 같은 html tag를 병렬로(나란히) 쓰고 싶을 때에는, 하나의 div로 또 감싸거나 해야 한다.
// 의미 없는 div를 만들기 싫다면 <></>로 감싸주어도 된다. 이러한 문법을 fragment 문법이라고 한다.

//- 그렇다면 어떤 걸 컴포넌트로 만들면 좋은가?
// 반복적으로 출현해야 하는 html을 축약할 때 컴포넌트로 만들어놓으면 좋다.
// 큰 페이지 하나를 컴포넌트로 만들어 쓰면 좋다.
// 자주 변경되는 html UI들은 컴포넌트로 만들어놓으면 성능 상 좋을 수도 있다.
// 협업할 때 웹 페이지를 컴포넌트 단위로 나누어 작업을 분배하기도 한다.

//~ 컴포넌트는 스코프의 영향을 받는다.
// 즉 다른 함수에 있는 state, 혹은 변수를 타 컴포넌트에서 사용할 수는 없다는 것이다.
// 그렇기 때문에 아무거나 컴포넌트로 만들면 안 되고, 곧 배울 props라는 문법을 이용해
// state를 다른 컴포넌트까지 전해 줘야 비로소 사용이 가능하다. 꼭 필요한 것만 컴포넌트로 만들자.

//* 동적인 UI 만들기

//# 동적인 UI 만드는 3 Step
// html, css로 미리 디자인을 완성한다.
// UI의 현재 상태를 state로 저장한다.
// state에 따라 UI가 어떻게 보일지 조건문 등으로 작성한다.

//& JSX에서 조건문 쓰는 법
// 조건문은 if / else 문법을 사용하면 되는데, JSX 안에서는 그렇게 사용할 수 없다.
// if문 대신 삼항연산자를 사용하여 조건문을 쓸 수 있다.
// 조건문 ? true일 때 실행될 코드: false일 때 실행될 코드

//@ 컴포넌트에서 조건문 작성하기
// 컴포넌트의 return 안에 조건문을 사용하게 되는데, return 안에 조건문을 사용할 때에는
// 조건문은 html이 아니므로 중괄호{} 로 감싸준 후에 삼항연산자로 조건문을 작성해 주면 된다.

//- 리액트에서 UI를 만드는 과정은 스위치와 전등을 만드는 것과 비슷하다.
// 전등을 예쁘게 달아놓고 스위치를 연결해 on/off로 전등을 조작할 수 있게끔 스위치를 만드는 것이다.
// 여기서 전등은 Modal을 포함한 컴포넌트이고, 스위치는 state이다.
// 왜냐하면 modal이라는 state로 조건문을 작성해서 true일 때 <Modal/>이 보여지게끔 만들어 놓았으니 그렇다.

//~ 과제를 해보면서
// 조건문을 써야 한다는 것은 직감적으로 알고 있었다. 근데 어떻게 써야 하지? 하면서 분명히 머릿속에서는 로직이 그려졌었는데,
// 그 로직을 어디다 써야 하는지 모르겠어서 결국에 그냥 답을 펼쳐봤다. 답 코드를 보지 않고 글 제목을 클릭했을 때
// 지금 state가 true이면 setModal(false), 지금 state가 false이면 setModal(true)로 설정해 주면 된다는 것을 보고
// 바로 코딩을 해보았는데, 코딩이 끝난 후에 답을 보니 살짝 자괴감이 든다. 저렇게 간결하게 표현할 수 있는 코드를 나는 이렇게 길게 썼다고?

//? onclick={() => {modal == true ? setModal(false) : setModal(true)}}
// 내가 쓴 코드

//? onclick={() => {setModal(!modal)}}
// 코딩애플 페이지에 나와 있는 정답

// 느낌표(!)를 붙이면 느낌표의 우측 자료를 반대로 바꿔준다는 것을 알고는 있었지만, 여기서는 써먹을 생각을 전혀 못했다.
// 그러니까 이 코드는, 클릭했을 때 state 설정 함수를 통해 현재 modal 상태의 반대(true이면 false, false이면 true) 상태로
// 바꾸어 달라는 이야기였다.

//* 반복문

//# 똑같은 html 반복문으로 생성하기
// 똑같은 html을 계속해서 생성해야 할 때가 있다. 직접 html로 구현해도 되지만, 굉장히 귀찮고 지저분하기 때문에
// 반복문을 통해 생성하는 것이 훨씬 정신 건강에 이롭고 편리하다.

//& map 함수 써보기
// 모든 array 자료 우측에는 map() 함수를 붙일 수 있다. Array.prototype.map() 이기 때문이다.
// 쉽게 말해 기본적으로 Array에서 사용할 수 있게끔 프로토타입 체인으로 연결된 기능이라는 말이다.
// 이미 자바스크립트 공부를 하면서 정리를 해놨지만, 다시 한 번 복습해 보자.

//& let arr = [1, 2, 3];
//& arr.map(function(a, i){
//&  console.log(1)
//& })

// array에 들어가 있는 자료 갯수(위에서는 3개)만큼 안에 있는 코드를 반복 실행 시켜준다.
// 위 예시로 봤을 때, 콘솔창에 1이 세 개 찍혀있을 것이다.
// map은 콜백함수가 필요한데, 콜백함수에 인자를 넣어 여러가지 용도로 사용할 수 있다.
// 위 예시에서 콜백함수가 인자로 받은 a과 i를 쉽게 풀어보자.

// a는 item을 출력해 주는 인자이다. 말 그대로 배열에 담겨 있는 item을 말이다.
// 만약 console.log(1)이 아닌 console.log(a)를 작성했을 때, 콘솔에는 1 2 3이 순서대로 찍혀있을 것이다.
// i는 arr이라는 배열의 index를 출력해 주는 인자이다. 만약 console.log(i)를 작성했을 때에는,
// 0 1 2 가 콘솔에 출력되어 있을 것이다.

//@ 그럼 리액트에서 html을 반복 실행 하고 싶으면
// map 함수를 쓰면 된다. 조건문을 쓸 때와 동일하게 중괄호{} 안에서 반복문을 실행하면 되고,
//@ Array.map(function(a){
//@   <div key={i}>{a}</div>
//@ })
// 이런 식으로 적으면 된다.

//- map 반복문을 실행하면 뜨는 오류
// map 반복문으로 html을 반복적으로 생성할 때에는, key를 꼭 입력해 주어야 한다.
// 그래야 리액트가 html 요소를 각각 구분할 수 있어서 그렇다.
// 적지 않으면 콘솔창에 워닝 뜨고 난리난다.

//~ for문을 쓰고 싶어요
// 자바스크립트를 했으니 친숙한 for문이 쓰고 싶다.

// 그렇다면 html을 담아둘 array 자료를 하나 만들어준 후,
//~ (let arr=[];)
// 일반 for문을 통해서 arr에 html을 넣어주는 반복문을 돌린다.
//~ for(let i = 0; i < 9; i++){
//~   arr.push(<div>Hello!</div>)
//~ }
// for문이 돌아가면서 반복될 때마다 array 자료에 html을 하나씩 추가해 준다.
// 원하는 곳에서 {arr}을 사용해 주면 된다.

//? for문 vs map()
// for문은 JSX 안에서 사용할 수 없고, map은 중괄호를 통해 사용할 수 있다.
// 굳이 for문을 사용하고 싶으면 사용해도 괜찮지만, 협업할 때 욕 먹지 않을까?
// 그냥 욕 먹을 일도 없고 마음도 편하게 map 쓰자.

//* props

//# Modal 컴포넌트에 글제목 state가 필요하면?
// 부모 컴포넌트인 App, 그 안에 있는 자식 컴포넌트인 Modal 컴포넌트에서 props 문법을 사용하면 가능하다.
// 무조건 부모 => 자식으로만 전송해 줄 수 있으며, 자식 => 부모(패륜전송), 자식 => 자식(불륜전송)은 안 된다.

//& props로 부모에서 자식으로 state를 전송할 수 있는 2 Step
// 자식 컴포넌트를 사용하는 곳으로 가서 <자식컴포넌트명 작명={state이름}/>으로 바꿔 준다.
// 자식 컴포넌트에서 props라는 인자를 넣은 후에 return에서 props.작명 식으로 사용해 주면   된다.
// 여기서 작명은 아무렇게나 해도 상관 없으나, state 이름과 똑같이 작명하는 경우가 대부분이다.

//@ 꼭 state만 전송할 수 있나?
// props는 10개, 100개, 1000개 무한히 전송이 가능하다. 물론 state가 아닌
// 함수, 변수, String 등 많은 것들을 전송할 수 있다.
// 문자열을 전송할 때에는 중괄호 없이 <컴포넌트명 전달체명="문자열"> 로 작성할 수 있다.

//- 저는 모달창 색깔을 여러가지로 만들고 싶은데요?
// 컴포넌트를 따로 만들어도 되지만, 내용은 같은데 배경색만 다르다면 굳이 같은 컴포넌트를 만들 필요가 없다.
// 인자로 props를 준 자식 컴포넌트에서 모달창에 여러 가지 색깔을 넣고 싶다면,
// 부모 컴포넌트에서 자식 컴포넌트로 전송할 때에 어차피 orange, pink 등 색깔은 문자열이기 때문에
//- <Modal color="orange"/>
// 처럼 전송해도 되고,
//- <Modal color={"orange"}/>
// 처럼 전송해도 된다.
