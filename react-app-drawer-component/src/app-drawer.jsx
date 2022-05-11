import React, { useState } from 'react';

// App Drawer Component
const MenuDrawer = () => {
  const [isClicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(isClicked => !isClicked);
  };

  return (
    <>
      <div className='parent-div'>
        <div className={isClicked ? 'menu-div' : 'menu-div off'}>
          <div className='menu-header'>
            <h3>Choose a Game</h3>
          </div>
          <div className='game-choice'>
            <a onClick={handleClick}>The Legend of Zelda </a>
          </div>
          <div className='game-choice'>
            <a onClick={handleClick}>A Link to The Past</a>
          </div>
          <div className='game-choice'>
            <a onClick={handleClick}>Ocarina of Time</a>
          </div>
          <div className='game-choice'>
            <a onClick={handleClick}>The Wind Waker</a>
          </div>
          <div className='game-choice'>
            <a onClick={handleClick}>Breath of the Wild</a>
          </div>
        </div>
        <div className={isClicked ? 'dark-div' : ''} onClick={handleClick}></div>
        <div className='icon-div'>
          <i className="fa-solid fa-bars" onClick={handleClick} />
        </div>
      </div>
      <div className='img-div'>
        <img src="../images/controller.jpg" alt="playstation controller" className="controller" />
      </div>
    </>
  );
};
export default MenuDrawer;
// export class MenuDrawer extends React.Component {
//   // define a constructor to establish the state
//   constructor(props) {
//     super(props);
//     this.state = {
//       isClicked: false
//     };

//     this.handleClick = this.handleClick.bind(this);
//     this.goToLanding = this.goToLanding.bind(this);
//   }

//   handleClick() {
//     if (this.state.isClicked) {
//       this.setState({ isClicked: false });
//       // code to open the menu
//     } else {
//       this.setState({ isClicked: true });
//       // code to slide the menu back
//     }
//   }

//   goToLanding() {
//     if (this.state.isClicked === true) {
//       this.setState({ isClicked: false });
//     }
//   }

//   render() {

//     return (
//         <>
//           <div className={this.state.isClicked ? 'parent-div dark' : 'parent-div'} onClick={this.goToLanding}>
//             <div className={this.state.isClicked ? 'menu-div' : 'menu-div off'}>
//               <div className='menu-header'>
//                 <h3>Choose a Game</h3>
//               </div>
//               <div className='game-choice'>
//                 <a onClick={this.goToLanding}>The Legend of Zelda </a>
//               </div>
//               <div className='game-choice'>
//                 <a onClick={this.goToLanding}>A Link to The Past</a>
//               </div>
//               <div className='game-choice'>
//                 <a onClick={this.goToLanding}>Ocarina of Time</a>
//               </div>
//               <div className='game-choice'>
//                 <a onClick={this.goToLanding}>The Wind Waker</a>
//               </div>
//               <div className='game-choice'>
//                 <a onClick={this.goToLanding}>Breath of the Wild</a>
//               </div>
//             </div>
//             <div className='icon-div'>
//               <i className="fa-solid fa-bars" onClick={this.handleClick} />
//             </div>
//           </div>
//           <div className='img-div'>
//             <img src="../images/controller.jpg" alt="playstation controller" className="controller" />
//           </div>
//         </>
//     );
//   }
// }
