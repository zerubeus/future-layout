import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './profile.css';

// this is just to fast style this component
// if the proto get validated the css will be
// in a separate file to keep the same pattern we used to know
const containerStyle = {
  width: '1280px',
  height: '800px',
  backgroundColor: '#313131',
  overflow: 'hidden',
};

const ProfileH3Style = {
  fontSize: '31px',
  fontWeight: '100',
  paddingTop: '4%',
  paddingLeft: '2%',
}

const ProfilePage = ({layout: {layout}}) => {
  return (
    <div style={containerStyle}>
      <div>
        <div className="row modal-container">
          <div className="row modal-head">
            <h3 style={ProfileH3Style}>Profiles</h3>
          </div>
          <div className="row">
            
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  layout: PropTypes.object.isRequired,
};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  null
)(ProfilePage);
