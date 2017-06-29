import React from 'react';
import { connect } from 'react-redux';
import HomeIcon from '../../components/home-icons';
import AcquisitionSvg from '../../../assets/img/acquisition.svg';
import positioningSvg from '../../../assets/img/positioning.svg';
import applicationsSvg from '../../../assets/img/applications.svg';
import reviewSvg from '../../../assets/img/review.svg';

function MainPage({children}) {
  return (
    <div>

      <HomeIcon display={true} imgUrl={AcquisitionSvg} customStyle="position: absolute; top: 16px; left: 20px; width: 64px;" onClick={{}}/>
      <HomeIcon display={true} imgUrl={positioningSvg} customStyle="position: absolute; bottom: 3%; left: 20px; width: 70px;" onClick={{}}/>
      <HomeIcon display={true} imgUrl={applicationsSvg} customStyle="position: absolute; bottom: 2.9%; right: 12px; width: 69px;" onClick={{}}/>
      <HomeIcon display={true} imgUrl={reviewSvg} customStyle="position: absolute; bottom: 89.99%; right: 12px; width: 64px;" onClick={{}}/>

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
