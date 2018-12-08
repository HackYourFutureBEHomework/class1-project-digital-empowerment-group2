import React from 'react';
import NProgress from 'nprogress';
import './404.css'
import AppHader from '../../shared/AppHeader';

const NotFound = () => {
  NProgress.done(true);

  return (
    <div>
       <AppHader/>
      <div className= "footer-bar">
        <section className="error-container">
          <span>4</span>
          <span><span className="screen-reader-text">0</span></span>
          <span>4</span>
        </section>
        <p className="zoom-area"><b>This page</b>  you were looking for was moved or doesn't exist. </p>
        <div className="link-container">
          <a  href="/" className="more-link">back to homepage</a>
        </div>
      </div> 
   </div>
  );
};
export default NotFound;