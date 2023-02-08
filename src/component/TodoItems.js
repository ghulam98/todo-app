

export default function TodoItems(props) {
const check = (isChecked,id)=>{
  props.update(isChecked,id)

}
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
                    {itm.flag?
                    <li className="list-group-item border-0 d-flex align-items-center ps-0" key={itm.id}>
                    <input className="form-check-input me-3" onChange={(e)=>check(e.target.checked, itm.id)} type="checkbox" value="" aria-label="..." />
                    {itm.desc}
                    <small> | {itm.date}</small>
                </li>
                    :
                    <li className="list-group-item border-0 d-flex align-items-center ps-0" key={itm.id}>
                    <input className="form-check-input me-3" onChange={(e)=>check(e.target.checked, itm.id)} type="checkbox" value="" aria-label="..." />
                    <s>{itm.desc}</s>
                    <s><small> | {itm.date}</small></s>
                    <button className="btn btn-sm btn-outline-danger" onClick={()=>props.deleteTask(itm)} >Delete</button>
                </li>}
                   
                    </>
                    )
                }):
           
                 <b>No Any task remain. U did all, Congrats.!</b>
              
            
            }
             

             
             
        </ul>
    </div>
  )
}
