import React from 'react';
import './ModuuleForm.css';
// import ReactQuill from 'react-quill';



export default class ModuleUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedModule:null,
            // title:props.module.tilte,
            title:'',
        }
    }
  
    
    render() {
        const { title, explanation, exercise,  evaluation,}= this.state;console.log(title)
        return (
            <form className='module-form'>
                <header className="module-from__header">Update module</header>
                <div className="module-form__rew">
                    <label className="module-form__label">Module title</label>                                       
                    <input 
                        className="module-form__text" 
                        type='text' 
                        // value={this.module.title} 
                        onChange={this.handlechange}
                    />
                </div>
                    {this._renderTextarea('explanation','Explanation',explanation)}
                    {this._renderTextarea('exercise','Exercise',exercise)}
                    {this._renderTextarea('evaluation','Evaluation',evaluation)}
                <div className="module-form__rew module-form__actions">
                    <button className="module-form__buttom" onClick={this.onCancel}>Cancel</button>
                    <button className="module-form__buttom" onClick={this.onSubmit}>Update</button>
                </div>
            </form>
        );
    };
    
    _renderTextarea = (property, title, value) => {
        return(
             <div className="module-form__rew">
                <label className="module-form__label">{title}</label>
                {/* <ReactQuill                           
                            placeholder="Contents"
                            onChange={this.props.handleTextChange}
                            value={this.props.content}
                        /> */}
                <textarea className="module-form__textarea" value={value} onChange={e => this.setState ({[property]: e.target.value})}/>
            </div>
        );
    };
    
    onCancel = (e) => {
        e.preventDefault();
        this.props.onCancel();
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const { title, explanation, exercise,  evaluation}= this.state;
        this.props.onSubmit({ title, explanation, exercise,  evaluation});
    }

    handlechange = (e) =>{
        console.log(this.state.selectedModule)
        let selectedModule = this.state.selectedModule;        
        selectedModule[e.target.name]= e.target.value;
        this.setState({ selectedModule: selectedModule});
    };
    // handeleSave = (module) => {
    //     api.updateModule(module).then((updatedModule) => {
    //       this.setState((previousState) => {
    //         const modules = [...previousState.modules];
    //         const index = modules.findIndex(mod => mod._id === module._id);
    //         modules[index] = updatedModule;
    //         return { modules };
    //       });
    //     });
    //   };

}
