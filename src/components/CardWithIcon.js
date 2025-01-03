import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCogs, faChartLine, faMagnifyingGlassChart, faUsers, faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

const iconMap = {
  database: faDatabase,
  settings: faCogs,
  analytics: faChartLine,
  MagnifyingGlassChart: faMagnifyingGlassChart,
  users: faUsers,
  lightbulb: faLightbulb,
};

const CardWithIcon = ({ title, description, icon, footer, footerLink }) => (
  <div className="card">
    <div className="card__icon">
      <FontAwesomeIcon icon={iconMap[icon]} size="2x" /> {/* Use the icon based on the icon prop */}
    </div>
    <div className="card__header">
      <h3>{title}</h3>
    </div>
    <div className="card__body">
      <p>{description}</p>
    </div>
    {footer && footerLink && (
      <div className="card__footer">
        <a href={footerLink} className="card__button">
          {footer} <FontAwesomeIcon icon={faArrowRight} /> {/* Add arrow icon */}
        </a>
      </div>
    )}
  </div>
);


export default CardWithIcon;