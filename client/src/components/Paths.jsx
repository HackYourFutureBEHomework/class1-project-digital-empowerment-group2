import React, { Component } from "react";
import * as api from '../api/paths';
import {Link } from "react-router-dom";
import PathForm from './PathForm';
import AppHader from '../shared/AppHeader';
import Loader from '../shared/Loader';
import Modal from 'react-modal';
import AdminBar from '../shared/AdminBar';
import PathHeader from '../shared/PathHeader';
import {NonIdealState, Button } from '@blueprintjs/core';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { CardImg } from "reactstrap";
import "bootstrap-social";


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
    componentWillMount () {
      nprogress.set(0.0);
      nprogress.set(0.4);
    }
    componentDidMount() {
      api.getPaths().then((paths) => {
        let activePathId;
        if (paths.length > 0) {
          activePathId = paths[0]._id;
        }
        this.setState({  paths, activePathId, isLoding: false });
      });
      nprogress.set(1.0);
    }

    addPath = async path => {
      const newPath = await api.createPath(path);
      this.setState(state => ({ paths: [...state.paths, newPath],title:"", isAddingPath: false}));
    };

    handleDelete =  id => {
      api.deletePath(id);
        this.setState({
          paths:this.state.paths.filter( pat => pat._id!== id )
      });
    };

    updatePath = async (id,path) => {
      console.log(id)
      const updatedPath = await api.updatePath(id,path);
      this.setState((previousState) => {
        const paths = [...previousState.paths];
        const index = paths.findIndex(p => p._id === id);
        paths[index] = updatedPath;
        console.log(paths);
        return { paths, isEditingPath: false, editingPath: null  };
      })
    };

    searchItem = (event) => {
      const searchString = event.target.value
      this.setState({searchString : searchString})
      console.log(this.state.searchString)
    }  

    clearSearch = () => {
      if (this.searchInput) this.searchInput.value = '';
      this.setState({ searchString: '' });
    }
    search = (e) => {
      this.setState({ searchString: e.target.value });
    }
    renderNOPathsHave = () => (
      <NonIdealState
        title="No paths yet"
        description={(
          <p>
            No paths have been yet.
          </p>
        )}
        action={<Button type="button" intent="primary" onClick={() =>this.onAddPath()}>Create Path</Button>}
      />
    )
    renderSearchNotFound = () => (
      <NonIdealState
        title="No results"
        // icon="search"
        description={(<p>This path is not founde</p>)}
        action={<Button type="button" intent="primary" onClick={this.clearSearch}>Home Page</Button>}
      />
    )
  
  render() {
    const { isLoding, paths, isAdmin, isAddingPath, isEditingPath, editingPath } = this.state

    if (isLoding) {
        return <Loader fullscreen={true}/>;
    }

    const filterPaths = this.state.paths.filter((path) => {
        return path.title.toLowerCase().indexOf(this.state.searchString.toLowerCase())!== -1;
      });
     let EmptySearch;
     if (paths.length === 0) EmptySearch = this.renderNOPathsHave();
     else if (filterPaths.length === 0) EmptySearch = this.renderSearchNotFound();

    const pathComponents = filterPaths.map(this._renderpath);

    
    return (
        <main>
            <AppHader/>
            <PathHeader/>
            <input type='text' className="Path__input" onChange={this.searchItem} placeholder='Search Path....'/>
            <button  className="Path__button"  onClick={() =>this.onAddPath(paths)}> Create Path </button>
            {isAdmin && this._renderAdminBar()}
            {isAddingPath && this._renderAddPathForm()}
            {isEditingPath && this._renderEditPathForm(editingPath)}
            { EmptySearch }
            <div className="path-list">
            {pathComponents}
            </div>
            {/* <footer>
            <div class="social-bar">
            <p>Hack Your Future</p>
            </div>
            </footer> */}
        </main>
    );
  }

  _renderpath = path =>{
    return (     
        <div className="path" >
          <div className="container">
            <Link to={`/path/${path._id}`} key={path._id}>
            <div className="img">
            <CardImg
              top
              alt="image "
              width="100%"
              src="https://source.unsplash.com/random/328x218?website,developer"
              
            />
            </div>
              <h2 >{path.title}</h2>
              </Link>            
              <div className="path__title">
                {path.completed && <span class='glyphicon glyphicon-ok'> Completed</span>}
              </div>
              <div className= 'overlay'>
                <button  className="Path-edit-delete__button"  onClick={() =>this.onEditPath(path)}> Copy </button>
                <button  className="Path-edit-delete__button"  onClick={() =>this.onEditPath(path)}> Edit </button>
                <button className = 'Path-edit-delete__button' onClick={() =>
                  {if (window.confirm(`Are you sure you want to delete "${path.title}"? `)) this.handleDelete( path._id);}}> Delete </button>
              </div>
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
          onSubmit={(id,path) => this.updatePath(id,path)} 
          buttonTitle="Edit path"
      />
      </Modal>
    }
  }

  export default Paths;
