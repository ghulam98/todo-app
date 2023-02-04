import React from 'react'
import  { useState } from 'react'

export default function Add(props) {
    const [kam,setKam] = useState("")
    const submit = (e)=>{
      e.preventDefault()
      console.log("lll")
      if(!kam){
        alert("input field can't be empty")
        return
      }
      props.addTask(kam)
      setKam("")
  
  
    }
  return (
    <div>
      <form className="d-flex bg-grey my-2" role="search" onSubmit={submit}>
                    <input className="form-control me-2" type="text" value={kam} onChange={(e)=>setKam( e.target.value)} placeholder="Add Task here" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Add</button>
                </form>
    </div>
  )
}
