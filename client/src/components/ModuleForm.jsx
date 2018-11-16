import React from 'react';
import{ Button ,Modal} from 'react-bootstrap'
import { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class ModuleForm extends Component {
  constructor(props){
    super(props)
    this.state={
        show:false,
        selectedModule:null,
        title:props.module.tilte,
        }
    }
    // handleDialoge=(module)=>{
    //     this.handleSelect(this.props.module)
    //     this.setState({show:!this.state.show})
        
    // }
  
    // handlechange = (e) =>{
    //     console.log(this.state.selectedModule)
    //     let selectedModule = this.state.selectedModule;
    //     selectedModule[e.target.name]= e.target.value;
    //     this.setState({ selectedModule: selectedModule});
    //   };
    // handleSelect = (module) =>{
    //       console.log(this.props.module)
    //       console.log(this.state.selectedModule)
    //       this.setState({ selectedModule: module})
    //     }
    // handleSave=()=>{
    //         this.props.onSave({...this.props.module},this.state.title)
    //         this.setState({show:false})
    //     }
    //     handleTextChange= e => {
    //         this.setState({explanation:e})
    //       console.log(this.state.explanation);
    //      };
    return (){
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
        <ModuleForm
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
                  <Modal.Body>
                    <h3>Title:</h3>
                    <input 
                      type='text' 
                      placeholder='Enter The title' 
                      onChange={this.handlingChange}
                      value= {this.title}>
                    </input>           
                    <h3> Contents for the evaluation</h3>
                    <ReactQuill 
                      modules={editorOptions}                                
                      placeholder="Contents"
                      onChange={this.handleTextChange}
                      value={this.state.explanation}
                    />
                  
                  </Modal.Body>
                  <Modal.Footer> 
                    <button bsStyle="primary" onClick={this.addModule}>Add module</button>
                    <button onClick={this.HandleDialoge}>Close</button>
                  </Modal.Footer>
                  <Modal.Footer>
                    <Button bsStyle="primary" onClick = {this.handleSave}> Add Module </Button>
                    <Button onClick={this.handleDialoge}>Close</Button>
                  </Modal.Footer>
              </form>
        </ModuleForm>
)
         }
      
}

    

export default ModuleForm;


