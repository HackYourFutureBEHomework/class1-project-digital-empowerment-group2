<<<<<<< HEAD

import React from 'react';

const Module = (props) =>{
    return(
        <ul>
            <li  className = 'module'
            >
                <div> 
                    {props.module.title} 
                </div>   
                <nav className="edit">
                    <button 
                        className = 'glyphicon glyphicon-edit'
                        onClick ={()=>  props.onSelect(props.module)}
                    > 
                    Edit
                    </button>
                    <button 
                        className = 'glyphicon glyphicon-trash'
                        onClick={() => 
                            {if (window.confirm(`Are you sure you want to delete?  `))
                                props.onDelete( props.module._id);
                            }}
                    >
                    Delete
                    </button>
                </nav>
                    
            </li>
        </ul> 
    )
}
export default Module



// import React from 'react';
// import{ Button ,Modal} from 'react-bootstrap'
// import { Component } from 'react';

// class Module extends Component{
//     constructor(props){
//     super(props)
//     this.state={
//         show:false,
//         selectedModule:null,
//         title:props.module.tilte
//         }
//     }
//     handleDialoge=(module)=>{
//         this.handleSelect(this.props.module)
//         this.setState({show:!this.state.show})
        
//     }
//     // handleCancel=()=>{
//     //     this.setState({show:false})
//     //     this.setState({title:this.props.module.title})
//     // }
//     handlechange = (e) =>{
//         console.log(this.state.selectedModule)
//         let selectedModule = this.state.selectedModule;
//         selectedModule[e.target.name]= e.target.value;
//         this.setState({ selectedModule: selectedModule});
//       };
//     handleSelect = (module) =>{
//           console.log(this.props.module)
//           console.log(this.state.selectedModule)
//           this.setState({ selectedModule: module})
//         }
//     handleSave=()=>{
//             this.props.onSave({...this.props.module},this.state.title)
//             this.setState({show:false})
//         }
        
//     render(){

//     return(
      
//         <li  className = 'module'>
//             <div> {this.props.module.title} 
//             </div>
//                 <nav className="edit">
//                     <button className="glyphicon glyphicon-edit"
//                             onClick={this.handleDialoge}>
//                     </button>
//                     <Modal
//                             show={this.state.show}
//                             onHide={this.handleDialoge}
//                             aria-labelledby="contained-modal-title">
//                         <Modal.Header closeButton>
//                         <Modal.Title id="contained-modal-title">
//                                     Edit Module 
//                         </Modal.Title>
//                         <input 
//                                 name='title'
//                                 value= {this.props.module.title}
//                                 placeholder = 'title'
//                                 onChange = {this.handlechange}/>
//                         </Modal.Header>
                       
//                         <Modal.Body>
//                         </Modal.Body>
//                         <Modal.Footer>
//                         {/* <Button onClick = {this.handleCancel}> Cancel </Button> */}
//                         <Button onClick = {this.handleSave}> Save </Button>
//                         <Button onClick={this.handleDialoge}>Close</Button>
//                         </Modal.Footer>
//                     </Modal>
//                     <button 
//                     className = 'glyphicon glyphicon-trash' 
//                     onClick={() => 
//                     {if (window.confirm(`Are you sure you want to delete?  `))
//                         this.props.onDelete( this.props.module._id);
//                     }}>
                    
//                     </button>
                
//                 </nav>
                
//         </li>
        
//     )
// }
// }
// export default Module
=======
import React, { Component } from 'react';
import{Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

    class Module extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            selectedModule:null,
            title:props.module.tilte,
            showMoreInfo:false,
        }
    }
    handleDialoge=(module)=>{
        this.handleSelect(this.props.module)
        this.setState({show:!this.state.show})
    }
    handlechange = (e) =>{
        console.log(this.state.selectedModule)
        let selectedModule = this.state.selectedModule;        
        selectedModule[e.target.name]= e.target.value;
        this.setState({ selectedModule: selectedModule});
    };
    handleSelect = (module) =>{
        console.log(this.props.module)
        console.log(this.state.selectedModule)
        this.setState({ selectedModule: module})
    }
    handleSave=()=>{
        this.props.onSave({...this.props.module},this.state.title)
        this.setState({show:false})
    }
    // handleTextChange= e => {
    // this.setState({explanation:e})
    // console.log(this.state.explanation);
    // };
    openModule=(event)=>{
        this.setState({
         showMoreInfo:true
        })
    }
    render(){
        const module=(<div className="cont3">
            <div className="title"> 
                {this.props.module.title}
                <div className="module__actions">
                        <i><FontAwesomeIcon icon={faEdit} onClick={this.handleDialoge} /></i>
                        <i><FontAwesomeIcon icon={faTrash} onClick={() => 
                            {if (window.confirm(`Are you sure you want to delete "${this.props.module.title}"? `))
                                this.props.onDelete( this.props.module._id);
                            }} />                        
                        </i>
                    </div>  </div>
                <article className="edit">
                <Modal
                    show={this.state.show}
                    onHide={this.handleDialoge}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closebutton>
                    <Modal.Title id="contained-modal-title">
                        Update module
                    </Modal.Title>
                    <h3>Title:</h3> 
                    <input 
                        type={'text'}
                        name='title'
                        value= {this.props.module.title}
                        placeholder = 'title'
                        onChange = {this.handlechange}
                    />
                    </Modal.Header>
                    <h3>Contents for the explanation step:</h3>
                    <Modal.Body>
                    <ReactQuill 
                        modules={this.props.editorOptions} 
                        placeholder="Contents"
                        //onChange={this.props.handleTextChange}
                        // value={this.state.explanation}
                    /> 
                        <div className = 'content for evaluation'> 
                            <button id = 'saveExplanation' type='button' onClick ={this.handleSave}>Explanation</button>
                            <button id = 'saveExercise' type='button' onClick ={this.props.handelContentEvaluation}>Exercise</button>
                            <button id = 'saveEvaluation' type='button' onClick ={this.props.handelContentEvaluation}>Evaluation</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {this.handleSave}> Update module </button>
                        <button onClick={this.handleDialoge}>Close</button>
                    </Modal.Footer>
                </Modal>
                    
                </article> 
            </div>
        )
        return(
            <div className = 'module' onClick={this.openModule}>
                { (this.state.showMoreInfo) ? 
                    <div>
                        {module}
                        <div>
                            <div>
                                Explanation: 
                                <div 
                                className="module__contents__stage" 
                                dangerouslySetInnerHTML={{ __html: this.props.module.explanation}} 
                                />
                            </div>
                            <div>
                                Exercise: 
                                <div 
                                    className="module__contents__stage" 
                                    dangerouslySetInnerHTML={{ __html: this.props.module.exercise}}
                                />
                            </div>
                            <div>
                                Evaluation: 
                                <div 
                                className="module__contents__stage" 
                                dangerouslySetInnerHTML={{ __html:this.props.module.evaluation}}
                                />
                            </div>
                        </div>
                    </div>
                : module
                }
            </div> 
        )
    }
}

export default Module
>>>>>>> cc9c4a7c8fdfdc2b4e644dae559e40a5dfa6c306
