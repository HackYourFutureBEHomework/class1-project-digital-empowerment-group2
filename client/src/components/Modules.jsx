import React, { Component} from 'react';
import { getModules , createModule,DeleteModule} from '../api/modules';

class Modules extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      modules: [],
      id: '',
      filter: 'all',
      searchString : '',
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
  onDelete(module){
    console.log(module)
     state.modules.filter(mod => module._id !== mod._id)
     console.log(mod)
  }
  
  searchItem = (e) => {
    const searchString = e.target.value
    this.setState({searchString : searchString})
  }  

  render() {
    const filterModules = this.state.modules.filter((repo) => {
      const regex = new RegExp(this.state.searchString, 'g')
        return regex.test(repo.title)
      })
 
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
                placeholder="Add new module"
                onChange={this.addNewModule}
                value={this.state.title}
              />
                <button
                  onClick={this.addModule}>
                  Add module
                </button>
            </div>
            <div class="continer_paths">
                {filterModules.map((module) => 
                  <div className="items_paths" key={module._id}>
                  {module.title}
                <button
                  className="remove-btn"

                  onClick={()=> {
                    this.setState(state => ({modules: state.modules.filter(mod => module._id !== mod._id)
                    }));
                  }}
              >
              &times;
                  </button>
                </div>)}
            </div>
          </div>
      </div>
    );
  }
 }
 export default Modules;
