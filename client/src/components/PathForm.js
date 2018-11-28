import React from 'react';
import './PathForm.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as api from '../api/paths';

export default class PathForm extends React.Component{
    state={
        title:'',
        path:[],
        }

        componentDidMount() {

            if (this.props.path) {
                const { title} = this.props.path;
                this.setState({
                    title
                })

            }
        }

        render() {
            //console.log('ModulEofmr', this.props.module)
            
            const { title}= this.state;
            return (
            <form className='path-form'>
                <header className="path-from__header">Add path</header>
                
                <div className="path-form__rew">
                    <label className="path-form__label">path title</label>
                    <input className="path-form__text" type='text' 
                    value={title} onChange={e => this.setState ({title: e.target.value})}/>
                </div>
                {/* {this._renderTextarea('explanation','Explanation',explanation)}
                {this._renderTextarea('exercise','Exercise',exercise)}
                {this._renderTextarea('evaluation','Evaluation',evaluation)} */}
                <div className="path-form__rew path-form__actions">
                <button className="path-form__buttom" onClick={this.onCancel}>Cancel</button>
                <button className="path-form__buttom" onClick={this.addPath}>{this.props.buttonTitle}</button>

                </div>
            </form>
            
            )
        }

    //   _renderTextarea = (property, title, value) => {
    //     const editorOptions = {
    //         toolbar : [
    //         [{ header: [1,2,3,4,5,6, false] }],
    //         ['bold', 'italic', 'underline', 'strike'],
    //         [
    //           { list: 'ordered' }, { list: 'bullet' }
    //         ],
    //         ['link', 'image', 'video'], 
    //         [{'indent':'-1'},{'indent':' +1'}],
    //         [{'size': ['small', false, 'large', 'huge']}],
    //         [{'color': []}, {'background': []}],
    //         [{'align':[]}], [{'font': []}],
    //         ['clean'], ['code-block']
    //       ]
    //         };
    //     return(
    //          <div className="module-form__rew">
    //             <label className="module-form__label">{title}</label>
                
    //         <ReactQuill
    //                       key={module._id}
    //                       modules={editorOptions}
    //                       value={value} onChange={val => this.setState ({[property]: val})} />

                          
            
    //         </div>
    //     );
    //   };

      onCancel = (e) => {
          e.preventDefault();
          this.props.onCancel();
      }

    //   onSubmit = (e) => {
    //     e.preventDefault();
    //     const { title, explanation, exercise,  evaluation}= this.state;
    //     let module = { title, explanation, exercise,  evaluation};
    //     if (this.props.module) {
    //         module = Object.assign({}, this.props.module, module);
    //     }
    //     console.log(module);
    //     this.props.onSubmit(module);
    // }

    addPath = async path => {
        const newPath = await api.createPath(this.state.title);
        this.setState(state => ({ paths: [...state.paths, newPath],title:"", isAddingPath: false}));
};
}