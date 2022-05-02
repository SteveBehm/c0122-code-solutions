import React from 'react';

export class ValidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      error: 'A password is required',
      icon: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    if (this.state.password.length < 7) {
      this.setState({
        error: 'Your password is too short'
      });
    } else {
      this.setState({
        error: '',
        icon: true
      });
    }
  }

  render() {
    return (
      <>
      <div className={this.state.pwdShort ? 'password-div' : 'password-div' }>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password' placeholder='Password..' value={this.state.password} onChange={this.handleChange}></input>
        <i className={this.state.icon ? 'fas ms-2 fa-check success-icon' : 'fas ms-2 fa-times error-icon'} />
      </div>
      <div className='para-div'>
        <p>{this.state.error}</p>
      </div>
      </>
    );
  }
}
