import React from 'react';
import { connect } from 'react-redux';

function App({children}) {
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
)(App);
