import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '게임 추천', '뭥미?']);
  let [따봉, 따봉변경] = useState(0);
  
  function 함수(){
    따봉변경(따봉+1)
  }
  
  function 함수2(){
    let copy = [...글제목];
    copy[0] = '여자 코트 추천'
    글제목변경(copy);
    console.log(1);
  }

  function 복잡한박스(){
    return(
      <div>
        가나다라마바사
      </div>
    )
  }
  
  // // // // // // // // // // // // // // // // // // // // // // // // // // // 
  return (
    <div className="App">
      <div className="text_cont">
        <h4 className="title" style={{fontSize:"20px"}}>ReactBlog</h4>
      </div>
      
      <button className="btn" style={{margin:'20px 0 0 20px'}} onClick={함수2}>버튼</button>

      {/* <button className="btn" style={{margin:'0 0 0 20px'}} onClick={함수3}>가나다순 정렬</button> */}

      <복잡한박스></복잡한박스>
      <복잡한박스></복잡한박스>

      <div className="list">
        <h4>{글제목[0]} <span onClick={함수}>👍</span> {따봉} </h4>
        <p>내용내용내용</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>내용내용내용</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>내용내용내용</p>
      </div>
    </div>
  );

}


export default App;
