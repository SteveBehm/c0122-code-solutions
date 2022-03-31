import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    if (this.state.isClicked === false) {
      // stopwatch ready to play
      return (
        <div className='parent-div'>
          <div className='circle'>
            <div className='number'>
              <p>0</p>
            </div>
          </div>
          <div className='icon-div' onClick={this.handleClick}>

          </div>
        </div>
      );
    }
  }
}
