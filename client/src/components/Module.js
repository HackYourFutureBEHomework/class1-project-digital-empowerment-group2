import React from 'react';


const Module = (props) =>{
    return(
      
        <li  className = 'module'
             //className={props.module === props.selectedModule ? 'seleted': ''}
             
                 onClick ={()=>  props.onSelect(props.module)}
                
                >
                <div>
                 {/* <div> {module._id} </div> */}
                 <div> {props.module.title} </div>
                </div>
                <button className = 'delete-button'
                onClick ={() =>  props.onDelete(props.module)}
                > Delete </button>
        </li>
        
    )
}
export default Module