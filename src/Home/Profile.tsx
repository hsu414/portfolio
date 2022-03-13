import React from 'react';
//@ts-ignore
import Typical from 'react-typical';

// rafc to create component with extension ES7+ React/Redux/React-Native snippets

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="social-media-links">
          <div className="colz">
            <a href="https://www.linkedin.com/in/yi-chen-hsu-652952137/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fa fa-twitter-square"></i>
            </a>
            <a href="https://www.facebook.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
          </div>

          <div className="profile-details-name">
            {'something'} Hello, I am <span className="highlighted-text">Yi-Chen</span>
          </div>

          <div className="profile-details-roles">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical loop={Infinity} steps={['Enthusiastic Developer 💻 ', 1000, 'Full Stack Developer 👩🏻‍💻 ', 1000, 'Automotive Software Developer 🚗', 1000]}></Typical>
              </h1>
              <span className="profile-role-tagline"> Kanck of building appliactions with front and back end operations.</span>
            </span>
          </div>

          <div className="profile-options">
            <button className="hire-Me">Hire Me</button>
            <a href="#" download="Yi-ChenHsu.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
