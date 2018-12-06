import React from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';
import Login from './Login'


export default class AppHeader extends React.Component{
    state ={
        isLoging: false
    }

    onLogin = ()=> {
        this.setState({isLoging: true})
        }
        
    render(){
        const {isLoging}=this.state
            return(
                <div className= "app-header">
                    <div><h2>Digital Empowerment</h2></div>
                    <div className="line"></div>
                    <div className="nav">
                    <Link to="/paths" className="app-header-nav">Home</Link>
                    <Link to="/paths" className="app-header-nav">Paths</Link>
                    <Link to="/Login" className="app-header-nav" 
                    // onClick= {this.onLogin}
                     >Log in</Link>
                    </div>
                    {/* <div> 
                        {isLoging && _renderLoginForm}
                    </div> */}
                </div>  
                
                
                
                )
   

    // _renderLoginForm = () => {
    //     return <Modal isOpen={true} ariaHideApp={false}>
    //         <LoginForm
    //             module={module}
    //             onCancel={() => this.setState({isEditingModule: false, editingModule: null})}
    //             onSubmit={module => this.handleSave(module)}
    //             buttonTitle="Edit Module"
    //         />   
    //         </Modal>
    //     }
    }
}
