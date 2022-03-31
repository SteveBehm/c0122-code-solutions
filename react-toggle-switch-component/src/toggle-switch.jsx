import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isChecked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
  }

  render() {
    if (this.state.isChecked === false) {
      // this will be the off button
      return (
        <div className='parent-div'>
          <div className='btn-div-off'>
            <div className='toggle-div-off' onClick={this.handleClick} />
          </div>
          <div className='word-div'>
            <p>Off</p>
          </div>
        </div>
      );
    } else if (this.state.isChecked === true) {
      // this will be the on button
      return (
        <div className='parent-div'>
          <div className = 'btn-div-on'>
            <div className='toggle-div-on' onClick={this.handleClick} />
          </div>
          <div className='word-div'>
            <p>On</p>
          </div>
        </div>
      );
    }
  }
}
