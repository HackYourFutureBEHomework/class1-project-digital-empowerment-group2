import React, { Component} from 'react';
const  EditModule = (props) =>{
    
    if(props.selectedModule){
        return(
            <div className = 'editfields'>
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