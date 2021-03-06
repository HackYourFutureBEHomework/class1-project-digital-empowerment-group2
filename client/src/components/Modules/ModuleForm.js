import React from 'react';
import './ModuleForm.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class ModuleForm extends React.Component{
    state={
        title:'',
        explanation:'',
        exercise:'',
        evaluation:'',
        }

        componentDidMount() {
            if (this.props.module) {
                const { title, explanation, exercise, evaluation} = this.props.module;
                this.setState({
                    title, explanation, exercise, evaluation
                })
            }
        }

        render() {
            console.log( this.props.modules)
            
            const { title, explanation, exercise,  evaluation}= this.state;
            return (
            <form className='module-form'>
                <header className="module-from__header">Add module</header>
                
                <div className="module-form__rew">
                    <label className="module-form__label">Module title</label>
                    <input className="module-form__text" type='text' 
                    value={title} onChange={e => this.setState ({title: e.target.value})}/>
                </div>
                    {this._renderTextarea('explanation','Explanation',explanation)}
                    {this._renderTextarea('exercise','Exercise',exercise)}
                    {this._renderTextarea('evaluation','Evaluation',evaluation)}
                    <div className="module-form__rew module-form__actions">
                    <button className="module-form__buttom" onClick={this.onCancel}>Cancel</button>
                    <button className="module-form__buttom" onClick={this.onSubmit}>{this.props.buttonTitle}</button>
                </div>
            </form>            
            )
        }

    _renderTextarea = (property, title, value) => {
        const editorOptions = {
            toolbar: [
                [{ header: '1' }, { header: '2' }],
                ['bold', 'italic', 'underline', 'strike'],
                [
                  { list: 'ordered' }, { list: 'bullet' }
                ],
                ['link', 'image', 'video'],
                ['clean']
              ],
            };
        return(
            <div className="module-form__rew">
                <label className="module-form__label">{title}</label>
                <ReactQuill
                    key={module._id}
                    modules={editorOptions}
                    value={value} onChange={val => this.setState ({[property]: val})} 
                />
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
        let module = { title, explanation, exercise,  evaluation};
            if (this.props.module) {
                module = Object.assign({}, this.props.module, module);
            }
            console.log(module);
            this.props.onSubmit(module);
    }

}