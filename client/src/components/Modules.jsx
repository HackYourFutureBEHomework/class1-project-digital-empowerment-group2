import React, { Component} from 'react';

import { getModules, createModule ,    deleteModule,
  updateModule } from '../api/modules';
import Module from './Module'
import{ Button ,Modal} from 'react-bootstrap'

class Modules extends Component {
 state = {
      title:'',
      modules: [],
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
    createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
        
      });
    });
  };

  handleDelete = (id)=>{ 
  deleteModule(id)
  this.setState({     
  modules:this.state.modules.filter( module=>module._id!== id )})
  }
  handeleSave = (module) => {
    console.log(module)
    updateModule(module).then((updatedModule) => {

      this.setState((previousState) => {
        const modules = [...previousState.modules];
        const index = modules.findIndex(mod => mod._id === module._id);
        modules[index] = updatedModule;
        return { modules };
      })
    });
  };

  render() {
    const { modules } = this.state;
      return (
        <div>
          <h2 >  Title of the active path </h2>          
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
                            Hello from the other side
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
                        onChange = {this.handlechange} 
                        onSave = { this.handeleSave}
                        onCancel = {this.handleCancel}
                        //onclick={this.HandleDialoge}
                        //onEdit={this.handlechange}
                      />)
                    })}  
              </ul>
          </fieldset>
          
          </div>
        )
      
    }
  
}

export default Modules;
