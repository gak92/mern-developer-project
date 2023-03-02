import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Sorry page not found</h1>
      <NavLink to='/' >Back to Home</NavLink>
    </div>
  )
}

export default ErrorPage