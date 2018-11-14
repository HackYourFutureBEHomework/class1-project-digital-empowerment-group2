<<<<<<< HEAD
import React from 'react';
import{ Button ,Modal} from 'react-bootstrap'
import { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

=======
// import React from 'react';


// const Module = (props ) =>{

//     return(
//         <ul>
//             <li  className = 'module'>
//                 <div> 
//                     {props.module.title} 
//                 </div>  
//                 <div>
//                     <nav className="edit">
//                         <button 
//                             className = 'glyphicon glyphicon-edit'
//                             onClick ={()=>  props.onSelect(props.module)}
//                         > 
//                         Edit
//                         </button>
//                         <button 
//                             className = 'glyphicon glyphicon-trash'
//                             onClick={() => 
//                                 {if (window.confirm(`Are you sure you want to delete?  `))
//                                     props.onDelete( props.module._id);
//                                 }}
//                         >
//                         Delete
//                         </button>
//                     </nav>
//                 </div>     
//             </li>
//         </ul> 
//     )
// }
// export default Module

import React from 'react';
import{ Button ,Modal} from 'react-bootstrap'
import { Component } from 'react';

>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
class Module extends Component{
    constructor(props){
    super(props)
    this.state={
        show:false,
        selectedModule:null,
        title:props.module.tilte
        }
    }
    handleDialoge=(module)=>{
        this.handleSelect(this.props.module)
        this.setState({show:!this.state.show})
        
    }
<<<<<<< HEAD
=======
    // handleCancel=()=>{
    //     this.setState({show:false})
    //     this.setState({title:this.props.module.title})
    // }
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
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
        
    render(){
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
        return(
           
            <li  className = 'module'>
                <div> {this.props.module.title} 
                </div>
                    <nav className="edit">
                   
                        <button className="glyphicon glyphicon-edit"
                                onClick={this.handleDialoge}>
                        </button> 
                        <Modal
                                show={this.state.show}
                                onHide={this.handleDialoge}
                                aria-labelledby="contained-modal-title">
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title">
                                    Update module 
                                </Modal.Title>                                
                            </Modal.Header> 
                            <form onSubmit={this.addModule}>                   
                                <input 
                                    name='title'
                                    value= {this.props.module.title}
                                    placeholder = 'title'
                                    onChange = {this.handlechange}
                                />                      
                            <Modal.Body>
                                <ReactQuill 
                                    modules={editorOptions}                                
                                    placeholder="Contents"
                                    onChange={this.handleTextChange}
                                    // onChange = {this.handlechange}
                                    value={this.props.module.contents}                                    
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick = {this.handleSave}> Update module </Button>
                                {/* <Button onClick={this.handleDialoge}>Close</Button> */}
                            </Modal.Footer></form>     
                        </Modal>
                        <button 
                            className = 'glyphicon glyphicon-trash' 
                            onClick={() => 
                                {if (window.confirm(`Are you sure you want to delete?  `))
                                    this.props.onDelete( this.props.module._id);
                                }}
                        >                        
                        </button>                
                    </nav>                
            </li>
           
            
        )
    }
}
export default Module
=======

    return(
      
        <li  className = 'module'>
            <div> {this.props.module.title} 
            </div>
                <nav className="edit">
                    <button className="glyphicon glyphicon-edit"
                            onClick={this.handleDialoge}>
                    </button>
                    <Modal
                            show={this.state.show}
                            onHide={this.handleDialoge}
                            aria-labelledby="contained-modal-title">
                        <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                                    Edit Module 
                        </Modal.Title>
                        <input 
                                name='title'
                                value= {this.props.module.title}
                                placeholder = 'title'
                                onChange = {this.handlechange}/>
                        </Modal.Header>
                       
                        <Modal.Body>
                        </Modal.Body>
                        <Modal.Footer>
                        {/* <Button onClick = {this.handleCancel}> Cancel </Button> */}
                        <Button onClick = {this.handleSave}> Save </Button>
                        <Button onClick={this.handleDialoge}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <button 
                    className = 'glyphicon glyphicon-trash' 
                    onClick={() => 
                    {if (window.confirm(`Are you sure you want to delete?  `))
                        this.props.onDelete( this.props.module._id);
                    }}>
                    
                    </button>
                
                </nav>
                
        </li>
        
    )
}
}
export default Module
>>>>>>> b3ae2e36c1bad3f1875dc6bda4a06e9e98c61710
