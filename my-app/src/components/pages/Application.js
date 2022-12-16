import React from 'react';
import pic1 from '../images/superhero blog post home page.png';
import pic2 from '../images/book search engine.png';
import pic3 from '../images/womans world style page.png';

export default function Application(apps) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div>
    <h1>Application</h1>
    
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={pic1}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Project Name: {apps.name}</h5>
          <p className="card-text">Description: {apps.description}</p>
          <a href="https://github.com/dy2395/justice-league-vs-avengers" className="btn btn-primary">
            Link:{apps.name}
          </a>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={pic2}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Project Name: {apps.name}</h5>
          <p className="card-text">Description: {apps.description}</p>
          <a href="https://dy2395.github.io/Book-search-engine/" className="btn btn-primary">
            Link:{apps.name}
          </a>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={pic3}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Project Name: {apps.name}</h5>
          <p className="card-text">Description: {apps.description}</p>
          <a href="https://dy2395.github.io/Womens-world-deploy/" className="btn btn-primary">
            Link:{apps.name}
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}