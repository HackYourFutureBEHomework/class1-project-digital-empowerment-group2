import React from 'react';
import NProgress from 'nprogress';
import { NonIdealState } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

const NotFound = () => {
  NProgress.done(true);

  return (
    <NonIdealState
      icon="issue"
      title="404"
      description={<p>This page you were looking for was moved or doesn't exist.</p>}
      action={<Link to="/">back to homepage</Link>}
      className="not-found"
    />
  );
};
export default NotFound;