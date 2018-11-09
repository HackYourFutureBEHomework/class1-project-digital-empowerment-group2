import React, { Component} from 'react';
import { getModules , createModule,checkModule,deleteModule} from '../api/modules';

class Modules extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      modules: [],
      id: '',
      filter: 'all',
      completed: false,
    };
  }
 
   componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });
  }
 
  addNewModule = event => {
    this.setState({
      title: event.target.value
    });
  };
  addModule = () => {
    createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
        id:'',
        completed:''
      });
    });
  };

  handleDelete = (id) => {
    deleteModule(id)
      this.setState({
        modules: this.state.modules.filter(mod => mod._id !== id)
      });
  };


  handleCheck = (completed) => {
    checkModule(completed)
    this.setState({
      modules : this.state.modules.filter(mod => mod._completed !== completed)
    });
  };


  completedText=()=> { return this.state.modules.filter(module => module.completed).length;}

  render() {
    const filterModules = this.state.modules.filter((repo) => {
      const regex = new RegExp(this.state.searchString, 'g')
        return regex.test(repo.title)
      })
 
    return (
      <div className="continer">
            <div className="module-nav">
              <h2>
                Using a web browser
              </h2>
              <input
                className="input"
                type="text"
                placeholder="Add new module"
                onChange={this.addNewModule}
                value={this.state.title}
              />
               <button
                  className="button"
                  onClick={this.addModule}>
                  Add module
                </button> 
            </div>
            <div class="continer_modules">
                {filterModules.map((module) => 
                  <div className="module" key={module._id}>
                    {module.title}
                      <button
                        className="remove-btn"
                        onClick={()=>this.handleDelete(module._id)}
                      >
                      &times;
                      </button>
                      <button className="Edit-btn"></button>

                      <input 
                          class="checkbox"
                          type="checkbox"
                          onChange={()=>{this.handleCheck(module.completed)}}
                      />
      
                  </div>)}
            </div>
      </div>
    );
  }
 }
 export default Modules;
