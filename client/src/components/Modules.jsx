import React, { Component} from 'react';

import { getModules, createModule, deleteModule, updateModule } from '../api/modules';
import{ Button} from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ModuleForm from './ModuleForm';
import AppHader from '../shared/AppHeader';
import Loader from '../shared/Loader';
import Modal from 'react-modal';
import AdminBar from '../shared/AdminBar';
import classNames from 'classnames';



const SETP_EXPLANATION ='explanation';
const SETP_EXERCISE ='exercise';
const SETP_EVALUATION ='evaluation';


class Modules extends Component {
 state = {
      title:'',
      modules: [],
      activeModuleId: undefined,
      activeStep: SETP_EXPLANATION,
      isLoding: true,
      isAdmin: true,
      show:true, 
      edit: false,
      isAddingModule:false,
      isEditingModule:false,
      editingModule: null,
      newTitle: "",
      newExplanation: "",
      newExercise: "",
      newEvaluation: "",

     
          };

 

componentDidMount() {
  getModules().then((modules) => {
    let activeModuleId;
    if (modules.length > 0) {
      activeModuleId = modules[0]._id;
    }
      this.setState({  modules, activeModuleId, isLoding: false });
 
    });
  }



addModule = async module => {
    console.log(module);
  
    const newModule = await createModule(module);
    console.log('NEW', newModule);
    this.setState(state => ({ modules: [...state.modules, newModule], isAddingModule: false}));
  };
  
handleDelete =  id => { 
    deleteModule(id);
      this.setState({     
        modules:this.state.modules.filter( mod => mod._id!== id )
      });
    };


handleSave = async (module) => {
      
      const updatedModule = await updateModule(module);
        this.setState((previousState) => {
          const modules = [...previousState.modules];
          const index = modules.findIndex(mod => mod._id === module._id);
          modules[index] = updatedModule;
          console.log(modules);
          return { modules, isEditingModule: false, editingModule: null  };
        })
    };







  
  render() {
    const { isLoding, modules, isAdmin, isAddingModule, isEditingModule, editingModule } = this.state

    if (isLoding) {
        return <Loader fullscreen={true}/>;
    }

    const moduleComponents = modules.map(this._renderModule);
    return (
        <div>
            <AppHader/>
            {isAdmin && this._renderAdminBar()}
            {isAddingModule && this._renderAddMoudleForm()}
            {isEditingModule && this._renderEditMoudleForm(editingModule)}
            <div className="module-list">
            {moduleComponents}
            </div>
        </div>
    );
}



_renderModule = module =>{
const {activeModuleId, activeStep }= this.state;
const isActive = module._id === activeModuleId;
return (
  <div className="module" key={module._id}>
      <div className="module__title">
         <h2>{module.title}</h2>
        {module.completed && <span> Completed</span>}
         <div> {<Button className="glyphicon glyphicon-edit"
         

        onClick={() =>this.onEditMoudle(module)}> </Button>} </div>
        
        <div>{<Button  className = 'glyphicon glyphicon-trash'  onClick={() => 

        {if (window.confirm(`Are you sure you want to delete? `)) this.handleDelete( module._id);

        }}>    </Button> } </div>
        
      </div>
      {isActive && (
           <div className="module__body">
              {this._renderStep('Explanation', 'module__explanation', module.explanation, activeStep === SETP_EXPLANATION)}
              {this._renderStep('Exercise', 'module__exercise', module.exercise,  activeStep === SETP_EXERCISE)}
              {this._renderStep('Evaluation', 'module__evaluation', module.evaluation,  activeStep === SETP_EVALUATION)}
          </div>
      )}
  </div>
);
};
_renderStep = (title, className, body, expended) => {
const stepBodyClass = classNames('module__step-body', className, { expended })
return (
  <div  className="module__step">
      <h3>{title}</h3>
      <div className={stepBodyClass}>
      <div dangerouslySetInnerHTML={{__html: body}}/>
      <button onClick={this.onNextStep}>Next Step</button>
      </div>
  </div>
);
};

onNextStep = () => {
const {activeStep } = this.state;
if (activeStep === SETP_EXPLANATION)  {
  this.setState({ activeStep: SETP_EXERCISE})
}else if (activeStep === SETP_EXERCISE)  {
  this.setState({ activeStep: SETP_EVALUATION})
} else if (activeStep === SETP_EVALUATION) {
  this.onNextModule();
}
};

onNextModule = () => {
const { modules, activeModuleId } = this.state;
const module = modules.find(module =>module._id === activeModuleId);
module.completed = true;
const moduleIndex = modules.findIndex(module => module._id === activeModuleId);
const nextModule = modules[moduleIndex + 1];
let newModuleId;
if (nextModule) {
  newModuleId = nextModule._id;
}
this.setState({activeModuleId: newModuleId , activeStep:SETP_EXPLANATION});
};

_renderAdminBar = () => {
const actions = [{title: ' Add Module', handler:this.onAddMoudle}];
return <AdminBar actions={actions}/>;
};

onAddMoudle = () => {
this.setState({isAddingModule: true})
}
_renderAddMoudleForm = () => {
return <Modal isOpen={true} ariaHideApp={false}>
  <ModuleForm
      onCancel={() => this.setState({isAddingModule: false})}
      onSubmit={module => this.addModule(module)}
      buttonTitle="Add Module"
      />
</Modal>
}


onEditMoudle = (module) => {
  
  this.setState({isEditingModule: true,  editingModule: module})
  }
_renderEditMoudleForm = (module) => {

  return <Modal isOpen={true} ariaHideApp={false}>
   <ModuleForm
      module={module}
      onCancel={() => this.setState({isEditingModule: false, editingModule: null})}
      onSubmit={module => this.handleSave(module)}
      buttonTitle="Edit Module"
      />
   
  </Modal>
  }

}

export default Modules;