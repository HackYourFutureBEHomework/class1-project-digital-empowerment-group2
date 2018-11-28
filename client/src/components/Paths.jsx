import React, { Component } from "react";
import * as api from '../api/paths';

import PathForm from './PathForm';
import AppHader from '../shared/AppHeader';
import Loader from '../shared/Loader';
import Modal from 'react-modal';
import AdminBar from '../shared/AdminBar';
import PathHeader from '../shared/PathHeader';


  class Paths extends Component {
    state = {
      title:'',
      paths: [],
      activePathId: undefined,
      isLoding: true,
      isAddingPath:false,
      isEditingPath:false,
      editingPath: null,
    }
    
    componentDidMount() {
      api.getPaths().then((paths) => {
        let activePathId;
        if (paths.length > 0) {
          activePathId = paths[0]._id;
        }
        this.setState({  paths, activePathId, isLoding: false });
      });
    }

    addPath = async path => {
      const newPath = await api.createPath(this.state.title);
      this.setState(state => ({ paths: [...state.paths, newPath],title:"", isAddingPath: false}));
    };

  
    handleDelete =  id => { 
      api.deletePath(id);
        this.setState({     
          paths:this.state.paths.filter( pat => pat._id!== id )
      });
    };


  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };



  render() {
    const { isLoding, paths, isAdmin, isAddingPath, isEditingPath, editingPath } = this.state
    if (isLoding) {
        return <Loader fullscreen={true}/>;
    }
    const pathComponents = paths.map(this._renderpath);
    return (
        <div>
            <AppHader/>
            <PathHeader/>
            <button  className="edit-delete__button"  onClick={() =>this.onEditPath(paths)}> Edit </button>
            {isAdmin && this._renderAdminBar()}
            {isAddingPath && this._renderAddPathForm()}
            {isEditingPath && this._renderEditPathForm(editingPath)}
            <div className="path-list">
            {pathComponents}
            </div>
        </div>
    );
  }


  _renderpath = path =>{
    return (
      <div className="path" key={path._id}>
        <div className="path__title">
          <h2>{path.title}</h2>
            {path.completed && <span class='glyphicon glyphicon-ok'> Completed</span>}
            <button  className="edit-delete__button"  onClick={() =>this.onEditPath(path)}> Edit </button>
            <button className = 'edit-delete__button' onClick={() =>
              {if (window.confirm(`Are you sure you want to delete "${path.title}"? `)) this.handleDelete( path._id);}}> Delete </button>
        </div>
      </div>
    );
  };

  _renderAdminBar = () => {
    const actions = [{title: ' Add path', handler:this.onAddPath}];
    return <AdminBar actions={actions}/>;
  };

 onAddPath = () => {
    this.setState({isAddingPath: true})
  }

  _renderAddPathForm = () => {
    return <Modal isOpen={true} ariaHideApp={false}>
      <PathForm
        onCancel={() => this.setState({isAddingPath: false})}
        onSubmit={path => this.addpath(path)}
        buttonTitle="Add path"
      />
    </Modal>
  }
    onEditPath = (path) => {
  
      this.setState({isEditingPath: true,  editingPath: path})
    }

    _renderEditPathForm = (path) => {
      return <Modal isOpen={true} ariaHideApp={false}>
        <PathForm
            path={path}
            onCancel={() => this.setState({isEditingPath: false, editingPath: null})}
            onSubmit={path => this.handleSave(path)}
            buttonTitle="Edit path"
        />   
        </Modal>
      }




  }

  export default Paths;












  // render() {
  //   const { paths } = this.state;
  //   if (this.state.loading) {
  //     return <div className="loader" />;
  //   } else {
  //     return (
  //       <div>
  //         <input
  //           className="newTitle"
  //           autoFocus
  //           type="text"
  //           placeholder="Add new Path"
  //           onChange={this.handleTitleChange}
  //           value={this.state.title}
  //         />
  //         <button onClick={this.addPath}>Add Path</button>
  //         {paths.length > 0 ? (
  //           <ul>
  //             {console.log(this.state.paths)}
  //             {paths.map(path => (
  //               <li key={path._id}>
  //                 {path.title}
  //                 <button onClick={() => this.handleDelete(path._id)}>Delete</button>
  //               </li>
  //             ))}
  //           </ul>
  //         ) : (
  //           <p>There are no paths yet</p>
  //         )}
  //       </div>
  //     );
  //   }
  // }








