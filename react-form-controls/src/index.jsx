import React from 'react';
import ReactDOM from 'react-dom/client';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state.value);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="signup-email">
            Email
            <input id="signup-email" name="email" type="email" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </>
    );
  }
}

const element = (
  <NewsletterForm />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
