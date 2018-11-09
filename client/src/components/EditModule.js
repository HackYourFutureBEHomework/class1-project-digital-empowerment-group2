import React, { Component} from 'react';
//import { getModules } from '../api/modules';

//const  EditModule = () =>
const  EditModule = (props) =>{
    // constructor(props){
    // super(props);
    // }
    
    if(props.selectedModule){
        return(
            
            <div className = 'editfields'>
             {/* <div>
                 <label> _id </label>
                 { addingModule
                  ? <input
                    type = 'number'
                    name = '_id'
                    placeholder = 'id'
                    value ={props.module_id}
                    onChange = {props.onChange}
                    />
                    : <label className = 'value'>
                       </label>}
                    
                 }
              </div> */}
              <div> 
                  <label> title:</label>
                  <input 
                   name='title'
                   value= {props.selectedModule.title}
                   placeholder = 'title'
                   onChange = {props.onChange}
                   />

              </div>
              <button onClick = {props.onCancel}> Cancel </button>
              <button onClick = {props.onSave}> Save </button>

              </div>








            

        );

    } else {
        return <div />
    }
 


}

  

export default EditModule;