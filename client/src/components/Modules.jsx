import React, { Component} from 'react';

<<<<<<< HEAD
import { getModules, createModule ,    deleteModule,
updateModule } from '../api/modules';
import EditModule from './EditModule';
import Module from './Module';
//import Trigger from './Trigger'
import{ Button ,Modal} from 'react-bootstrap';

class Modules extends Component {
  //constructor(props) {

    //super(props);
    
      //this.
      state = {
        
      title:'',
      modules: [],
      selectedModule: null,
      show:false
                  };
      
   
      
//}
=======
import { getModules, createModule, deleteModule, updateModule } from '../api/modules';
import EditModule from './EditModule'
import Module from './Module'
import{ Button ,Modal} from 'react-bootstrap'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

>>>>>>> 0adda30083fdd324dec5aecb9e2e70022ed714a1


HandleDialoge=() =>{
  this.setState({ show: !this.state.show });
}

<<<<<<< HEAD
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
=======

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

   componentDidMount() {
   getModules().then((modules) => {
      this.setState({  modules });
    });
  }
>>>>>>> 0adda30083fdd324dec5aecb9e2e70022ed714a1

  createModule = module => {
       createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        // title: "",
        moduleFormShown: false
      });
    });
  };
<<<<<<< HEAD
 


  handleDelete =  id => { 
    deleteModule(id);
      this.setState({     
        modules:this.state.modules.filter( mod => mod._id!== id )
      });
};

// handleDelete = (event, id)=>{ 
//   //event.stopPropagation();
//   deleteModule(id)
//   //.then(()=> {
//     //let modules = this.state.modules;
//     this.setState({
//   modules:this.state.modules.filter( module=>module._id!== id )})
//   //if (this.selectedModule === id){
//     //this.setState ({selectedModule:null})
//   }
// //});
// //}

  handleSelect = (module) =>{
    this.setState({ selectedModule: module})


  }
  

  handeleSave = (module) => {
    const {selectedModule}=this.state

    updateModule(selectedModule).then((updatedModule) => {

=======

  updateModule = (module) => {
    const {selectedModule}=this.state
    updateModule(selectedModule).then((updatedModule) => {
>>>>>>> 0adda30083fdd324dec5aecb9e2e70022ed714a1
      this.setState((previousState) => {
        const modules = [...previousState.modules];
        const index = modules.findIndex(mod => mod._id === selectedModule._id);
        modules[index] = updatedModule;
        return { modules ,selectedModule: null };
      })
    });
<<<<<<< HEAD
};

  // handeleSave = (module) =>{
  //   //const modules = this.state.modules;
  //    updateModule(module)
  //   .then(newModule => {
  //     this.setState( (previousState) =>{
  //       const modules = [...previousState.modules];
  //       const index  = modules.findIndex(mod => mod._id === module._id);
  //       modules[index] = newModule;
  //       return{modules};
        
  //     });
  //   });
  //  }
  // handeleSave = (module) =>{
  //   //const modules = this.state.modules;
  //   // if (this.state.addNewModule)
  //   updateModule(module)
  //   .then(newModule => {
  //     this.setState((previousState)=>{
  //       const modules = [...previousState.modules];
  //       const index  = modules.findIndex(mod => mod._id === module._id);
  //       modules[index] = newModule;
  //       return{modules};
  //     });
  //   });
  

  // }

  handleCancel = () =>{
    this.setState({ selectedModule: null, edit: !this.state.edit})
=======
  };

  deleteModule =  id => { 
    deleteModule(id);
      this.setState({     
        modules:this.state.modules.filter( mod => mod._id!== id )
      });
    };
>>>>>>> 0adda30083fdd324dec5aecb9e2e70022ed714a1

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
<<<<<<< HEAD
          <div>
             <h2 > Using a web browser</h2>
            {/* <h2>  Title of the active path</h2> */}
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
=======
        <div>
          <h2 > Using a web browser</h2>
            <fieldset className= ''>
              <legend className='' >modules :</legend>
                <div className = 'container2'>
                  <div className="modal-container">
                      <Button type="button"  bsStyle="primary" className="button" onClick={this.HandleDialoge}>Add module</Button> 
>>>>>>> 0adda30083fdd324dec5aecb9e2e70022ed714a1
                          <Modal
                            show={this.state.show}
                            onHide={this.HandleDialoge}
                            aria-labelledby="contained-modal-title"
<<<<<<< HEAD
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="contained-modal-title">
                                Add New Module
                              </Modal.Title>
                            </Modal.Header>
                            <input type='text' placeholder='Enter The title' onChange={this.handlingChange}></input>
                            <button onClick={this.addNewModule}>submit</button>
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
  
=======
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
>>>>>>> 0adda30083fdd324dec5aecb9e2e70022ed714a1
}

export default Modules;