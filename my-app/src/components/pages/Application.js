import React from 'react';
import pic1 from '../images/superhero blog post home page.png';
import pic2 from '../images/book search engine.png';
import pic3 from '../images/womans world style page.png';

export default function Application(apps) {

  return (
    <div>
      <div class="container-fluid p-5 text-center">
    <h1>Application</h1>
      </div>
    <div className="container mt-5">
      <div class="row">

      <div className="col-md-4">
        <div class="card app-card">
        <img
          src={pic2}
          alt="project2"
        />
      <div class="card-body"> 
        <div className="card-title">
        <h4>Google Books API Search Engine</h4>
        </div>
          <p className="card-text" style={{fontSize:'16px'}}>Description: It is a simple search engine using Google Books API. Users can view the top 10 search results showing book covers, titles, authors, and descriptions.</p>
          <a href="https://dy2395.github.io/Book-search-engine/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Go to the project site
          </a>
        </div>
      </div>
    </div> 

      <div className="col-md-4">
        <div class="card app-card">
        <img
          src={pic1}
          alt="project1"
        />
      <div class="card-body"> 
        <div className="card-title">
        <h4>Justice League vs Avengers Blog Post</h4>
        </div>
          <p className="card-text" style={{fontSize:'16px'}}>Description: It is an interactive project page where users can check out blog posts and create ones to defend their heroes. They can also update or delete their posts, and comment on any posts. The users will be required to sign up and log in to access dashboard to edit posts. Express, MYSQL, node.js, handlebars were used.</p>
          <a href="https://github.com/dy2395/justice-league-vs-avengers" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Go to the project site
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
        <div class="card app-card">
        <img
          src={pic3}
          alt="project3"
        />
      <div class="card-body"> 
        <div className="card-title">
        <h4>
          Woman's World E-Magazine: Style Page
        </h4>
        </div>
          <p className="card-text" style={{fontSize:'16px'}}>Description: It is an e-magazine-styled website created by react app. It themed six different aspects of women's lifestyle. Denise worked on the Style page specifically.</p>
          <a href="https://dy2395.github.io/Womens-world-deploy/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Go to the project site
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}