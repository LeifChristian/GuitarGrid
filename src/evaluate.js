import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class Test extends Component {

    

  playTestInstrument() {
		this.midiSounds.playChordNow(2, [60], 2.5);
	}
  render() {

    const { index, row, name } = this.props

    console.log(index, row, name)
    return (
      <div className="App">
 
        <p className="App-intro">Press Play to play instrument sound.</p>					
		<p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
		
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
		<hr/>

      </div>
    );
  }
}

export default Test;