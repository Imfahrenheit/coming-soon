import React from 'react';
// import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
// import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
// import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Abroad Scholars</a>
          </div>
          {/* <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div> */}
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>We're Almost There!</h1>
            <p>At Abroad Scholars, we help students, professionals, and prospective workers connect with global education and career opportunities.</p>

            <p>Our platform will soon provide comprehensive guidance, resources, and support for scholars aiming to study abroad.</p>
            <p>Stay tuned for exciting updates, and feel free to reach out if you want to learn more before we launch.</p>
          </div>
          <a href="mailto:info@abroadscholars.org">
            <div className="cta">Contact Us</div>
          </a>
        </div>
        
      </div>
    );
  }
}

export default App;
 