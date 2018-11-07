import React, { Component} from 'react';
import { getModules, createModule } from '../api/modules';



class Modules extends Component {
  constructor() {

    super();
    
      this.state = {
        
      title:'',
      // nextID: 1,

      modules: [
                 
              
              ],
    
  };
}

  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });


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
    
   
}


   
  render() {
    const { modules } = this.state;


      return (
        <div className='container'>

            <div className='container1'>
                  <h1> PROJECT DIGITAL EMPOWERMENT</h1>
                  <br/>
                  <div className= 'user'>
                      <span>Manage Users</span> 
                      <br/>
                      <span> Log out</span>
                  </div>
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
                  
            </div>
           
          <div className="modulesliste">
          {modules.map((module) => <div className= 'module' key={module._id}
          >
          {/* {<input type='checkbox'/>} */}
          {module.title} <br/>
          {<button>Delete</button>}
          </div>)}
        </div>

        </div>
      )
   
  }
  }


export default Modules;













