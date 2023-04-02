import React from 'react';
import './styles.css';


const SimpleGuide = ({ pageTitle, pageDescription, guideTitle, guideContent }) => {
  return (
    <div className="page-content-full guide-page">
      <div className="page-content-header">
        <div className="iconranking">
          <img src="src/assets/img/icons/regnum.svg" alt="sword"></img>
        </div>
        <h1>{ pageTitle }</h1>
        <div className="divider">
          <img src="src/assets/img/news/ornament2.png" alt="sword"></img>
        </div>
        <p>{ pageDescription }</p>
      </div>
      <div className="page-content">
        <div className="page-content-title">
          { guideTitle }
        </div>
        <div className="page-content-container">
          { guideContent }
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default SimpleGuide;