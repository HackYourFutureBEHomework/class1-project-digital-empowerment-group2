import React, { Component} from 'react';
import { getModules , createModule} from '../api/modules';
//import  Form from  './form.js'


class Modules extends Component {
  state = {
   
    modules: [  
    {
      _id: 1,
      title: 'Using google'
    },
    {
      _id: 2,
      title: 'Using the address bar'
    },
    {
      _id: 3,
      title: 'Sending an email'
    }

   ]
   
    
  };

  // addNewItem = (e) => {
  //   e.preventDefault()
    
  //   const title = this.newItemText.value
    
  //   const newtitle = {
  //     _id: nextID,
  //     title
  //   }
  //   const newmodules = [... modules, newmodule]
  //   this.setState({
  //       modules: newmodules,
  //       nextID: nextID +1
      
  //   })
  //   this.newItemText.value = ''
    
  // }
  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });

    createModule({ title: 'user provided module title' })
    .then((newModule) => {
    // Add the new module to the array in state
  });

  }

  render() {
    const { modules } = this.state;

    if (modules.length > 0) {
      return (
        <div>
          {/* <form onSubmit={this.addNewItem}>
          <input className="" 
          type='text'
           ref={el=>this.newItemText = el}
           required
          placeholder="Enter module title -" />
         
          <button className="" onClick={this.handleSubmit}>Add module </button>
          </form> */}
          <button onClick={this.addModule}>Add module</button>
          {modules.map((module) => <li key={module._id}>{module.title}</li>)}
          
        </div>
      )
    } else {
      return (
        <p>There are no modules yet</p>
      )
    }
  }
}

export default Modules;
