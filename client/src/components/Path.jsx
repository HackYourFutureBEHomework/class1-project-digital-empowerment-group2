import React, { Component} from 'react';

import { getPath, createPath, deletePath, updatePath } from '../api/modules';
import{ Button} from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PathForm from './PathForm';
import AppHader from '../shared/AppHeader';
import Loader from '../shared/Loader';
import Modal from 'react-modal';
import AdminBar from '../shared/AdminBar';
import classNames from 'classnames';



// const SETP_EXPLANATION ='explanation';
// const SETP_EXERCISE ='exercise';
// const SETP_EVALUATION ='evaluation';


class Paths extends Component {
 state = {
      title:'',
      modules: [],
      activePathId: undefined,
      //activeStep: SETP_EXPLANATION,
      isLoding: true,
      //isAdmin: true,
      //show:true, 
      //edit: false,
      isAddingPath:false,
      isEditingPath:false,
      editingPath: null,
    //   newTitle: "",
    //   newExplanation: "",
    //   newExercise: "",
    //   newEvaluation: "",
      search : '',

     
          };

 

componentDidMount() {
  getPaths().then((Paths) => {
    let activePathId;
    if (Paths.length > 0) {
        activePathId = modules[0]._id;
    }
      this.setState({  Paths, activePathId, isLoding: false });
 
    });
  }



addPath = async module => {
    console.log(module);
  
    const newPath = await createPath(this.state.title);
    //console.log('NEW', newModule);
    this.setState(state => ({ paths: [...state.paths, newpaths], isAddingPath: false}));
  };
  
handleDelete =  id => { 
    deletePath(id);
      this.setState({     
        paths:this.state.paths.filter( mod => mod._id!== id )
      });
    };


handleSave = async (module) => {
      
      const updatedModule = await updatePath(module);
        this.setState((previousState) => {
          const modules = [...previousState.modules];
          const index = modules.findIndex(mod => mod._id === module._id);
          modules[index] = updatedModule;
          console.log(modules);
          return { modules, isEditingModule: false, editingModule: null  };
        })
    };







  
  render() {
    const { isLoding, paths, isAdmin, isAddingPath, isEditingPath, editingPath } = this.state

    if (isLoding) {
        return <Loader fullscreen={true}/>;
    }

    const pathComponents = paths.map(this._renderPath);
    return (
        <div>
            <AppHader/>
            <PathHeader/>
            <input className="Path__input" type='search' placeholder='Search Path' onChange={this.searchItem}/>
            <button className="Path__button" onClick={() =>this.onAddPath(paths)}> Add Path </button>

            {isAdmin && this._renderAdminBar()}
            {isAddingPath && this._renderAddPathForm()}
            {isEditingPath && this._renderEditPathForm(editingModule)}
            <div className="module-list">
            {pathComponents}
            </div>
        </div>
    );
}



_renderModule = path =>{
// const {activeModuleId, activeStep }= this.state;
// const isActive = module._id === activeModuleId;
return (
  <div className="path" key={module._id}>
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
      {/* {isActive && (
           <div className="module__body">
              {this._renderStep('Explanation', 'module__explanation', module.explanation, activeStep === SETP_EXPLANATION)}
              {this._renderStep('Exercise', 'module__exercise', module.exercise,  activeStep === SETP_EXERCISE)}
              {this._renderStep('Evaluation', 'module__evaluation', module.evaluation,  activeStep === SETP_EVALUATION)}
          </div>
      )} */}
  </div>
);
};
// _renderStep = (title, className, body, expended) => {
// const stepBodyClass = classNames('module__step-body', className, { expended })
// return (
//   <div  className="module__step">
//       <h3>{title}</h3>
//       <div className={stepBodyClass}>
//       <div dangerouslySetInnerHTML={{__html: body}}/>
//       <button onClick={this.onNextStep}>Next Step</button>
//       </div>
//   </div>
// );
// };

// onNextStep = () => {
// const {activeStep } = this.state;
// if (activeStep === SETP_EXPLANATION)  {
//   this.setState({ activeStep: SETP_EXERCISE})
// }else if (activeStep === SETP_EXERCISE)  {
//   this.setState({ activeStep: SETP_EVALUATION})
// } else if (activeStep === SETP_EVALUATION) {
//   this.onNextModule();
// }
// };

// onNextModule = () => {
// const { modules, activeModuleId } = this.state;
// const module = modules.find(module =>module._id === activeModuleId);
// module.completed = true;
// const moduleIndex = modules.findIndex(module => module._id === activeModuleId);
// const nextModule = modules[moduleIndex + 1];
// let newModuleId;
// if (nextModule) {
//   newModuleId = nextModule._id;
// }
// this.setState({activeModuleId: newModuleId , activeStep:SETP_EXPLANATION});
// };

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


onEditPath = (module) => {
  
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