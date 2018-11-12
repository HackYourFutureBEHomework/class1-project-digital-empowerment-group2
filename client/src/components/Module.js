import React from 'react';

const Module = (props) =>{
    return(
        <ul>
            <li  className = 'module'
            >
                <div> 
                    {props.module.title} 
                </div>   
                <nav className="edit">
                    <button 
                        className = 'glyphicon glyphicon-edit'
                        onClick ={()=>  props.onSelect(props.module)}
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
                    
            </li>
        </ul> 
    )
}
export default Module














// import React from 'react';


// const Module = (props) =>{
//     return(
      
//         <li  className = 'module'
//         onClick ={()=>  props.onSelect(props.module)}>
//    <div>
        
//         <div> {props.module.title} </div>
//        </div>
//        <nav className="edit">
//        <button className = 'delete-button'
//        onClick ={(e) =>  props.onSelect(e, props.module._id)}
//        > Edit </button>
//        <button className = 'delete-button'
//        onClick ={(e) =>  props.onDelete(e, props.module._id)}
//        > Delete </button>
//        </nav>
       
// </li>
        
//     )
// }
// export default Module