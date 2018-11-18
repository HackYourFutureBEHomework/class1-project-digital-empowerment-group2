import React, { Component} from 'react';

import * as api from '../api/modules';
import Module from './Module'
import{ Modal } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class Modules extends Component {
  state = {
    title:'',
    modules: [],
    show:false,
    explanation:'',
    exercise:'',
    evaluation:'',
    content:'',
    flag:1,
    loading: false,       
   }

  HandleDialoge=() =>{
    this.setState({ show: !this.state.show });
  }

  componentDidMount() {
    this.setState({ loading: true });
    api.getModules().then((modules) => {
      this.setState({ modules: modules,  loading: false  });
    });
  }

  handlingChange = e => {
     this.setState({
      title: e.target.value
    });
  };
  handleTextChange=(e)=> {
    switch(this.state.flag){
      case 1:
      this.setState({explanation:e,content:e})
      break;
      case 2:
      this.setState({exercise:e,content:e})
      break;
      case 3: 
      this.setState({evaluation:e,content:e})
      break;     
    }
    console.log(this.state.content);
 };

  addModule = e => {
    e.preventDefault();
    this.setState({ loading: true });
    api.createModule(this.state.title,this.state.explanation,this.state.exercise,this.state.evaluation).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
        loading: false
      });
    });
    console.log(this.state.modules)
  };

  handelContentEvaluation=(e)=> {
    console.log(this.state.flag)
      if (e.target.innerHTML === 'Explanation') {
        this.setState({
          content:this.state.explanation,
          flag: 1
        });
      }
      if (e.target.innerHTML === 'Exercise') {
        this.setState({
          content:this.state.exercise,
          flag: 2
        });
      }
      if (e.target.innerHTML === 'Evaluation') {
        this.setState({
          content:this.state.evaluation,
          flag: 3
        });
      }
  }

  handleDelete = (id)=>{
    api.deleteModule(id)
    this.setState({
      modules:this.state.modules.filter( module=>module._id!== id )
    })
  }

  handeleSave = (module) => {
    console.log(module)
    api.updateModule(module).then((updatedModule) => {
      this.setState((previousState) => {
        const modules = [...previousState.modules];
        const index = modules.findIndex(mod => mod._id === module._id);
        modules[index] = updatedModule;
        console.log(modules)
        return { modules };        
      })
    });
  };

  render() {
    const editorOptions = {
      toolbar:
      [
        [{ header: "1" }, { header: "2" }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"]
      ]
    };
<<<<<<< HEAD
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
                                 
                              </Modal.Body>
                              </div>
                              <Modal.Footer>
                                <Button onClick={this.HandleDialoge}>Close</Button>
                              </Modal.Footer>
                          </Modal>
=======

    const { modules } = this.state;
      if (this.state.loading) {
        return <div id="loader-wrapper"><div id="loader"></div></div>;
      } else {
        return (
          <div className="container1">        
            <h2 >  Title of the active path </h2>          
            <button
              bsStyle="primary"
              bsSize="large"
              onClick={this.HandleDialoge}
              >
              Add module
            </button>
            <div className="modal-container">
              <Modal
                show={this.state.show}
                onHide={this.HandleDialoge}
                aria-labelledby="contained-modal-title"
              >
                <Modal.Header closebutton>
                  <Modal.Title id="contained-modal-title">
                    Add New Module
                  </Modal.Title>
                  <h3>Title:</h3>
                  <input 
                    required
                    type='text' 
                    placeholder='Enter The title' 
                    onChange={this.handlingChange}
                    value= {this.title}
                  />
                </Modal.Header>
                <form onSubmit={this.addModule}>                  
                  <Modal.Body>
                    <h3> Contents for the evaluation</h3>
                    <ReactQuill 
                      required
                      modules={editorOptions}                                
                      placeholder="Contents"
                      onChange={this.handleTextChange}
                      value={this.state.content}
                    />
                    <div className = 'content for evaluation'> 
                      <button id = 'saveExplanation' type='button' onClick ={this.handelContentEvaluation}>Explanation</button>
                      <button id = 'saveExercise' type='button' onClick ={this.handelContentEvaluation}>Exercise</button>
                      <button id = 'saveEvaluation' type='button'  onClick ={this.handelContentEvaluation}>Evaluation</button>
>>>>>>> cc9c4a7c8fdfdc2b4e644dae559e40a5dfa6c306
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <button bsStyle="primary" onClick={this.addModule}>Add module</button>
                    <button onClick={this.HandleDialoge}>Close</button>
                  </Modal.Footer>
                </form>
              </Modal>
            </div>       
            {modules.length > 0 ? (
              <div className="cont2">
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
                        handelContentEvaluation={this.handelContentEvaluation}
                      />)
                    })}  
              </div>
            ) : (
              <p>There are no modules yet</p>
            )}
          </div> 
                  
          
      );
    }      
  }  
}
export default Modules;