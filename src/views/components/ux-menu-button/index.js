import React from 'react';
import PropTypes from 'prop-types';
import './style.css'


function colorSwitcher(currentView) {
  switch (currentView) {
    case 'acquisition':
      return { 'background-color': 'rgba(130, 169, 232, 0.3)' };
    case 'review':
      return { 'background-color': 'rgba(47, 79, 117, 0.3)' };
    case 'positioning':
      return { 'background-color': 'rgba(106, 93, 57, 0.3)' };
    case 'awtp':
      return { 'background-color': 'rgba(255, 128, 82, 0.3)' };
    case 'applications':
      return { 'background-color': 'rgba(255, 128, 82, 0.3)' };
    default:
      break;
  }
}

const Button = ({children, currentView, defaultTab = false, imgUrl = 'undefined', onClick, type = 'button'}) => {
  return (
    <button className={`ux-btn ${defaultTab ? 'apply-dashed' : null}`} onClick={onClick} style={colorSwitcher()} type={type}>
      {imgUrl && <img alt="" src={imgUrl}/>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;
