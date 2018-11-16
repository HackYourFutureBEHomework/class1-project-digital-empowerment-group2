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
        text:props.module.text,        
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
        handleTextChange= e => {
            this.setState({text:e})
          console.log(this.state.explanation);
         };
        
    render(){
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
        
            <div  className = 'module'>
                <div> {this.props.module.title} 
                </div>
                    <article className="edit">
                      
                        <Modal
                            show={this.state.show}
                            onHide={this.handleDialoge}
                            className="modal module-form"
                            overlayClassName="modal-overlay"
                          >
                            { module
                              ? <h2 className="modal__title">Update module</h2>
                              : <h2 className="modal__title">Add a new module</h2>
                            }
                            <form onSubmit={this.onSubmit}>
                              <label htmlFor="module-title">
                                Title:
                              
                                <input 
                                    type="text" 
                                    className="input" 
                                    id="module-title"
                                    name='title'
                                    value= {this.props.module.title}
                                    placeholder = 'title'
                                    onChange = {this.handlechange}
                                />
                              </label>
                              <ReactQuill 
                                    name='title'
                                    type="text" 
                                    className="input" 
                                    id="module-title" 
                                    value={this.props.text} 
                                    onChange={this.handleTextChange} 
                                    modules={editorOptions}
                                    placeholder="Contents"
                                />   
                              <div className="module-form__actions">
                                <input type="submit" className="button"onClick={this.handleSave} value={module ? 'Update module' : 'Add module'} />
                              </div>
                            </form>
                          </Modal>                        
                        <h3 className="module__title">{module.title}</h3>
                        <div className="module__actions">
                          <i><FontAwesomeIcon icon={faEdit} onClick={this.handleDialoge} /></i>
                          <i><FontAwesomeIcon icon={faTrash} onClick={() => 
                              {if (window.confirm(`Are you sure you want to delete "${this.props.module.title}"? `))
                                  this.props.onDelete( this.props.module._id);
                              }} />
                           
                          </i>
                        </div>                                  
                    </article>                
            </div>        
        )
    }
}
export default Module

