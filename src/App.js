import './App.css';
import Alert from './Alert';
import React from 'react'
import logo from './logo.svg';
import StarWarsPeople from './StarWarsPeople';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000)
  }
  render() {
    let label = "Segundos:";
    return (
      <div className="App">
        <StarWarsPeople></StarWarsPeople>
      </div>
    );
  }
}