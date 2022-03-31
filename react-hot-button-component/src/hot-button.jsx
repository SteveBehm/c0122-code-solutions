import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount >= 0 && this.state.clickCount < 6) {
      return (
        <button className="dark-purple" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickCount <= 8) {
      return (
        <button className="light-purple" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickCount <= 11) {
      return (
        <button className="red" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickCount <= 14) {
      return (
        <button className="orange" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickCount <= 17) {
      return (
        <button className="yellow" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clickCount >= 18) {
      return (
        <button className="white" onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}
