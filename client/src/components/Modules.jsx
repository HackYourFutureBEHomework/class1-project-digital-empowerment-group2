import React, { Component} from 'react';
import { getModules, createModule } from '../api/modules';

class Modules extends Component {
  constructor() {

    super();
    
      this.state = {
        
      title:'',
      // nextID: 1,

      modules: [
                  // {
                  //   _id: 1,
                  //   title: 'Using google'
                  // },
                  // {
                  //   _id: 2,
                  //   title: 'Using the address bar'
                  // },
                  // {
                  //   _id: 3,
                  //   title: 'Sending an email'
                  // }
              
              ],
    
  };
}

  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });

    //    createModule()
    //   .then((newModule) => {
    //     this.setState({
    //       title: '',
    //       modules: this.state.modules.concat({newModule})
    //     })
    // // Add the new module to the array in state
    //   });
  }

  
  handleChange = e => {
    this.setState({
      title: e.target.value
    });
};

 


  addNewModule = (e) => {
    e.preventDefault()
    createModule(this.state.title)
    .then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: ""
      });
});
    
    // const { modules, nextID} = this.state
    // const newtitle = this.newItemText.value
    // const newitem ={
    //   _id: nextID,
    //   newtitle
    // }
    // const newmodule =[ ...modules, newitem]
    // this.setState({
    //   modules: newmodule,
    //   nextID: nextID +1
    // })
    // this.newItemText.value = ''
    // createModule(this.state.title)
    //   .then((newModule) => {
    //     this.setState({
    //       title: '',
    //       modules: this.state.modules.concat({title})
    //     })
    // // Add the new module to the array in state
    //   });
  }
    // if(newmodules){
    // this.setState({
    //   newModule: '',
    //   modules: modules.concat({newmodule:newmodule})
    // })
  // }
    
 

//  addmodules =(e)=>{
//   this.setState({
//     title: e.target.value
//   })

// }

  render() {
    const { modules } = this.state;


      return (
        <div className='container'>
          <div className='container1'>
            <h1> PROJECT DIGITAL EMPOWERMENT</h1>
            <span>Manage Users</span> 
            <br/>
            <span> Log out</span>
          </div>
          
           <div className='container2'>
           <h1>Module</h1>
           <input  
              type='text'
              placeholder="Enter new module" 
              onChange={this.handleChange}
              value = {this.state.title}
           />
         
           <button className=""
              onClick ={this.addNewModule} 
           >Add module </button>
           {/* <button className=''> Delete Module</button> */}
           </div>
           
          <div className="modulesliste">
          {modules.map((module) => <div className= 'module' key={module._id}
          >{module.title}</div>)}
        </div>

        </div>
      )
   
  }
  }


export default Modules;













