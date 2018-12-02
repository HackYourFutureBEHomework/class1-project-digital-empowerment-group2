import React from 'react';
import './PathForm.css';
import 'react-quill/dist/quill.snow.css';


export default class PathForm extends React.Component{
    state={
        title:''
    }

    componentDidMount() {
        if (this.props.path) {
            const { title} = this.props.path;
            this.setState({title})
        }
    }

    onSubmit = (e) => {
      e.preventDefault();
      const { onSubmit,path } = this.props;

      if (path)
      onSubmit(path._id,{ title: this.state.title });
      else 
      onSubmit({ title: this.state.title });
    }

    onCancel = (e) => {
        e.preventDefault();
        this.props.onCancel();
    }

    render() {
        const { title }= this.state;

        return (
            <form className='module-form' onSubmit={this.onSubmit}>
                <header className="module-from__header">Add Path</header>
                <div className="module-form__rew">
                    <label className="module-form__label">Path title</label>
                    <input className="module-form__text" type='text'
                    value={title} onChange={e => this.setState ({title: e.target.value})}/>
                </div>
                <div className="module-form__rew path-form__actions">
                    <button type="button" className="module-form__buttom" onClick={this.onCancel}>Cancel</button>
                    <button type="submit" className="module-form__buttom">{this.props.buttonTitle}</button>
                </div>
            </form>
        )
    };   
};
