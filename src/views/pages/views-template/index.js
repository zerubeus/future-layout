import React from 'react';
import { connect } from 'react-redux';
import './style.css';

function ViewsTemplate() {
  return (
    <div className="viewsTemplate text-center">
    </div>
  );
}

//=====================================
//  CONNECT
//-------------------------------------

export default connect(
  null,
  null
)(ViewsTemplate);
