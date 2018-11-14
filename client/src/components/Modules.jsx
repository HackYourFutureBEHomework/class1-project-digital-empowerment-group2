import React, { Component} from 'react';

import { getModules, createModule, deleteModule, updateModule } from '../api/modules';
import EditModule from './EditModule'
import Module from './Module'
import{ Button ,Modal} from 'react-bootstrap'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';






class Modules extends Component {
 state = {
      title:'',
      modules: [],
      selectedModule: null,
      show:false, 
      Explanation: '',
      Exercise: '',
      Evaluation: '',
          };

    HandleDialoge=() =>{
      this.setState({ show: !this.state.show });
    }

   componentDidMount() {
   getModules().then((modules) => {
      this.setState({  modules });
    });
  }

  createModule = module => {
       createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        // title: "",
        moduleFormShown: false
      });
    });
  };

  updateModule = (module) => {
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

  deleteModule =  id => { 
    deleteModule(id);
      this.setState({     
        modules:this.state.modules.filter( mod => mod._id!== id )
      });
    };

    showModuleFrom = () => {
      this.setState({ moduleFormShown: true });
    }
  HandleDialoge=() =>{
    this.setState({ show: !this.state.show });
  }

  handlingChange = e => {
     this.setState({
      title: e.target.value
    });
  };
 
  handleEdit = (module) =>{
    console.log(this.state.selectedModule)
    this.setState({ selectedModule: module})
  }

  handleEditChange = (e) =>{
    console.log(this.state.selectedModule)
    let selectedModule = this.state.selectedModule;
    selectedModule[e.target.name]= e.target.value;
    this.setState({ selectedModule: selectedModule});
  };
  // ?????????????????????????????
    handleCancel = () =>{
    this.setState({ selectedModule: null,edit:!this.state.edit})
  }
 // ?????????????????????????????
 handleTextChange = (param) => {
  console.log(param);
    }
  
  handelContentEvaluation(e) {
    if (e.target.name == 'Explanation') {
      this.setState({
        Explanation: e.target.value
      });
    }
    if (e.target.name == 'Exercise') {
      this.setState({
        Exercise: e.target.value
      });
    }
    if (e.target.name == 'Evaluation') {
      this.setState({
        Evaluation: e.target.value
      });
  }
}


  render() {
    const editorOptions = {
      toolbar: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike'],
        [
          { list: 'ordered' }, { list: 'bullet' }
        ],
        ['link', 'image', 'video'],
        ['clean']
      ]
    };
    const { modules} = this.state;
      return (
        <div>
          <h2 > Using a web browser</h2>
            <fieldset className= ''>
              <legend className='' >modules :</legend>
                <div className = 'container2'>
                  <div className="modal-container">
                      <Button type="button"  bsStyle="primary" className="button" onClick={this.HandleDialoge}>Add module</Button> 
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
                                  <button onClick={this.createModule}>submit</button>
                                  <div> 
                              <Modal.Body>
                                <h3> Contents for the evaluation</h3>
                                <ReactQuill
                                  value={Text}
                                  key={module._id}
                                  onChange={this.handleTextChange}
                                  modules={editorOptions}
                                />
                                <div className = 'content for evaluation'
                                  onClick ={()=> this.statte.handelContentEvaluation}> 
                                <button className ='link' type='button'
                                  onClick ={()=> this.statte.handelContentEvaluation}> Explanation</button>
                                <button className ='link' type='button'
                                  onClick ={()=> this.statte.handelContentEvaluation}> Exercise</button>
                                <button className ='link' type='button' 
                                  onClick ={()=> this.statte.handelContentEvaluation}> Evaluation</button>
                                </div>
                                Add a Module 
                              </Modal.Body>
                              </div>
                              <Modal.Footer>
                                <Button onClick={this.HandleDialoge}>Close</Button>
                              </Modal.Footer>
                          </Modal>
                    </div>
              </div>
              {modules.length > 0 ? (
                <ul>            
                  {modules.map(module =>
                    <Module 
                      key={module._id}
                      module={module} 
                      onSelect = {this.handleEdit} 
                      selectedModule ={this.state.selectedModule}  
                      onDelete = {this.deleteModule}
                      handleTextChange={this.handleTextChange}
                    /> 
                  )}                                    
                </ul>
              ) : (
                  <p>There are no modules yet</p>
              )}
                <div className = 'editarea'> 
                  <EditModule  
                    selectedModule={this.state.selectedModule}
                    onChange = {this.handleEditChange} 
                    onSave = { this.updateModule}
                    onCancel = {this.handleExt}
                    onDelete = {this.deleteModule}
                  />
                </div>
            </fieldset>            
        </div>
      )        
  }    
}

export default Modules;