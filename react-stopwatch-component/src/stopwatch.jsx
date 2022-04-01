import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      counter: 0
    };
    // here we need to bind both of the prototype methods
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
      // this will stop the timer
      clearInterval(this.timerID);
    } else {
      // if isClick is false that means it is not playing and
      // we can set the state to turn on the timer
      this.setState({ isClicked: true });
      // this will turn on the timer and the number will increase
      this.timerID = setInterval(() =>
        this.tick(), 1000);
    }
  }

  // tick is helping us change the state of our counter property
  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  reset() {
    // this will check to see if the timer is paused and if the counter
    // is greater than zero
    if (this.state.isClicked === false && this.state.counter > 0) {
      this.setState({
        counter: 0
      });
      this.setState({ isClicked: false });
    }
  }

  render() {
    if (this.state.isClicked === false) {
      // stopwatch ready to play
      return (
        <div className='parent-div'>
          {/* if a user clicks on the clock face then the reset prototype
          method will run */}
          <div className='circle' onClick={this.reset}>
            <div className='number'>
              <p>{this.state.counter}</p>
            </div>
          </div>
          <div className='icon-div' onClick={this.handleClick}>
            <i className='fa fa-play'></i>
          </div>
        </div>
      );
    } else if (this.state.isClicked === true) {
      // stopwatch is ready to pause
      return (
        <div className='parent-div'>
          <div className='circle'>
            <div className='number'>
              <p>{this.state.counter}</p>
            </div>
          </div>
          <div className='icon-div' onClick={this.handleClick}>
            <i className='fa fa-pause'></i>
          </div>
        </div>
      );
    }
  }
}
