import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  //버튼 스타일 객체로 만들기 
  const buttonStyle = {
    color: 'pink',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    float: 'right',
    marginLeft: '3px'

  };




  const itemStyle = (finished)=> { //스타일을 함수로 만들어서 줌. 아래의 스타일을 리턴해줌
    return {
      textDecoration: finished ? "line-through" : "none",
      borderBottom: "1px solid black",
      padding:"5px"
    };
  };

    let [todoData, setTodoData] = useState([
      {id:"1",
      itemName:"점심먹기",
      finished:false,
      },

      {id:"2",
      itemName:"커피마시기",
      finished:false,
      },

      {id:"3",
      itemName:"집에가기",
      finished:false},
      //'점심먹기','커피마시기','낮잠자기' //유니크한 key를 줘서 값을 구분하기 BEM이나 시간으로 보통함
    ]);

    let [inputTodo, setInputTodo] = useState("")

  return (
    <div className="container">
      <div className='todoHeader'> 
      <div>
        <h1>Todo List</h1>
      </div>
      </div>

      <div className='todoSection'>

      <form onSubmit={(event)=>{
        const inputTodo = document.querySelector('input[type=text]').value
        event.preventDefault();
        //먼저 값이 있는지 체크 

        if(inputTodo === ""|| inputTodo === null){ 
          //안되는 경우면 아무것도 수행하지 않도록 비워놓고 

        } else { //된다면 밑의 과정을 수행. 
        
        let saveText = [...todoData]
        saveText.push({
          id:Date.now(),
          itemName: inputTodo,
          finished:false,
        });
        setTodoData(saveText);
      }
      }}> {/*객체형태, 아이디 중복안되게, itemName, finished:False 밑에 추가되도록 */}
      <input type="text" name='value' placeholder='What todo?'/>
      <button >저장</button>
      
      <button onClick={()=>{
        //전체삭제 버튼 누르면 지워지도록 
        
        setTodoData([]);
        //let temp = [...todoData];
        // temp = tmep.filter((tempData)) => {
          //return false;})
          //setTodoData(temp);
        
      }}>

      전체삭제</button>

      </form>

          {  todoData.map((data,i)=> { //반복문으로 내용 넣기.. data를 넣으면 매개변수로 작용해서 값 불림
            //3번돌면서 3번 그려질것 data는 배열의 값을 말하는 것. 
            return(
      <div key = {data.id} style={itemStyle(todoData[i].finished)} className='todoItem'>
      <p>
        <input type="checkbox"  onChange={()=>{
          data.finished = !(data.finished); //클릭도됐다가 풀릴때 마다 true -> false로 변경 
            let temp =[...todoData];
            setTodoData(temp);

        }} defaultChecked={data.finished}
        /> 
        
          {data.itemName} {/*객체가 아니라 객체형태안의 itemName을 가져와야함*/} 
               
         {/*배열 돌면서 todoData의 data를 가지고 출력해줌 {todoData[i]}로써도 가능 */}
          {/*데이터 배열값이랑 연결하기*/}
              


        <button style={buttonStyle} onClick={()=>{

            let temp = [...todoData];
            temp = temp.filter( (tempData) => {
            return tempData.id !== data.id;
              })
            setTodoData(temp);
          }}>삭제</button>
          </p>
        </div>
           );
          })
        }
         </div>

         
         </div>
        );
          }

export default App;
       
       





{/* 
        <div style={itemStyle()} className='todoItem'>
      <p>
        <input type="checkbox"/>
        점심먹기
        <button style={buttonStyle}>삭제</button>
      </p>
      </div>

      <div style={itemStyle()} className='todoItem'>
      <p>
        <input type="checkbox"/>
        공부하기
        <button style={buttonStyle}>삭제</button>
      </p>
      </div>

      <div style={itemStyle()} className='todoItem'>
      <p>
        <input type="checkbox"/>
        낮잠자기
        <button style={buttonStyle}>삭제</button>
      </p>
      </div>
       */}
    