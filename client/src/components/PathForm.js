import React from 'react';
import './PathForm.css';
import 'react-quill/dist/quill.snow.css';
import * as api from '../api/paths';

export default class PathForm extends React.Component{
    state={
        title:'',
        paths: [],
    }

    componentDidMount() {
        if (this.props.path) {
            const { title} = this.props.path;
            this.setState({title})
        }
    }
    
    render() {        
        const { title}= this.state;
        return (
            <form className='module-form'>
                <header className="module-from__header">Add Path</header>                
                <div className="module-form__rew">
                    <label className="module-form__label">Path title</label>
                    <input className="module-form__text" type='text' 
                    value={title} onChange={e => this.setState ({title: e.target.value})}/>
                </div>
                <div className="module-form__rew path-form__actions">
                    <button className="module-form__buttom" onClick={this.onCancel}>Cancel</button>
                    <button className="module-form__buttom" onClick={this.addPath}>{this.props.buttonTitle}</button>
                </div>
            </form>            
        )
    };

    onCancel = (e) => {
        e.preventDefault();
        this.props.onCancel();
    }
   
    // onSubmit = (e) => {console.log(e);
    //     e.preventDefault();
    //     const { title }= this.state;console.log(title);
    //     let path = { title};console.log(path);
    //         if (this.props.path) {
    //             path = Object.assign({}, this.props.path, path);console.log(path);
    //         }
    //         console.log(path);
    //         this.props.onSubmit(path);
    // }



    addPath = async path => {
        const newPath = await api.createPath(this.state.title);
        this.setState(state => ({ paths: [...state.paths, newPath],title:"", isAddingPath: false}));
      };
};