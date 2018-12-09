import React, { Component} from 'react';

import * as apiMod from '../../api/modules';
import * as apiPath from '../../api/paths';
import 'react-quill/dist/quill.snow.css';
import ModuleForm from './ModuleForm';
import AppHader from '../../shared/AppHeader';
import Loader from '../../shared/Loader';
import Modal from 'react-modal';
import AdminBar from '../../shared/AdminBar';
import classNames from 'classnames'
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { NonIdealState } from '@blueprintjs/core';

const SETP_EXPLANATION ='explanation';
const SETP_EXERCISE ='exercise';
const SETP_EVALUATION ='evaluation';


class Modules extends Component {
  state = {
    title:'',
    path: null,
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
    newEvaluation: ""
  }; 



componentWillMount () {
  nprogress.set(0.0);
  nprogress.set(0.4);
}

  componentDidMount() {
    const { pathId } = this.props.match.params;
     apiPath.getPath(pathId).then((path) => {
      const { modules } = path;
      let activeModuleId;
      if (modules.length > 0) {
        activeModuleId = modules[0]._id;
      }
      this.setState({ path, modules, activeModuleId, isLoding: false });
    });
    nprogress.set(1.0);
  }

  addModule = async (module) => {
    console.log(module);
    
    const{path}=this.state
    console.log(path._id)
    const newModule = await apiMod.createModule(path._id,module);
    console.log('NEW', newModule);
    this.setState(state => ({ modules: [...state.modules, newModule], isAddingModule: false}));
  };
  
  handleDelete =  id => { 
    apiMod.deleteModule(id);
      this.setState({     
        modules:this.state.modules.filter( mod => mod._id!== id )
    });
  };

  handleSave = async (module) => {
    const updatedModule = await apiMod.updateModule(module);
    this.setState((previousState) => {
      const modules = [...previousState.modules];
      const index = modules.findIndex(mod => mod._id === module._id);
      modules[index] = updatedModule;
      console.log(modules);
      return { modules, isEditingModule: false, editingModule: null  };
    })
  };

  handleDialoge=(module)=>{
    this.handleSelect(module)
    this.setState({show:!this.state.show})
  }

  handleSelect = (module) =>{
    this.setState({ selectedModule: module})
  }
  renderNoMoudlesHave = () => (
    <NonIdealState
      title="No Module yet"
      description={(
        <p>
          No Modules have been yet.
        </p>
      )}
      // action={<Button type="button" intent="primary" onClick={() =>this.onAddMoudle()}>Create Module</Button>}
    />
  )

  render() {
    const {path, isLoding, modules, isAdmin, isAddingModule, isEditingModule, editingModule } = this.state
    const {isloggedIn}=this.props
    if (isLoding) {
        return <Loader fullscreen={true}/>;
    }

    let EmptyModule;
    if (modules.length === 0) EmptyModule  = this.renderNoMoudlesHave();

    const moduleComponents = modules.map(this._renderModule);
    return (
        <main>
            <AppHader isloggedIn={isloggedIn}/>
            {isAdmin && this._renderAdminBar()}
            {isloggedIn &&<button  className="Path__button"  onClick={() =>this.onAddMoudle(modules)}> Create Module </button>}
            {isAddingModule && this._renderAddMoudleForm()}
            {isEditingModule && this._renderEditMoudleForm(editingModule)}
            <h2 className="module-pathId__header">{path ? path.title : null}</h2>
            { EmptyModule  }
            <div className="module-list">
            {moduleComponents}
            </div>
        </main>
    );
  }
  _renderModule = module =>{
    const {activeModuleId, activeStep }= this.state;
    const isActive = module._id === activeModuleId;
    const {isloggedIn}=this.props;

    console.log(module);
    return (
      <nav className="module" key={module._id}>
        <div className="module__title">
          <h2>{module.title}</h2>
            {module.completed && <span className='glyphicon glyphicon-ok'> Completed</span>}
        </div> 
        {isloggedIn && 
          <div>            
            <button  className="edit-delete__button"  onClick={() =>this.onEditMoudle(module)}> Edit </button>
            <button className = 'edit-delete__button' onClick={() =>
              {if (window.confirm(`Are you sure you want to delete "${module.title}"? `)) this.handleDelete( module._id);}}> Delete </button> 
          </div>
        }
        {isActive && (
          <div className="module__body">
            {this._renderStep('Explanation', 'module__explanation', module.explanation, activeStep === SETP_EXPLANATION)}
            {this._renderStep('Exercise', 'module__exercise', module.exercise,  activeStep === SETP_EXERCISE)}
            {this._renderStep('Evaluation', 'module__evaluation', module.evaluation,  activeStep === SETP_EVALUATION)}
         </div>
        )}
      </nav>
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
    return <AdminBar actions={actions} />;
  };

  onAddMoudle = () => {
    this.setState({isAddingModule: true})
  }

  _renderAddMoudleForm = () => {
    return <Modal isOpen={true} ariaHideApp={false}>
      <ModuleForm
        modules={this.state.modules}
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