import React, { Component} from 'react';

import { getModules, createModule ,    deleteModule,
  updateModule } from '../api/modules';
import EditModule from './EditModule'
import Module from './Module'
//import Trigger from './Trigger'
import{ Button ,Modal} from 'react-bootstrap'

class Modules extends Component {
 state = {
      title:'',
      modules: [],
      selectedModule: null,
      show:false
          };

  HandleDialoge=() =>{
    this.setState({ show: !this.state.show });
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
    console.log(this.state.title)
    e.preventDefault();
    //this.setState({show:true})
    createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
        
      });
    });
  };
 

  handleDelete =  id => { 
    deleteModule(id);
      this.setState({     
        modules:this.state.modules.filter( mod => mod._id!== id )
      });
    };
  


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
          <h2 > Using a web browser</h2>
          <fieldset className= ''>
              <legend className='' >modules :</legend>
              <div className = 'container2'>
                <div className="modal-container">
                        <Button 
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.HandleDialoge}
                            >
                            Add module
                          </Button>
                          <Modal
                            show={this.state.show}
                            onHide={this.HandleDialoge}
                            aria-labelledby="contained-modal-title"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="contained-modal-title">
                                Add New Module
                              </Modal.Title>
                            </Modal.Header>
                            <input type='text' placeholder='Enter The title' onChange={this.handlingChange}></input>
                            <button onClick={this.addModule}>submet</button>
                            <Modal.Body>
                              you can add the 
                            </Modal.Body>
                            <Modal.Footer>
                              <Button onClick={this.HandleDialoge}>Close</Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
            </div>
              <ul>
                  {modules.map(module =>{ 
                    return (
                      <Module 
                        key={module._id}
                        module={module} 
                        onSelect = {this.handleSelect} 
                        selectedModule ={this.state.selectedModule}  
                        onDelete = {this.handleDelete}
                        //onEdit={this.handlechange}
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
          </fieldset>
          
          </div>
        )
      
    }
  
}

export default Modules;