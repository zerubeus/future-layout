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

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalMove: 0,
      restPosition: window.innerHeight,
      animate: false,
      positionY: 0,
      snapLocations: [0, window.innerHeight],
      snapCount: this.state.snapLocations.length,
      topPosition: null
    };
    this.handleAnimationChange = this.handleAnimationChange.bind(this);
    this.onPanStart =  this.onPanStart.bind(this);
    this.calcSnapLocation = this.calcSnapLocation.bind(this);
    this.onPan = this.onPan.bind(this);
  }

  componentDidMount() {

  }

  handleAnimationChange() {

  }

    // return the snap that shall be selected
  calcSnapLocation(currentSnap) {
    if (this.state.verticalMove > 0) {
      // swipe downward
      if (currentSnap !== this.state.snapCount - 1) {
        this.setState({restPosition: this.state.snapLocations[currentSnap + 1]});
      }
    } else if (this.state.verticalMove < 0) {
      // swipe upward
      this.setState({restPosition: window.innerHeight});
      if (currentSnap !== 0) {
        this.setState({restPosition: this.state.snapLocations[currentSnap + 1]});
      }
    }
  };

  onPanStart(ev) {
    this.setState({
      verticalMove: this.state.restPosition + parseInt(ev.deltaY, 10),
      animate: false
    });
  };

  onPanEnd(ev, currentSnap) {
    this.setState({
      animate: true,
      verticalMove: this.state.verticalMove - (this.state.restPosition + parseInt(ev.deltaY, 10))  
    });
    this.calcSnapLocation(currentSnap);
    this.setState({topPosition: this.restPosition + 'px'});
  }

  onPan(ev) {
    this.setState({positionY: this.state.restPosition + parseInt(ev.deltaY, 10)})
    if (this.state.positionY < this.state.snapLocations[this.state.snapCount - 1]) {
      this.setState({positionY: this.state.snapLocations[this.state.snapCount - 1]});
    }
    this.setState({topPosition: this.state.positionY + 'px'});
  }

  render() {
    return (
      <div>

        <Hammer onPanStart={(e) => this.onPanStart(e)} onPanEnd={(e) => this.onPanEnd(e, 0)} onPan={(e) => this.onPan(e)}>
          <div style={menuSwiper} className={this.state.animate ? 'animate' : 'noop'}>{`${this.state.animate}`}</div>
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
