import React, { Component } from 'react';
import Ocean from './Ocean';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      wasm: {}
    };
  }
  
  componentDidMount() {
    this.loadWasm();
  }
  
  loadWasm = async () => {
    try {
      const wasm = await import('external');
      this.setState({wasm});
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };
  
  render() {
    const { wasm = {} } = this.state;
    
    return (
      <div className="App">
        <Ocean />
      </div>
    );
  }
}

export default App;
