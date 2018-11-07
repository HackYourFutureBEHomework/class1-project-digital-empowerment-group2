import React, { Component} from 'react';
import { getModules, createModule } from '../api/modules';

class Modules extends Component {
  state = {
    newmodules:'',
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
  
    ],
    isLoading: false
  };

  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });

    createModule({ title: 'user provided module title' })
      .then((newModule) => {
    // Add the new module to the array in state
      });
  }

  addNewModule = (e) => {
    e.preventDefault()
    
    const {newmodules, modules} = this.state
    
  if(newmodules){
    this.setState({
      newModule: '',
      modules: modules.concat({newmodules:newmodules})
    })
  }
    
 }


  render() {
    const { modules , newmodules} = this.state;

    if (modules.length > 0) {
      return (
        <div>
          {/* <button onClick={this.addNewModule.bind(this)}>Add module</button> */}
           <form onSubmit={this.addNewModule.bind(this)}>
           <input className="" 
           type='text'
          value = {newmodules}
           placeholder="Enter new module" 
           onChange={(e) => this.setState({newmodules: e.target.value})} />
         
           <button className="" >Add module </button>
           </form>
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













