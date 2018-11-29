import React from 'react';
import './ModuleForm.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class ModuleEdit extends React.Component{
    state={
        title:'',
        explanation:'',
        exercise:'',
        evaluation:'',
        }

        render() {
            const { title, explanation, exercise,  evaluation}= this.state;
            return (
            <form className='module-form'>
                <header className="module-from__header">Edit module</header>
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
                <button className="module-form__buttom" onClick={this.onSubmit}>Update Module</button>

                </div>
            </form>
            )
        }

      _renderTextarea = (property, title, value) => {

        const editorOptions = {
            toolbar : [
            [{ header: [1,2,3,4,5,6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [
              { list: 'ordered' }, { list: 'bullet' }
            ],
            ['link', 'image', 'video'], 
            [{'indent':'-1'},{'indent':' +1'}],
            [{'size': ['small', false, 'large', 'huge']}],
            [{'color': []}, {'background': []}],
            [{'align':[]}], [{'font': []}],
            ['clean'], ['code-block']
          ]
            };
        return(
             <div className="module-form__rew">
                <label className="module-form__label">{title}</label>
                 <ReactQuill
                          key={module._id}
                          modules={editorOptions}
                          value={value} onChange={val => this.setState ({[property]: val})} />
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

}