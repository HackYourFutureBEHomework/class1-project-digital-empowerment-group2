import React, { Component} from 'react';
import { getModules , createModule} from '../api/modules';

class Modules extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      modules: [],
      id: '',
      filter: 'all',
    };
  }
 
   componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });
  }
 
  addNewModule = e => {
    this.setState({
      title: e.target.value
    });
  };
  addModule = e => {
    e.preventDefault();
    createModule(this.state.title).then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: "",
        id:''
      });
    });
  };
  
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
                        onClick={()=> {
                          this.setState(state => ({modules: state.modules.filter(mod => module._id !== mod._id)
                          }));
                        }}
                      >&times;
                      </button>
                      <button className="Edit-btn"></button>
                  </div>)}
            </div>
      </div>
    );
  }
 }
 export default Modules;