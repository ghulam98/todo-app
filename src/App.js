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
    setTasks([{id:1,desc:data, date:date,flag:true}])
  }else{
    setTasks([{id:tasks.length+1,desc:data, date:date, flag:true},...tasks])
  }
}
const update = ( isChecked, id)=>{
  setTasks( tasks.map((ele)=>{
    if(ele.id === id){
      if(isChecked) ele.flag=false
      else ele.flag = true
      console.log("updatyed",ele)
    }
    return ele
  }))

}
  return (
    <>
{/* <Header/> */}

<Todos data={tasks} deleteTask={deleteTask} addTask={addTask} update = {update} />
</>
  );
}

export default App;
