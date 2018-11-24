import React from 'react'
import spinner from './spinner.svg'
import './Loader.css';
import classNames from 'classnames';


export default class Loader extends React.Component{
   render() {
        const {fullscreen} = this.props;
        const loaderClass = classNames('loader', { fullscreen })
        return  <div className={loaderClass}>
                    < img className="loader__image" src={spinner} alt='Loading....'/>
                    <h5>Loading....</h5>
                </div>
   } 
}