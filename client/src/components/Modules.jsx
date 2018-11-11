import React, { Component} from 'react';

import { getModules, createModule ,    deleteModule,
  updateModule } from '../api/modules';
import EditModule from './EditModule'
import Module from './Module'

class Modules extends Component {
  constructor(props) {

    super(props);
    
      this.state = {
        
      title:'',
      modules: [],
      
                  };
      
   
      
}



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

  addModule = e => {
    e.preventDefault();
    createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
       
      });
    });
  };
 

handleDelete = (event, module)=>{ 
  event.stopPropagation();
  deleteModule(module).then(()=> {
    const modules = this.state.modules;
    modules = modules.filter(m => m !== module);
  this.setState({ modules: modules });
  if (this.selectedModule === module){
    this.setState ({selectedModule:null})
  }
});
}

  handleSelect = (module) =>{
    this.setState({ selectedModule: module})


  }
  handeleSave = () =>{
    const modules = this.state.modules;
    // if (this.state.addNewModule)
    
    updateModule(this.state.selectedModule)
    .then(newModule => {
      this.setState({ selectedModule: null
        
      });
    });
  


  }

  handleCancel = () =>{
    this.setState({ selectedModule: null})


  }
  hanlechange = (e) =>{
    let selectedModule = this.state.selectedModule;
    selectedModule[e.target.name]= e.target.value;
    this.setState({ selectedModule: selectedModule});


  }

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
                value = {this.state.title}
            />
            
          
            <button className="btn"
                
                onClick ={this.addNewModule} 
            >Add module </button>
  
              </div>
            
            <ul 
                
                >
                
                
                {modules.map(module =>{ 
                  return < Module 
                         key={module._id}
                         module={module} 
                         onSelect = {this.handleSelect} 
                         selectedModule ={this.selectedModule}  
                         onDelete = {this.handleDelete}
                         />;
               
              })}
                
            </ul>
            
             <div className = 'editarea'> 
      
              <  EditModule  
                
                selectedModule={this.state.selectedModule}
                onChange = {this.hanlechange} 
                onSave = { this.handeleSave}
                onCancel = {this.handleCancel}
                onDelete = {this.handleDelete}
              />

             </div>
             </fieldset>
          
          </div>

        
      )
    
      
    }
  
}

export default Modules;
