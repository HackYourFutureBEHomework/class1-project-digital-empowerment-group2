import React, { Component} from 'react';

import * as api from '../api/paths';
import 'react-quill/dist/quill.snow.css';

import Loader from '../shared/Loader';


export default class Paths extends Component{
    state={
        isLoding:true,
        baths:[]

    }

    componentDidMount() {
    api.getPaths().then((paths) => {
    console.log('im here')
      this.setState({  paths, isLoding: false });
    });
  }

    render(){
        if (this.state.isLoding) {
            return <Loader fullscreen={true}/>;
        }
        return(
            <div>There Are no Paths</div>
        )

    }

}