import React from 'react';

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    // setting the currentView to the first id in the pokedex array
    // this way the carousel doesn't start without an image
    this.state = {
      currentView: 1
    };
    this.arrowRight = this.arrowRight.bind(this);
    this.arrowLeft = this.arrowLeft.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  /*
    below creates a method that changes the current view when a user
    clicks the right arrow and increments the currentView by 1
    if the current view is the same number as the last in the pokedex array
    then set the state back to currentView: 1 to start the carouself over
  */
  arrowRight() {
    if (this.state.currentView >= this.props.pokedex.length) {
      this.setState({
        currentView: 1
      });
    } else {
      this.setState({
        currentView: this.state.currentView + 1
      });
    }
  }

  /*
    below creates a method that changes the current view when a user
    clicks the left arrow and decrements the currentView by 1
    if the current view is the same number as the first in the pokedex array
    then change the state so currentView's value is the last index of the
    pokedex array.
  */

  arrowLeft() {
    if (this.state.currentView <= 1) {
      this.setState({
        currentView: this.props.pokedex.length
      });
    } else {
      this.setState({
        currentView: this.state.currentView - 1
      });
    }
  }

  /*
    When the component output has rendered to the DOM this special
    method will run automatically. We don't have to bind it either.

    by setting the arrow function to this.arrowRight we can enable the
    carousel to start back at the beginning once it reaches the last image
    rather than having no image once the currentView incremented past the
    last index in the pokedex array
  */

  componentDidMount() {
    setInterval(() =>
      this.arrowRight(), 3000);
  }

  /*
    this method will change the currentView when a circle icon is clicked on
    by adding the event prop and giving the icon an id value that is the same
    the currentView, we can change the currentView to the appropriate image
    based on which icon is clicked on

    the event.target.id will give us a string number so we need to parse it
    into an integer
  */

  handleIconClick(event) {
    const iconID = event.target.id;
    this.setState({
      currentView: parseInt(iconID)
    });
  }

  render() {
    /*
      1. We want to get the pokedex array of objects stored in a variable to use later
      2. create a return statement that is going to return our entire carousel
      3. Make sure to put a onClick listener for the arrowRight and arrowLeft icons
      4. For the img element we want to use a map method on the pokedex array
         we will render a character based on the currentView and the character's id
         in the return statement for the map method we create the React img element
         however, we want to use a ternary operator to determine its className.
         If the currentView number matches the id value of the array item then we will
         show the element and if not the img element for the corresponding pokemon
         is hidden.
      5. We need to add a key when using the map method in react and we can set it to
        the character's id
      6. then we will set the src to the character url so the img is populated
      7. We need to use another map method to determine what type of icon to display
         when that icon is clicked.
         again will go through each character in the pokedex array and if the character
         has the same id value as the currentView the circle will be filled in
         and if it does have the same id then it will be a circle without filling
         all circles will be shown at all times so we don't need to hide anything
    */
    const pokedex = this.props.pokedex;
    return (
      <div className="container">
        <div className="row">
          <div className="column-fourth arrow-icon align-left">
            <i className="fas fa-angle-left fa-2x backward" onClick={this.arrowLeft}></i>
          </div>
          <div className="column-half">
            <div className="images">
              {pokedex.map(character => {
                return (
                  <img className={this.state.currentView === character.id
                    ? 'content'
                    : 'content hidden'}
                    key={character.id} src={character.url} />
                );
              })}
            </div>
          </div>
          <div className="column-fourth arrow-icon align-right">
            <i className="fas fa-angle-right fa-2x forward" onClick={this.arrowRight}></i>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <div className="progress-icons">
              {pokedex.map(character => {
                return (
                  this.state.currentView === character.id
                    ? <i key={character.id} id={character.id} onClick={this.handleIconClick} className="fas fa-circle circle-icon"></i>
                    : <i key={character.id} id={character.id} onClick={this.handleIconClick} className="far fa-circle circle-icon"></i>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
