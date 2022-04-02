import React from 'react';

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 1
    };
    this.arrowRight = this.arrowRight.bind(this);
    this.arrowLeft = this.arrowLeft.bind(this);
  }

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

  componentDidMount() {
    this.timer = setInterval(() => this.arrowRight, 3000);
  }

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

  render() {
    const pokedex = this.props.pokedex;
    return (
      <div className="container">
        <div className="row">
          <div className="column-fourth arrow-icon align-left">
            <i className="fas fa-angle-left fa-2x backward"></i>
          </div>
          <div className="column-half">
            <div className="images">
              {pokedex.map(character => {
                return (
                  <img key={character.id} src={character.url} />
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
                    ? <i key={character.id} id={character.id} className="fas fa-circle circle-icon"></i>
                    : <i key={character.id} id={character.id} className="far fa-circle circle-icon"></i>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
