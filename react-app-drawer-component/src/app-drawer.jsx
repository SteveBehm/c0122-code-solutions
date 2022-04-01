import React from 'react';

export class MenuDrawer extends React.Component {
  // define a constructor to establish the state
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return (
      <div className='parent-div'>
        <div className='icon-div'>
          <i className="fa-solid fa-bars" onClick={this.handleClick} />
        </div>
        <div className='img-div'>
        </div>
        {/* <div className='menu-div'>
          <div className='menu-header'>
            <h3>Choose a Game</h3>
          </div>
          <div className='game-choice'>
            <p>The Legend of Zelda</p>
          </div>
          <div className='game-choice'>
            <p>A Link to The Past</p>
          </div>
          <div className='game-choice'>
            <p>Ocarina of Time</p>
          </div>
          <div className='game-choice'>
            <p>The Wind Waker</p>
          </div>
          <div className='game-choice'>
            <p>Breath of the Wild</p>
          </div>
        </div> */}
      </div>
    );
  }

  // render() {
  //   if (this.state.isClicked === true) {
  //     // show the opened menu
  //     return (
  //       <div className='parent-div'>
  //         <div className='landing-div'>
  //           <div className='img-div'>
  //             {/* <img src="./img/surf-wagon-jeep.jpg" alt="jeep with surf boards"></img> */}
  //           </div>
  //         </div>
  //         <div className='menu-div'>
  //           <div className='menu-header'>
  //             <h3>Choose a Game</h3>
  //           </div>
  //           <div className='game-choice'>
  //             <p>The Legend of Zelda</p>
  //           </div>
  //           <div className='game-choice'>
  //             <p>A Link to The Past</p>
  //           </div>
  //           <div className='game-choice'>
  //             <p>Ocarina of Time</p>
  //           </div>
  //           <div className='game-choice'>
  //             <p>The Wind Waker</p>
  //           </div>
  //           <div className='game-choice'>
  //             <p>Breath of the Wild</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else if (this.state.isClicked === false) {
  //     // show the menu icon at the top left corner
  //     return (
  //       <div className='parent-div'>
  //         <div className='bg-div'>
  //           <div className='img-div'>
  //             {/* <img src="../images/surf-wagon-jeep.jpg" alt="jeep with surf boards"></img> */}
  //           </div>
  //         </div>
  //         <div className='icon-div'>
  //           <FontAwesomeIcon icon="fa-solid fa-bars" onClick={this.handleClick}></i>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
}
