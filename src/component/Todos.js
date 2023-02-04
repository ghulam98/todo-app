import React from 'react'
import TodoItems from './TodoItems'
import Add from '../component/Add'

export default function Todos(props) {
    const styl={backgroundColor:'#3da2c3'}
  return (
    <div>
      <section className="vh-100" style={styl}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <div className="card-body p-4">

            <p className="mb-2"><span className="h2 me-2">Team Meeting</span> <span
                className="badge bg-danger">checklist</span></p>
            <p className="text-muted pb-2">04/01/2020 • ML - 1321</p>

            {/* <ul className="list-group rounded-0">
              <li className="list-group-item border-0 d-flex align-items-center ps-0">
                <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." checked />
                <s>Task list and assignments</s>
              </li>
              <li className="list-group-item border-0 d-flex align-items-center ps-0">
                <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                Set due date and assignments
              </li>
             
            </ul> */}
            <Add addTask={props.addTask}/>
            <TodoItems data={props.data} deleteTask={props.deleteTask} addTask={props.addTask}/>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center mx-3 mb-0" style={{color: '#a2aab7'}}>Shared with</p>
            </div>

            <ul className="list-group rounded-0 list-group-horizontal justify-content-center pb-2">
              <li className="list-group-item border-0 d-flex align-items-center p-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                  className="rounded-circle me-n2" width="45"/>
              </li>
              <li className="list-group-item border-0 d-flex align-items-center p-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                  className="rounded-circle me-n2" width="45"/>
              </li>
              <li className="list-group-item border-0 d-flex align-items-center p-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                  className="rounded-circle me-n2" width="45"/>
              </li>
              <li className="list-group-item border-0 d-flex align-items-center p-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                  className="rounded-circle me-n2" width="45"/>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
