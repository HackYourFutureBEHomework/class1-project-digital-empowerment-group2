import React from 'react'
import{ Button ,Modal} from 'react-bootstrap'
//import '..assets/css/index.css'
import '../assets/css/index.css';

export default class Trigger extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      //this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        title:props.module.title
      };
    }
  
    // handleHide() {
    //   this.setState({ show: false });
    // }
    setNewTitle=(e)=>{
        this.setState({title:e.target.value})
        console.log(this.state.title)
       // this.props.handlingChange(e)
    }
    render() {
        // let Modal = ReactBootstrap.Modal
        // let Button = ReactBootstrap.Button
        //console.log(this.props.show)
        //console.log(this.props.title)

      return (//   </Button>
        <div className="modal-container" style={{ height: 200 }}>
  
          <Modal
            show={this.props.show}
            onHide={this.props.handleHide}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Contained Modal
              </Modal.Title>
            </Modal.Header>
            
            
           
            <input type='text' placeholder='Enter The title' onChange={this.setNewTitle}></input>
            <button onClick={this.props.onSubmit}>submet</button>
            

            )})}
            <Modal.Body>
              Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
              ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
//   render(<Trigger />);