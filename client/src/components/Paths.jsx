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
      searchString : '',
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

    updatePath = async (module) => {
      const updatedModule = await api.updatePath(module);
      this.setState((previousState) => {
        const modules = [...previousState.modules];
        const index = modules.findIndex(mod => mod._id === module._id);
        modules[index] = updatedModule;
        console.log(modules);
        return { modules, isEditingModule: false, editingModule: null  };
      })
    };
// ****************
    searchItem = (event) => {
      const searchString = event.target.value
      this.setState({searchString : searchString})
      console.log(searchString);
    }  
// ****************

// // ****************
//     handleChange(e) {
//       console.log(e);
//       // Variable to hold the original version of the list
//   let currentList = [];
//       // Variable to hold the filtered list before putting into state
//   let newList = [];
      
//       // If the search bar isn't empty
//   if (e.target.value !== "") {
//           // Assign the original list to currentList
//     currentList = this.props.paths;
          
//           // Use .filter() to determine which items should be displayed
//           // based on the search terms
//     newList = currentList.filter(path => {
//               // change current item to lowercase
//       const lc = path.toLowerCase();
//               // change search term to lowercase
//       const filter = e.target.value.toLowerCase();
//               // check to see if the current list item includes the search term
//               // If it does, it will be added to newList. Using lowercase eliminates
//               // issues with capitalization in search terms and search content
//       return lc.includes(filter);
//     });
//   } else {
//           // If the search bar is empty, set newList to original task list
//     newList = this.props.paths;
//   }
//       // Set the filtered state based on what our rules added to newList
//   this.setState({
//     filtered: newList
//   });
// }
// //****************
  
  render() {
    const { isLoding, paths, isAdmin, isAddingPath, isEditingPath, editingPath } = this.state

    if (isLoding) {
        return <Loader fullscreen={true}/>;
    }
    const pathComponents = paths.map(this._renderpath);

// ****************
    const filterItems = this.state.paths.filter((path) => { 
      const regex = new RegExp(this.state.searchString, 'g')
        return regex.test(path.title)
      })
// ****************

    return (
        <div>
            <AppHader/>
            <PathHeader/>
            <input type='text' className="Path__input" onChange={this.searchItem} placeholder='Search Path....'/>
            <button  className="Path__button"  onClick={() =>this.onAddPath(paths)}> Add Path </button>
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
            <button  className="Path-edit-delete__button"  onClick={() =>this.onEditPath(path)}> Copy </button>
            <button  className="Path-edit-delete__button"  onClick={() =>this.onEditPath(path)}> Edit </button>
            <button className = 'Path-edit-delete__button' onClick={() =>
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
        onSubmit={path => this.addPath(path)}
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
          onSubmit={path => this.updatePath(path)}
          buttonTitle="Edit path"
      />   
      </Modal>
    }
  }

  export default Paths;