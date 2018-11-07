import React, { Component} from 'react';
import { getModules , createModule} from '../api/modules';

class Modules extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      modules: []
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
    createModule(this.state.title).then(newPath => {
      this.setState({
        modules: this.state.modules.concat(newPath),
        title: ""
      });
    });
  };
  
  render() {
    const { modules } = this.state;
  
    return (
      <div>
        <div 
          className="nav"
        >
          <h1>
              DIGITAL EMPOWERMENT
          </h1>
          <a onClick={this.MangageUsers}>
            <span>
              Mangage users 
            </span>
          </a>
          <a onClick={this.logOut}>
            <span>
              Log out 
            </span>
          </a>
        </div>
        <div 
          className="continer"
        >
            <div 
              className="Paths"
            >
              <h1>
                Paths
              </h1>
              <input
                className="search"
                type='search'
                placeholder='Search for paths...' 
                onChange={this.searchItem}
              />
              <input
                className="new-path"
                type="text"
                placeholder="Add new path"
                onChange={this.addNewModule}
                value={this.state.title}
              />
                <button 
                  onClick={this.addModule}>
                  Add path
                </button>
            </div>
            <div class="continer_paths"> 
                {modules.map((module) => <div className="items_paths" key={module._id}>{module.title}</div>)}
            </div>
          </div>   
      </div>
    );
  }
}

export default Modules;
