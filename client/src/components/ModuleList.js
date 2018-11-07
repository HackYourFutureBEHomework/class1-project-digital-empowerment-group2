import React, { Component } from 'react'
import EditableLabel from "react-inline-editing";
import Modules from './Modules.jsx'

class ModuleList extends React.Component {

   render() {
      const {id, title} = this.props
    return (
      <label className={done ? 'done' : ''}>
      <div className="listItem">
        <span>
              <input type="checkbox"
                         checked={done}
                         onChange={() => { todoItemClicked(id)}}
              />
        </span>
        
        <span>   
                  <EditableLabel 
                      text={description + ", " + deadline}
                      
                      //inputClassName="myInputClass"
                      inputWidth="300px"
                      inputHeight="25px"
                      // labelFontWeight="bold"
                      // inputFontWeight="bold"
                      onFocus={this.handleFocus}
                      onFocusOut={this.handleFocusOut}/>
       </span>
        
        <span>
              <button type="button" 
              className="RemoveButton" 
              onClick={() => {itemRemoved(id)}}>Delete</button>
        </span>
        
      </div>
    </label>
    )
  }
}

export default Form;