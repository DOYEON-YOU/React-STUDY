/* eslint-disable */
//@ 이거 적어주면 터미널 창에 never used 어쩌고 저쩌고 하는 오류 안 뜸.

import './App.css'
import { useState } from 'react'

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '여자 코트 추천',
    '아기 코트 추천',
  ])

  let [따봉, 따봉변경] = useState([0, 0, 0])

  let [postNum, postChange] = useState(0)

  let [modal, setModal] = useState(false)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목]
          copy[0] = '여자 코트 추천'
          글제목변경(copy)
        }}
      >
        변경
      </button>

      {/* 게시글 만드는 반복문 */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                modal == true ? setModal(false) : setModal(true)
              }}
            >
              {a}{' '}
              <span
                onClick={() => {
                  따봉변경(따봉[i] + 1)
                }}
              >
                💘
              </span>{' '}
              {따봉[i]}{' '}
            </h4>
            <p>5월 발행</p>
            <hr />
          </div>
        )
      })}
      {/* state modal의 값이 true일 때 모달창 띄우기 */}
      {modal == true ? <Modal /> : null}
    </div>
  )
}

// Modal 컴포넌트

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App

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

//* map
