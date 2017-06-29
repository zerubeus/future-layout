import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';
import { profileActions } from '../../../core/profile';
import './profile.css';

// this is just to fast style this component
// if the proto get validated the css will be
// in a separate file to keep the same pattern we used to know
//=====================================
//  STYLE
//-------------------------------------

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

const buttonStyles = { 
  width: '520px', 
  marginLeft: '12px',
  float: 'left' 
};


//=====================================
//  COMPONENT
//-------------------------------------

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkFirstIndex (index, {id}, profileSelected) {
  if (index === 0) {
    return <Button bsSize="large" block key={index} onClick={() => profileSelected(id)} style={{...buttonStyles, marginTop: '3%'}}>{capitalizeFirstLetter(id)}</Button>
  } else {
    return <Button bsSize="large" block key={index} onClick={() => profileSelected(id)} style={buttonStyles}>{capitalizeFirstLetter(id)}</Button>
  }
}

const ProfilePage = ({layout: {layout: {model: {profiles}}}, profileSelected}) => {
  return (
    <div style={containerStyle}>
      <div>
        <div className="modal-container">
          <div className="modal-head">
            <h3 style={ProfileH3Style}>Profiles</h3>
          </div>
          <div>
            <ButtonGroup vertical>
              {profiles.map((profile, index) => checkFirstIndex(index, profile, profileSelected))}
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  layout: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = (dispatch) => ({profileSelected: (id) => dispatch(profileActions.profileSelected(id))}) 
const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
