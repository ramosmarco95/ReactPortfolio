import '../css/404.css'
import React from 'react';


function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className='h1-404'>404</h1>
      <p>Oops! Page not found.</p>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p>Return to <a href="/">home</a>.</p>
    </div>
  );
}

export default NotFound;
