import React from 'react';
import PropTypes from 'prop-types';

// TODO: this is not a good place for business logic as this is a
// presentational component and have to handle the markup, consider moving
// this to the container component when the proto get validated.
const condistionalDisplay = (display, imgUrl, customStyle, onClick) => {
  if (display) {
    return (
      <img src={imgUrl} alt="" customStyle={customStyle} onClick={onClick}/>
    );
  } else {
    return null;
  }
}

const HomeIcon = ({display, imgUrl, customStyle, onClick}) => {
  return condistionalDisplay(display, imgUrl, customStyle, onClick);
};

HomeIcon.propTypes = {
  display: PropTypes.bool,
  imgUrl: PropTypes.string,
  customStyle: PropTypes.string,
  onClick: PropTypes.func
};

export default HomeIcon;
