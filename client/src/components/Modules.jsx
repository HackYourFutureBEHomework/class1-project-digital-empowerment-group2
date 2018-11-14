import React, { Component} from 'react';

import { getModules, createModule , deleteModule, updateModule } from '../api/modules';
import Module from './Module'
import{ Button ,Modal} from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// // import renderHTML from 'react-render-html';

class Modules extends Component {
  state = {
       title:'',
       modules: [],
       show:false,
       explanation: ""
   }

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
  handleTextChange= e => {
    this.setState({explanation:e})
  console.log(this.state.explanation);
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
      createModule(this.state.explanation).then(newModule => {
        this.setState({
          modules: this.state.modules.concat(newModule),
          explanation: "",
        });
      })
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
    const editorOptions = {
      toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
      ]
    };
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
                      <form onSubmit={this.addModule}>
                            <h3>Title:</h3>
                              <input 
                                type='text' 
                                placeholder='Enter The title' 
                                onChange={this.handlingChange}
                                value= {this.title}>
                              </input>                          
                            <Modal.Body>
                              <h3> Contents for the evaluation</h3>
                              <ReactQuill 
                                modules={editorOptions}                                
                                placeholder="Contents"
                                onChange={this.handleTextChange}
                                value={this.state.explanation}
                              />
                             
                            </Modal.Body>
                            <Modal.Footer> 
                              <Button bsStyle="primary" onClick={this.addModule}>Add module</Button>
                              <Button onClick={this.HandleDialoge}>Close</Button>
                            </Modal.Footer>
                      </form>
                  </Modal>
              </div>
          </div>
          {modules.length > 0 ? (
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
                      editorOptions= {this.editorOptions}
                      handleTextChange={this.handleTextChange}
                     />)
                  })}  
            </ul>
          ) : (
            <p>There are no modules yet</p>
          )}
        </fieldset> 
                
        </div>
      )      
  }  
}
export default Modules;