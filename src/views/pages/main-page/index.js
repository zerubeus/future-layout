import React from 'react';
import { connect } from 'react-redux';

function MainPage({children}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

//=====================================
//  CONNECT
//-------------------------------------

export default connect(
  null,
  null
)(MainPage);
