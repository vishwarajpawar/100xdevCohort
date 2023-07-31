import axios from "axios";
import React, { useEffect } from "react";


function App() {
  const [todos , setTodos] = React.useState([]);

  React.useEffect(()=> {
    axios.get('http://localhost:3001/todos').then((response) =>
    {
      setTodos(response.data);
    }
    ).catch((err)=> {console.log(err.message)});


    setInterval(()=>{
      axios.get('http://localhost:3001/todos').then((response) =>
      {
        setTodos(response.data);
      }
      ).catch((err)=> {console.log(err.message)})
  
  
    },2000)

  },[]);

  return (
    <div>
      {todos.map((todo)=> {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
      </div>
  )
}

function Todo(props){
  return <div>
  {props.title}
  {props.description}
<br/>
</div>
}

export default App;