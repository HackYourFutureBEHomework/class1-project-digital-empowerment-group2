import React from 'react';
import Modules from './Modules.jsx'

class Form extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          title: '',
          

          
        }
    
        // this.handleChangeField = this.handleChangeField.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }
    


      

    //   handleChangeField(key, event) {
    //     this.setState({
    //       [key]: event.target.value,
    //     });
    // }

    // handleSubmit(){
    //     const { title } = this.state;
    
    //     return post('http://localhost:4000/api/modules', {
    //       title,
          
    //     });
    // }

  render() {
      const title = this.State
    return (
      <div className="">
        <input className="" 
        type='text'
         ref={el=>this.newItemText = el}
         required
        placeholder="Enter module title -" />
       
        <button className="" onClick={this.handleSubmit}>Add module </button>
      </div>
    )
  }
}

export default Form;