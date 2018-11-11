import React from 'react';


const Module = (props) =>{
    return(
      
        <li  className = 'module'
             
             
                 onClick ={()=>  props.onSelect(props.module)}
                
                >
                <div>
                 
                 <div> {props.module.title} </div>
                </div>
                <button className = 'delete-button'
                onClick ={(e) =>  props.onDelete(e, props.module._id)}
                > Delete </button>
        </li>
        
    )
}
export default Module