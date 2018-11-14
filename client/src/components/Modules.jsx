// import React, { Component} from 'react';

<<<<<<< HEAD
import { getModules, createModule , deleteModule, updateModule } from '../api/modules';
import Module from './Module'
import{ Button ,Modal} from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import renderHTML from 'react-render-html';
=======
// import { getModules, createModule, deleteModule, updateModule } from '../api/modules';
// import EditModule from './EditModule'
// import Module from './Module'
// import{ Button ,Modal} from 'react-bootstrap'

// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';





// class Modules extends Component {
//  state = {
//       title:'',
//       modules: [],
//       selectedModule: null,
//       show:false, 
//       Explanation: '',
//       Exercise: '',
//       Evaluation: '',
//           };

//    componentDidMount() {
//    getModules().then((modules) => {
//       this.setState({  modules });
//     });
//   }

//   createModule = module => {
//        createModule(this.state.title).then(newModule => {
//       this.setState({
//         modules: this.state.modules.concat(newModule),
//         title: "",
//       });
//     });
//   };

//   updateModule = (module) => {
//     const {selectedModule}=this.state
//     updateModule(selectedModule).then((updatedModule) => {
//       this.setState((previousState) => {
//         const modules = [...previousState.modules];
//         const index = modules.findIndex(mod => mod._id === selectedModule._id);
//         modules[index] = updatedModule;
//         return { modules ,selectedModule: null };
//       })
//     });
//   };

//   deleteModule =  id => { 
//     deleteModule(id);
//       this.setState({     
//         modules:this.state.modules.filter( mod => mod._id!== id )
//       });
//     };

    
//   HandleDialoge=() =>{
//     this.setState({ show: !this.state.show });
//   }

//   handlingChange = e => {
//      this.setState({
//       title: e.target.value
//     });
//   };
 
//   handleEdit = (module) =>{
//     console.log(this.state.selectedModule)
//     this.setState({ selectedModule: module})
//   }

//   handleEditChange = (e) =>{
//     console.log(this.state.selectedModule)
//     let selectedModule = this.state.selectedModule;
//     selectedModule[e.target.name]= e.target.value;
//     this.setState({ selectedModule: selectedModule});
//   };
//   // ?????????????????????????????
//   //   handleCancel  = () =>{
//   //   this.setState({ selectedModule: null,edit:!this.state.edit})
//   // }
  
//  // ?????????????????????????????
//  handleTextChange = (param) => {
//   console.log(param);
//     }
  
//   handelContentEvaluation(e) {
//     if (e.target.name == 'Explanation') {
//       this.setState({
//         Explanation: e.target.value
//       });
//     }
//     if (e.target.name == 'Exercise') {
//       this.setState({
//         Exercise: e.target.value
//       });
//     }
//     if (e.target.name == 'Evaluation') {
//       this.setState({
//         Evaluation: e.target.value
//       });
//   }
// }


