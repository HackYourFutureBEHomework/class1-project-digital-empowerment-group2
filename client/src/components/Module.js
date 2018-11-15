
import React from 'react';


const Module = (props ) =>{

    return(
        <ul>
            <li  className = 'module'>
                <div> 
                    {props.module.title} 
                </div>  
                <div>
                    <nav className="edit">
                        <button 
                            className = 'glyphicon glyphicon-edit'
                            onClick ={()=>  props.onSelect(props.module_id)}
                        > 
                        Edit
                        </button>
                        <button 
                            className = 'glyphicon glyphicon-trash'
                            onClick={() => 
                                {if (window.confirm(`Are you sure you want to delete?  `))
                                    props.onDelete( props.module._id);
                                }}
                        >
                        Delete
                        </button>
                    </nav>
                </div>     
            </li>
        </ul> 
    )
}
export default Module
