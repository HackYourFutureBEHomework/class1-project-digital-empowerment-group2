import React, { Component} from 'react';

import { getModules, createModule ,    deleteModule,
  updateModule } from '../api/modules';
import EditModule from './EditModule'
import Module from './Module'

class Modules extends Component {
 state = {
      title:'',
      modules: [],
      selectedModule: null,
      edit:false
          };

  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });
  }
 
  handlingChange = e => {
     this.setState({
      title: e.target.value
    });
  };

  addNewModule = e => {
    e.preventDefault();
    createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
       
      });
    });
  };
 

handleDelete = (event, id)=>{ 
  deleteModule(id)
    this.setState({     
  modules:this.state.modules.filter( module=>module._id!== id )})
  
  }


  handleSelect = (module) =>{
    console.log(this.state.selectedModule)
    this.setState({ selectedModule: module})
  }
  handeleSave = (module) => {
    const {selectedModule}=this.state

    updateModule(selectedModule).then((updatedModule) => {

      this.setState((previousState) => {
        const modules = [...previousState.modules];
        const index = modules.findIndex(mod => mod._id === selectedModule._id);
        modules[index] = updatedModule;
        return { modules ,selectedModule: null };
      })
    });
  };
 

  handleCancel = () =>{
    this.setState({ selectedModule: null,edit:!this.state.edit})
  }
  handlechange = (e) =>{
    console.log(this.state.selectedModule)
    let selectedModule = this.state.selectedModule;
    selectedModule[e.target.name]= e.target.value;
    this.setState({ selectedModule: selectedModule});
  };
  render() {
    const { modules } = this.state;
      return (
        <div>
          <h2>  Title of the active path</h2>
          <fieldset className= 'container'>
              <legend className='' >modules :</legend>
              <div className = 'container2'>
            
                <input 
                  type='text'
                  placeholder="Enter new module" 
                  onChange={this.handlingChange}
                  value = {this.state.title} />
                <button className="btn"   
                        onClick ={this.addModule} >Add module </button>
              </div>
              {
                modules.length>0?
                <nav>
                  <ul>
                      {modules.map(module =>{ 
                        return (
                          <Module 
                            key={module._id}
                            module={module} 
                            onSelect = {this.handleSelect} 
                            selectedModule ={this.state.selectedModule}  
                            onDelete = {this.handleDelete}
                          />)
                        })}  
                  </ul>
                  <div className = 'editarea'> 
                        <EditModule  
                            selectedModule={this.state.selectedModule}
                            onChange = {this.handlechange} 
                            onSave = { this.handeleSave}
                            onCancel = {this.handleCancel}
                            onDelete = {this.handleDelete}
                        />
                  </div>

              </nav>:<b>No items</b>}
          </fieldset>
          
          </div>
        )
      
    }
  
}

export default Modules;
