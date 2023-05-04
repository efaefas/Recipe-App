import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingPage() {
  const backgroundImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(https://images.hdqwalls.com/download/sunrise-landscape-minimalism-5k-ex-1920x1080.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  return (
    <div style={backgroundImage}>
      <div className="container">
        <div className="jumbotron text-center">
          <h1 className="display-4 font-weight-bold">Welcome to my landing page!</h1>
          <p className="lead">Thanks for visiting. This is a simple landing page built using React functional components and styled with Bootstrap.</p>
          <hr className="my-4" />
          <p>Click the button below to get started.</p>
          <a className="btn btn-primary btn-lg" href="dashboard" role="button">Get Started</a>

        </div>
      </div>
    </div>
  );
}

export default LandingPage;