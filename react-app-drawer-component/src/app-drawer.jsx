import React from 'react';

export class MenuDrawer extends React.Component {
  // define a constructor to establish the state
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.goToLanding = this.goToLanding.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
      // code to open the menu
    } else {
      this.setState({ isClicked: true });
      // code to slide the menu back
    }
  }

  goToLanding() {
    if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    }
  }

  render() {
    if (this.state.isClicked === false) {
      return (
        <>
          <div className='parent-div view-swap'>
            <div className='icon-div'>
              <i className="fa-solid fa-bars" onClick={this.handleClick} />
            </div>
            <div className='img-div'>
            </div>
          </div>
        </>
      );
    } else if (this.state.isClicked === true) {
      return (
        <>
          <div className='bg-modal' onClick={this.goToLanding}>
            <div className='menu-div'>
              <div className='menu-header'>
                <h3>Choose a Game</h3>
              </div>
              <div className='game-choice'>
                <a onClick={this.goToLanding}>The Legend of Zelda </a>
              </div>
              <div className='game-choice'>
                <a onClick={this.goToLanding}>A Link to The Past</a>
              </div>
              <div className='game-choice'>
                <a onClick={this.goToLanding}>Ocarina of Time</a>
              </div>
              <div className='game-choice'>
                <a onClick={this.goToLanding}>The Wind Waker</a>
              </div>
              <div className='game-choice'>
                <a onClick={this.goToLanding}>Breath of the Wild</a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
