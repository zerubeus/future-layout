import React from 'react';
import { connect } from 'react-redux';
import HomeIcon from '../../components/home-icons';
import AcquisitionSvg from '../../../assets/img/acquisition.svg';
import positioningSvg from '../../../assets/img/positioning.svg';
import applicationsSvg from '../../../assets/img/applications.svg';
import reviewSvg from '../../../assets/img/review.svg';

import Hammer from 'react-hammerjs';

//=====================================
//  STYLE
//-------------------------------------

const menuSwiper = {
  width: '1280px',
  height: '800px',
  backgroundColor: 'black',
  zIndex: 99999,
  position: 'relative'
};

//=====================================
//  COMPONENT
//-------------------------------------

  var calcSnapLocation = function () {
    var currentDiff;
    var minimumDiff;
    var bestSnap;
    var snapLocations = [];
    var positionY = 0;

    for (var i = 0; i < snapLocations.length; i++) {
      currentDiff = Math.abs(positionY - snapLocations[i]);

      if (minimumDiff === undefined || currentDiff < minimumDiff) {
        minimumDiff = currentDiff;
        bestSnap = snapLocations[i];
      }
    }

    return bestSnap;
  };

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalMove: 0,
      restPosition: window.innerHeight,
      animate: false 
    };

    this.handleAnimationChange = this.handleAnimationChange.bind(this);
    this.onPanStart =  this.onPanStart.bind(this);
  }

  componentDidMount() {

  }

  handleAnimationChange() {

  }

  onPanStart(ev) {
    this.setState({
      verticalMove: this.restPosition + parseInt(ev.deltaY, 10),
      animate: true
    })
  }

  render() {
    return (
      <div>

        <Hammer onPanStart={(e) => this.onPanStart(e)}>
          <div style={menuSwiper} className={this.state.animate ? 'animate' : 'noop'}>{this.state.animate}</div>
        </Hammer>
        
        <div>
          <HomeIcon display={true} imgUrl={AcquisitionSvg} customStyle={{position: 'absolute', top: '16px', left: '20px', width: '64px'}}/>
          <HomeIcon display={true} imgUrl={positioningSvg} customStyle={{position: 'absolute', bottom: '3%', left: '20px', width: '70px'}}/>
          <HomeIcon display={true} imgUrl={applicationsSvg} customStyle={{position: 'absolute', bottom: '2.9%', right: '12px', width: '69px'}}/>
          <HomeIcon display={true} imgUrl={reviewSvg} customStyle={{position: 'absolute', bottom: '89.99%', right: '12px', width: '64px'}}/>
          <main>{this.props.children}</main>
        </div>

      </div>
    );
  }

}

//=====================================
//  CONNECT
//-------------------------------------

export default connect(
  null,
  null
)(MainPage);
