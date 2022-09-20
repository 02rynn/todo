import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoItem from "./TodoItem.js";

function App() {
  const buttonStyle = {
    color: "white",
    border: "none",
    padding: "5px",
    cursor: "pointer",
    float: "right",
    backgroundColor: "#F1A661",
    marginLeft: "3px"
  };

  let [todoData, setTodoData] = useState(  [
    { 
      id:"1",
      itemName:"점심먹기",
      finished:false
    },
    {
      id:"2",
      itemName:"커피마시기",
      finished:false
    },
    {
      id:"3",
      itemName:"낮잠자기",
      finished:false
    }
  ]  );
  //"점심먹기", "커피마시기", "낮잠자기",
  
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <div className="todoHeader">
        <div>
          <h1>Todo List</h1>
          <button style={buttonStyle} onClick={ () => {
            //다 지우면 
            setTodoData([]);

            // let temp = [...todoData];
            // temp = temp.filter( (tempData) => {
            //   return false;
            // })
            // setTodoData(temp);
          }}>전체 삭제</button>
        </div>
      </div>

      <div className="todoSection">
        <form>
          <input value={inputValue} type="text" name="value" placeholder="Todo 할거 입력"
                onChange={ (event) => {
                  setInputValue(event.target.value); //input 안에 입력된 text에 접근 가능
                  // console.log(event.target.value);
                }} />
          <button onClick={ (event) => {
            event.preventDefault(); //form 양식에서 버튼이눌리면 (submit) -> submit일어나면 페이지갱신

            //여기서 먼저 값이 있는지 체크
            
            //안되는 경우면 수행이 안되도록 미리필터
            if(inputValue.trim() === "") { //텍스트가 없으면
              console.log('넌 저장 안해준다');
              return; //종료
            }

            let addItem = {
              id:todoData.length+1,
              itemName:inputValue.trim(),
              finished:false
            }
            let temp = [...todoData];
            temp.push(addItem);
            setTodoData(temp);

            //여기서 지워야됩니다~~~
            setInputValue('');
            
          }}>저장</button>
        </form>
        <br/>

        {
        todoData.map((data, i) => { 
          return (
            <TodoItem key={data.id} todoData={todoData} data={data} setTodoData={setTodoData} buttonStyle={buttonStyle}></TodoItem>
          );
        })
        }
      </div>
    </div>
  );
}

export default App;
