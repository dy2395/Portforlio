import React from 'react';

export default function Application(apps) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div>
    <h1>Application Page</h1>
    
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Project Name: {apps.name}</h5>
          <p className="card-text">Description: {apps.description}</p>
          <a href="#" className="btn btn-primary">
            Link:{apps.name}
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}