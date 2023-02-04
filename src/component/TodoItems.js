

export default function TodoItems(props) {

  return (
    <div>
           
        <ul className="list-group rounded-0">
              {/* <li className="list-group-item border-0 d-flex align-items-center ps-0">
                <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                <s>Task list and assignments</s>
              </li>
              <li className="list-group-item border-0 d-flex align-items-center ps-0">
                <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                Set due date and assignments
              </li> */}
            
            
            {/* {(()=>{if(props.data.length ) return <b>knkknnkn</b>})()} */}
            { props.data.length!==0?props.data.map((itm)=>{
                    return(<>
                    <li className="list-group-item border-0 d-flex align-items-center ps-0" key={itm.id}>
                    <input className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
                    {itm.desc}
                </li>
                    <div style={{ right: 0}}>
                    <button className="btn btn-sm btn-outline-danger" onClick={()=>props.deleteTask(itm)} >Delete</button>
                    <i>{itm.date}</i>
                    </div>
                    </>
                    )
                }):
           
                 <b>No Any task remain. U did all, Congrats.!</b>
              
            
            }
             

             
             
        </ul>
    </div>
  )
}
