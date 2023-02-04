import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Todos from './component/Todos';
import Add from './component/Add';
import { useState } from 'react';

function App() {
  const [tasks,setTasks]=useState([ ])

const deleteTask = (data)=>{
  console.log("wil delete soon",data)
 setTasks(tasks.filter((ele)=>{
  return ele!==data
 }))

  
}
const addTask = (data)=>{
  let date= new Date().toLocaleString();
  if(tasks.length===0){
    setTasks([{id:1,desc:data, date:date}])
  }else{
    setTasks([{id:tasks.length+1,desc:data, date:date},...tasks])
  }
}
  return (
    <>
{/* <Header/> */}

<Todos data={tasks} deleteTask={deleteTask} addTask={addTask} />
</>
  );
}

export default App;
