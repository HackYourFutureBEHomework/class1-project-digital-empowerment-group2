
import React, { Component } from 'react';
import{ Button ,Modal} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



class Module extends Component{
    constructor(props){
    super(props)
    this.state={
        show:false,
        selectedModule: null,
        title:          props.module.tilte, 
        showMoreInfo:   false,
        }
    }
    handleDialoge=(module)=>{
        this.handleSelect(this.props.module)
        this.setState({show:!this.state.show})
        
    }
   
    handlechange = (e) =>{
        let selectedModule = this.state.selectedModule;
        selectedModule[e.target.name]= e.target.value;
        this.setState({ selectedModule: selectedModule});
      };

    handleSelect = (module) =>{
        this.setState({ selectedModule: module})
        }

    handleSave=()=>{
            this.props.onSave({...this.props.module},this.state.title)
            this.setState({show:false})
        }
        
    handleTextChange= e => {
        this.setState({explanation:e})
        
        };

    openModule=(event)=>{
        this.setState({
            showMoreInfo:true
        })
        
    }
    render(){

        const module=(<div className="module">

            <div className="title"> {this.props.module.title} </div>
            
            {/* <div > 
            <div dangerouslySetInnerHTML={{ __html: this.props.module.Explanation }} />

                <div dangerouslySetInnerHTML={{ __html: this.props.module.Exercise }} />

                <div dangerouslySetInnerHTML={{ __html: this.props.module.Evaluation }} /> 

            </div> */}
           

                <nav className="edit">

                    <Button className="glyphicon glyphicon-edit"

                            onClick={this.handleDialoge}>

                    </Button>

                    <Modal

                        show={this.state.show}

                        onHide={this.handleDialoge}

                        aria-labelledby="contained-modal-title"

                    >

                        <Modal.Header closeButton>

                            <Modal.Title id="contained-modal-title">

                            Update module

                            </Modal.Title>

                            <h3>Title:</h3>  

                                                  

                            <input type={'text'}

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

                                onChange={this.handleTextChange}

                            />   
                            <div className = 'content for evaluation'> 
                                <button id = 'saveExplanation' type='button'
                                onChange={this.handlingChange}                   
                                > Explanation</button>
                                <button id = 'saveExercise' type='button'
                                onChange={this.handlingChange}>    Exercise</button>
                                <button id = 'saveEvaluation' type='button'
                                onChange={this.handlingChange} > Evaluation</button>
                            </div>

                        </Modal.Body>
                           
                        <Modal.Footer>

                        <Button onClick = {this.handleSave}> Update module </Button>

                        <Button onClick={this.handleDialoge}>Close</Button>

                        </Modal.Footer>

                    </Modal>

                    <Button 

                    className = 'glyphicon glyphicon-trash' 

                    onClick={() => 

                    {if (window.confirm(`Are you sure you want to delete?  `))

                        this.props.onDelete( this.props.module._id);

                    }}>                    

                    </Button>                

                </nav> 
                
                </div>
               )
               const contents =(
                <div>
                <p> Explanation:    {this.props.module.explanation} </p>
                <p> Exercise:       {this.props.module.exercise} </p>
                <p> Evaluation:     {this.props.module.evaluation}</p>
                </div>
               )
                

        return(

            

            <li  className = 'module-list' onClick={this.openModule}>

                { (this.state.showMoreInfo) ?  

                <div>

                    {module}
                    {contents}

                </div>

                : module

                }



            </li>        

        )

    }

}

export default Module 