//   render() {
//     const editorOptions = {
//       toolbar: [
//         [{ header: '1' }, { header: '2' }, { font: [] }],
//         [{ size: [] }],
//         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//         [{ list: 'ordered' }, { list: 'bullet' }],
//         ['link', 'image', 'video'],
//         ['clean'],
//         ['code-block']
//       ]
//     };
//     const { modules} = this.state;
//       return (
//         <div>
//           <h2 > Using a web browser</h2>
//             <fieldset className= ''>
//                 <div className = 'container2'>
//                   <div className="modal-container">
//                       <Button type="button"  bsStyle="primary" className="button" onClick={this.HandleDialoge}>Add module</Button> 
//                           <Modal
//                             show={this.state.show}
//                             onHide={this.HandleDialoge}
//                             aria-labelledby="contained-modal-title"
//                           >                         
//                               <Modal.Header closeButton>
//                                 <Modal.Title id="contained-modal-title">
//                                     Add New Module
//                                 </Modal.Title>
//                               </Modal.Header>
//                                   <input type='text' placeholder='Enter The title' onChange={this.handlingChange}></input>
//                                   {/* <button onClick={this.createModule}>submit</button> */}
//                                   <div> 
//                               <Modal.Body>
//                                 <h3> Contents for the evaluation</h3>
//                                 <ReactQuill
//                                   value={Text}
//                                   key={module._id}
//                                   onChange={this.handleTextChange}
//                                   modules={editorOptions}
//                                   placeholder="Title"
//                                 />
//                                 <div className = 'content for evaluation'
//                                   onClick ={()=> this.statte.handelContentEvaluation}> 
//                                 <button className ='link' type='button'
//                                   onClick ={()=> this.statte.handelContentEvaluation}> Explanation</button>
//                                 <button className ='link' type='button'
//                                   onClick ={()=> this.statte.handelContentEvaluation}> Exercise</button>
//                                 <button className ='link' type='button' 
//                                   onClick ={()=> this.statte.handelContentEvaluation}> Evaluation</button>
//                                 </div>
//                                 <button onClick={this.createModule}>Add a Module</button>
//                                 {/* Add a Module  */}
//                               </Modal.Body>
//                               </div>
//                               {/* <Modal.Footer>
//                                 <Button onClick={this.HandleDialoge}>Close</Button>
//                               </Modal.Footer> */}
//                           </Modal>
//                     </div>
//               </div>
//               {modules.length > 0 ? (
//                 <ul>            
//                   {modules.map(module =>
//                     <Module 
//                       key={module._id}
//                       module={module} 
//                       onSelect = {this.handleEdit} 
//                       selectedModule ={this.state.selectedModule}  
//                       onDelete = {this.deleteModule}
//                       handleTextChange={this.handleTextChange}
//                     /> 
//                   )}                                    
//                 </ul>
//               ) : (
//                   <p>There are no modules yet</p>
//               )}
//                 <div className = 'editarea'> 
//                   <EditModule  
//                     selectedModule={this.state.selectedModule}
//                     onChange = {this.handleEditChange} 
//                     onSave = { this.updateModule}
//                     onCancel = {this.handleCancel}
//                     onDelete = {this.deleteModule}
//                   />
//                 </div>
//             </fieldset>            
//         </div>
//       )        
//   }    
// }

// export default Modules;


import React, { Component} from 'react';
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710

import { getModules, createModule ,    deleteModule,
  updateModule } from '../api/modules';
import Module from './Module'
import{ Button ,Modal} from 'react-bootstrap'

class Modules extends Component {
 state = {
      title:'',
      modules: [],
<<<<<<< HEAD
      show:false,
      contents:''
  };

=======
      show:false
        };
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
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
<<<<<<< HEAD
      title: e.target.value,
    });
  };

  handleTextChange= e => {
    this.setState({contents:e})
  console.log(this.state.contents);
 };

  addModule = e => {
    console.log(this.state.title)
    console.log(this.state.contents)
=======
      title: e.target.value
    });
  };

  addModule = e => {
    console.log(this.state.title)
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
    e.preventDefault();
    createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
<<<<<<< HEAD
=======
        
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
      });
    });
    createModule(this.state.contents).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        contents: "",
      });
    })
  };

  handleDelete = (id)=>{ 
  deleteModule(id)
<<<<<<< HEAD
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
=======
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
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
        return { modules };
      })
    });
  };

  render() {
<<<<<<< HEAD
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
=======
    const { modules } = this.state;
      return (
        <div>
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
          <h2 >  Title of the active path </h2>          
          <fieldset className= ''>
              <legend className='' >modules :</legend>
              <div className = 'container2'>
                <div className="modal-container">
<<<<<<< HEAD
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
                                <input 
                                  type='text' 
                                  placeholder='Enter The title' 
                                  onChange={this.handlingChange}>
                                </input>                          
                              <Modal.Body>
                                <h3> Contents for the evaluation</h3>
                                <ReactQuill 
                                  modules={editorOptions}                                
                                  placeholder="Contents"
                                  onChange={this.handleTextChange}
                                  value={this.state.contents}
                                
                                />
                                <Button bsStyle="primary" onClick={this.addModule}>Add</Button>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button onClick={this.HandleDialoge}>Close</Button>
                              </Modal.Footer>
                        </form>
                    </Modal>
                </div>
            </div>
            {modules.length > 0 ? (
=======
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
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
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
<<<<<<< HEAD
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
=======
                        //onclick={this.HandleDialoge}
                        //onEdit={this.handlechange}
                      />)
                    })}  
              </ul>
          </fieldset>
          
          </div>
        )
      
    }
  
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
}
export default Modules;
