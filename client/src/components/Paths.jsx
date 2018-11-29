import React, { Component} from 'react';
import {Link } from "react-router-dom";
import { getPaths,getPath, createPath, deletePath, updatePath } from '../api/paths';
import{ Button} from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PathForm from './PathForm';
import AppHader from '../shared/AppHeader';
import Loader from '../shared/Loader';
import Modal from 'react-modal';
import AdminBar from '../shared/AdminBar';
import classNames from 'classnames';



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

     
          };

 

componentDidMount() {
  getPaths().then((paths) => {
    let activePathId;
    if (Paths.length > 0) {
        activePathId = paths[0]._id;
    }
      this.setState({  Paths, activePathId, isLoding: false });
 
    });
  }



addPath = async path => {
    console.log(path);
  
    const newPath = await createPath(path);
    //console.log('NEW', newModule);
    this.setState(state => ({ paths: [...state.paths, newPath],title:"",  isAddingPath: false}));
  };
  
handleDelete =  id => { 
    deletePath(id);
      this.setState({     
        paths:this.state.paths.filter( p => p._id!== id )
      });
    };


handleSave = async (id,path) => {
      
      const updatedPath = await updatePath(id,path);
        this.setState((previousState) => {
          const paths = [...previousState.paths];
          const index = paths.findIndex(pat => pat._id === path._id);
          paths[index] = updatedPath;
          console.log(paths);
          return { paths, isEditingPath: false, editingPath: null };
        })
    };



searchItem = (event) => {
  const searchString = event.target.value
  this.setState({searchString : searchString})
  console.log(this.state.searchString)
} 



  
  render() {
    const { isLoding, paths, isAdmin, isAddingPath, isEditingPath, editingPath } = this.state

    if (isLoding) {
        return <Loader fullscreen={true}/>;
    }

    const filterPaths = this.state.paths.filter((path) => {
      const regex = new RegExp(this.state.searchString, 'g')
      //console.log(filterPaths)
        return regex.test(path.title)
      })
// const pathComponents = filterPaths.map(this._renderpath);

    const pathComponents = filterPaths.map(this._renderPath);
    return (
        <div>
            <AppHader/>
            {/* <PathHeader/> */}
            <input className="Path__input" type='search' placeholder='Search Path' onChange={this.searchItem}/>
            <button className="Path__button" onClick={() =>this.onAddPath(paths)}> Add Path </button>

            {isAdmin && this._renderAdminBar()}
            {isAddingPath && this._renderAddPathForm()}
            {isEditingPath && this._renderEditPathForm(editingPath)}
            <div className="path-list">
            {pathComponents}
            </div>
        </div>
    );
}



_renderPath = path =>{

return (
  <Link to={`/path/${path._id}`} key={path._id}>
      <div className="path__title">
         <h2>{path.title}</h2>
        {path.completed && <span> Completed</span>}
         <div>{<button className="Path-edit-delete__button" 
         onClick={() =>this.onEditPath(path)}> Copy </button>}</div>
         <div> {<Button className="glyphicon glyphicon-edit"
         

        onClick={() =>this.onEditPath(path)}> </Button>} </div>
        
        <div>{<Button  className = 'glyphicon glyphicon-trash'  onClick={() => 

        {if (window.confirm(`Are you sure you want to delete? `)) this.handleDelete( path._id);

        }}>    </Button> } </div>
        
      </div>

  </Link>
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
      onSubmit={(id,path) => this.handleSave(id,path)}
      buttonTitle="Edit path"
      />
   
  </Modal>
  }

}

export default Paths;