import React, { Component } from 'react';

import Module from './Module';
import '../assets/css/modules.css';
import * as api from '../api/modules';
import{ Modal} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



class Modules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.module ? props.module.title : '',
      modules: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    api.getModules().then((modules) => {
      this.setState({ modules: modules, loading: false });
    });
  }

  addModule = e => {
    console.log(this.state.title)
    e.preventDefault();
    this.setState({ loading: true });
    api.createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
        loading: false
      });
    });
    api.createModule(this.state.text).then(newModule => {
        this.setState({
          modules: this.state.modules.concat(newModule),
          explanation: "",
        });
      })
    };


    handeleSave = (module) => {
      api.updateModule(module).then((updatedModule) => {
        this.setState((previousState) => {
          const modules = [...previousState.modules];
          const index = modules.findIndex(mod => mod._id === module._id);
          modules[index] = updatedModule;
          return { modules };
        });
      });
    };
 
    handleDelete = (id) => {
      api.deleteModule(id).then(() => {
        this.setState( {
          modules:this.state.modules.filter(mod => mod._id !== id)
        });
      });
    } 

    HandleDialoge=() =>{
      this.setState({ show: !this.state.show });
    }

    handleTextChange= e => {
      this.setState({text:e})
    console.log(this.state.text);
  };

 
  setTitle = (e) => {
    this.setState({ title: e.currentTarget.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { submit, module } = this.props;console.log(title);
    module ? submit({ ...module, title }) : this.addModule({ title });
  }


  render() {
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

    const {  module } = this.props;
    const { modules, title, text } = this.state;
      if (this.state.loading) {
        return <div id="loader-wrapper"><div id="loader"></div></div>;
      } else {
      return (
        <div className="container-module-container">
          <header className="module-container__header">
            <h2>Title of the active path </h2>
            <button type="button" className="button" onClick={this.HandleDialoge}>Add module</button>
          </header>        
            <Modal
              show={this.state.show}
              onHide={this.HandleDialoge}
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
                  <input type="text" className="input" id="module-title" value={title} onChange={this.setTitle} />
                </label>
                <ReactQuill 
                    type="text" 
                    className="input" 
                    id="module-title" 
                    value={text} 
                    onChange={this.handleTextChange} 
                    modules={editorOptions}
                    placeholder="Contents"
                />           
                <div className="module-form__actions">
                  <input type="submit" className="button"onClick={this.addModule} value={module ? 'Update module' : 'Add module'} />
                </div>
              </form>
            </Modal>
            <div className="modules">        
              { modules.length > 0
                ? modules
                  .sort((m1, m2) => m2.createdAt - m1.createdAt)
                  .map(module => (
                    <Module
                      // key={module._id}
                      // module={module}            
                      // onDelete = {this.handleDelete}
                      // onSave = { this.handeleSave}
                      // handleTextChange={this.handleTextChange}
                      key={module._id}
                      module={module} 
                      onSelect = {this.handleSelect} 
                      selectedModule ={this.state.selectedModule}  
                      onDelete = {this.handleDelete}
                      onChange = {this.handlechange} 
                      onSave = { this.handeleSave}
                      onCancel = {this.handleCancel}
                      editorOptions= {this.editorOptions}
                      handleTextChange={this.handleTextChange}                   
                    />
                  ))
                : <p>There are no modules yet</p>
              }
            </div>
        </div>            
      ); 
    }     
  }  
}
export default Modules;