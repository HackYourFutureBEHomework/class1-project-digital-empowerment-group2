import React from 'react';


const Module = (props) =>{
    return(
      
        <li  className = 'module'
                 onClick ={()=>  props.onSelect(props.module)}>
            <div>
                 
                 <div> {props.module.title} </div>
                </div>
                <nav className="edit">
                <button className = 'delete-button'
                onClick ={(e) =>  props.onSelect(e, props.module._id)}
                > Edit </button>
                <button className = 'delete-button'
                onClick ={(e) =>  props.onDelete(e, props.module._id)}
                > Delete </button>
                </nav>
                
        </li>
        
    )
}
export default Module