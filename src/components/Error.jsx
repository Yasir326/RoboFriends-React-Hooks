import React, { Component } from 'react';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Oopsie, something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default Error;
