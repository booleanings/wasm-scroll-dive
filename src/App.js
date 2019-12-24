import React, { Component } from 'react';
import OceanBlock from './OceanBlock';
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
          <OceanBlock />
      </div>
    );
  }
}

export default App;
