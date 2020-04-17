import React, { Component } from 'react';

const App = () => (<Counter />)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


// const User = (props) => {
//   return <div>Hi, I am {props.name} and {props.age} years old!</div>
// }

// User.defaultProps = {
//   age: 1
// }

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }
export default App;
