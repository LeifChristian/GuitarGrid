import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';
import { useState, useEffect } from 'react';
import { looseIndexOf } from '@vue/shared';

// let major = false;
// let minor = false;
// let harm = true;

let midiSounds;

const row0 = ["E_","A_","D_","G_","B_","E_"]
const row1 = ["F_","A#","D#","G#","C_","F_"]
const row2 = ["F#","B_","E_","A_","C#","F#"]
const row3 = ["G_","C_","F_","A#","D_","G_"]
const row4 = ["G#","C#","F#","B_","D#","G#"]
const row5 = ["A_","D_","G_","C_","E_","A_"]
const row6 = ["A#","D#","G#","C#","F_","A#"]
const row7 = ["B_","E_","A_","D_","F#","B_"]
const row8 = ["C_","F_","A#","D#","G_","C_"]
const row9 = ["C#","F#","B_","E_", "G#","C#"]
const row10 = ["D_","G_","C_","F_","A_","D_"]
const row11 = ["D#","G#","C#","F#","A#","D#"]
const row12 = ["E_","A_","D_","G_","B_","E_"]
const row13 = ["F_","A#","D#","G#","C_","F_"]
const row14 = ["F#","C_","E_","A_","C#","F#"]
const row15 = ["G_","C#","F_","A#","D_","G_"]
const row16 = ["G#","C#","F#","B_","D#","G#"]
const row17 = ["A_","D_","G_","C_","E_","A_"]
const row18 = ["A#","D#","G#","C#","F_","A#"]
const row19 = ["B_","E_","A_","D_","F#","B_"]
const row20 = ["C_","F_","A#","D#","G_","C_"]
const row21 = ["C#","F#","B_","E_", "G#","C#"]
const row22 = ["D_","G_","C_","F_","A_","D_"]

//base references the lowest pitch (E string) on a fret, i.e. fret 0 lowest pitch would be 40, fret 1, 41, etc.
//this gives a simple equation to compute the pitches in each row (base+5=A string, base+10= D string)

const base=40;
const base1=41
const base2=42
const base3=43
const base4=44
const base5=45
const base6=46
const base7=47
const base8=48
const base9=49
const base10=50
const base11=51
const base12=52
const base13=53
const base14=54
const base15=55
const base16=56
const base17=57
const base18=58
const base19=59
const base20=60
const base21=61
const base22=62



const press = (index, row) => {

  console.log(row, index)

  switch(row){

      case 0:
      switch(index){
        case 0:

  midiSounds.playChordNow(2,[base], 2.5);
          break;
        case 1:
  midiSounds.playChordNow(2, [base+5], 2.5);
          break;
        case 2:
  midiSounds.playChordNow(2, [base+10], 2.5);
          break;
        case 3:
  midiSounds.playChordNow(2, [base+15], 2.5);
          break;
        case 4:
  midiSounds.playChordNow(2, [base+19], 2.5); 
          break;
        case 5: 
  midiSounds.playChordNow(2, [base+24], 2.5);
          break;
      }
      break;
      case 1:
      switch(index){
        case 0:
  
  midiSounds.playChordNow(2, [base1], 2.5);
          break;
        case 1:
  midiSounds.playChordNow(2, [base1+5], 2.5);
          break;
        case 2:
  midiSounds.playChordNow(2, [base1+10], 2.5);
          break;
        case 3:
  midiSounds.playChordNow(2, [base1+15], 2.5);
          break;
        case 4:
  midiSounds.playChordNow(2, [base1+19], 2.5); 
          break;
        case 5: 
  midiSounds.playChordNow(2, [base1+24], 2.5);
          break;
      }
      break;
      case 2:

      switch(index){
        case 0:
  
  midiSounds.playChordNow(2, [base2], 2.5);
          break;
        case 1:
  midiSounds.playChordNow(2, [base2+5], 2.5);
          break;
        case 2:
  midiSounds.playChordNow(2, [base2+10], 2.5);
          break;
        case 3:
  midiSounds.playChordNow(2, [base2+15], 2.5);
          break;
        case 4:
  midiSounds.playChordNow(2, [base2+19], 2.5); 
          break;
        case 5: 
  midiSounds.playChordNow(2, [base2+24], 2.5);
          break;
      }

        break;
      case 3:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base3], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base3+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base3+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base3+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base3+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base3+24], 2.5);
        break;
    }
        break;
      case 4:

        switch(index){
      case 0:

midiSounds.playChordNow(2, [base4], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base4+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base4+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base4+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base4+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base4+24], 2.5);
        break;
    }
      break;
      case 5:

        switch(index){
      case 0:

midiSounds.playChordNow(2, [base5], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base5+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base5+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base5+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base5+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base5+24], 2.5);
        break;
    }
      break;
      case 6:

        switch(index){
      case 0:

midiSounds.playChordNow(2, [base6], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base6+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base6+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base6+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base6+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base6+24], 2.5);
        break;
    }
      break;
      case 7:

        switch(index){
      case 0:

midiSounds.playChordNow(2, [base7], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base7+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base7+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base7+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base7+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base7+24], 2.5);
        break;
    }
      break;
      case 8:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base8], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base8+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base8+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base8+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base8+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base8+24], 2.5);
        break;
    }
      break;
      case 9:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base9], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base9+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base9+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base9+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base9+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base9+24], 2.5);
        break;
    }
      break;
      case 10:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base10], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base10+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base10+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base10+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base10+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base10+24], 2.5);
        break;
    }
      break;
      case 11:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base11], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base11+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base11+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base11+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base11+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base11+24], 2.5);
        break;
    }
      break;
      case 12:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base12], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base12+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base12+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base12+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base12+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base12+24], 2.5);
        break;
    }
      break;
      case 13:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base13], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base13+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base13+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base13+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base13+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base13+24], 2.5);
        break;
    }
      break;
      case 14:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base14], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base14+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base14+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base14+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base14+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base14+24], 2.5);
        break;
    }
      break;
      case 15:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base15], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base15+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base15+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base15+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base15+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base15+24], 2.5);
        break;
    }
      break;
      case 16:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base16], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base16+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base16+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base16+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base16+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base16+24], 2.5);
        break;
    }
      break;
      case 17:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base17], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base17+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base17+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base17+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base17+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base17+24], 2.5);
        break;
    }
      break;
      case 18:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base18], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base18+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base18+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base18+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base18+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base18+24], 2.5);
        break;
    }
      break;
      case 19:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base19], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base19+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base19+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base19+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base19+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base19+24], 2.5);
        break;
    }
      break;
      case 20:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base20], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base20+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base20+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base20+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base20+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base20+24], 2.5);
        break;
    }
      break;
      case 21:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base21], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base21+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base21+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base21+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base21+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base21+24], 2.5);
        break;
    }
      break;
      case 22:
        switch(index){
      case 0:

midiSounds.playChordNow(2, [base22], 2.5);
        break;
      case 1:
midiSounds.playChordNow(2, [base22+5], 2.5);
        break;
      case 2:
midiSounds.playChordNow(2, [base22+10], 2.5);
        break;
      case 3:
midiSounds.playChordNow(2, [base22+15], 2.5);
        break;
      case 4:
midiSounds.playChordNow(2, [base22+19], 2.5); 
        break;
      case 5: 
midiSounds.playChordNow(2, [base22+24], 2.5);
        break;
    }
      break;

  }

}

function App() {

const [majorScale, setMajorScale] = useState(["E_", "F#", "G#","A_", "B_", "C#", "D#"])
const [minorScale, setMinorScale] = useState(["E_", "F_", "G_","A_", "B_", "C_", "D_", "E_"])
const [harmMinorScale, setHarmMinorScale]= useState(["E_", "F_", "G_","A_", "B_", "C_", "D#", "E_"])
  
  const [position, setPosition] = useState(1);
  const[theName, setTheName] = useState("")
  const [major, setMajor] = useState(true);
  const [minor, setMinor] = useState(false);
  const [harmMinor, setHarmMinor] = useState(false);
 
   const [scaleNumber, setScaleNumber] = useState(0);

   //starting scale numbers on E as 0, F = 1, etc until D#=11

  useEffect(() => {
    console.log('refresh')

    if(major){
      switch(scaleNumber){
    
        case 0: // E default
          setMajorScale(["E_", "F#", "G#","A_", "B_", "C#", "D#"])
          break;
          case 1: setMajorScale( ["F_", "G_", "A_", "A#", "C_", "D_", "E_"])
          break;
          case 2: setMajorScale(["F#","G#","A#","B_","C#","D#","F_"])
          break;
          case 3: setMajorScale(["G_","A_","B_","C_","D_","E_","F#"])
          break;
          case 4: setMajorScale(["G#","A#","C_","C#","D#","F_","G_"])
          break;
          case 5: setMajorScale(["A_","B_","C#","D_","E_","F#","G#"])
          break;
          case 6: setMajorScale(["A#","C_","C#","D#","F_","G_","A_"])
          break;
          case 7: setMajorScale(["B_","C#","D#","E_","F#","G#","A#"])
          break;
          case 8: setMajorScale(["C_","D_","E_","F_","G_","A_","B_"])
          break;
          case 9: setMajorScale(["C#","D#","F_","F#","G#","A#","C_"])
          break;
          case 10: setMajorScale(["D_","E_","F#","G_","A_","B_","C#"])
          break;
          case 11: setMajorScale(["D#","F_","G_","G#","A#","C_","D_"])

          break;
      }
    
    }

    if(minor){
      switch(scaleNumber){
    
        case 0: // E default
          setMinorScale(["E_", "F#", "G_","A_", "B_", "C_", "D_"])
          break;
          case 1: setMinorScale( ["F_", "G_", "G#", "A#", "C#", "D#", "E_"])
          break;
          case 2: setMinorScale(["F#","G#","A_","B_","C#","D_","E_"])
          break;
          case 3: setMinorScale(["G_","A_","A#","C_","D_","D#","F_"])
          break;
          case 4: setMinorScale(["G#","A#","B_","C#","D#","E_","F#"])
          break;
          case 5: setMinorScale(["A_","B_","C_","D_","E_","F_","G_"])
          break;
          case 6: setMinorScale(["A#","C_","C#","D#","F_","F#","G#"])
          break;
          case 7: setMinorScale(["B_","C#","D_","E_","F#","G_","A_"])
          break;
          case 8: setMinorScale(["C_","D_","E_","F_","G_","A_","B_"])
          break;
          case 9: setMinorScale(["C#","D#","F_","F#","G#","A#","C_"])
          break;
          case 10: setMinorScale(["D_","E_","F#","G_","A_","B_","C#"])
          break;
          case 11: setMinorScale(["D#","F_","G_","G#","A#","C_","D_"])

          break;
      }
    
    }

    if(harmMinor){
      switch(scaleNumber){
    
        case 0: // E default
          setHarmMinorScale(["E_", "F#", "G_","A_", "B_", "C_", "D#"])
          break;
          case 1: setHarmMinorScale( ["F_", "G_", "G#", "A#", "C#", "D#", "E#"])
          break;
          case 2: setHarmMinorScale(["F#","G#","A_","B_","C#","D_","F_"])
          break;
          case 3: setHarmMinorScale(["G_","A_","A#","C_","D_","D#","F#"])
          break;
          case 4: setHarmMinorScale(["G#","A#","B_","C#","D#","E_","G_"])
          break;
          case 5: setHarmMinorScale(["A_","B_","C_","D_","E_","F_","G#"])
          break;
          case 6: setHarmMinorScale(["A#","C_","C#","D#","F_","F#","A_"])
          break;
          case 7: setHarmMinorScale(["B_","C#","D_","E_","F#","G_","A#"])
          break;
          case 8: setHarmMinorScale(["C_","D_","E_","F_","G_","A_","C_"])
          break;
          case 9: setHarmMinorScale(["C#","D#","F_","F#","G#","A#","C#"])
          break;
          case 10: setHarmMinorScale(["D_","E_","F#","G_","A_","B_","D_"])
          break;
          case 11: setHarmMinorScale(["D#","F_","G_","G#","A#","C_","D#"])
          break;
      }
    
    }

  }, [position, scaleNumber, major, minor, harmMinor])

  const renderRow = (names, row) => {

    // let setScaleDegrees = majorScale.map((item, index)=>{return index + 1})

    // console.log('degrees', setScaleDegrees)
  
  
console.log(names, 'neem', row, 'row')
    if(major){
       let theNewVar = `emajrow${row}` 
      console.log(theNewVar, 'nbewvar')

  
    return (
  
      <div style={{display: 'flex'}}>
  
        { row<10 ?
        
        <div style={{marginRight: "11px", textAlign: "left"}}>  {row}</div>:
        <div style={{marginRight: "2px", textAlign: "left"}}>{row}</div>
        }
   { names.map((theName, index) => 
  
   theName == majorScale[0] || theName == majorScale[1] || theName == majorScale[2] || theName == majorScale[3]
   || theName == majorScale[4]|| theName == majorScale[5]|| theName == majorScale[6] ?
    
  <button style={{marginLeft: "10%", width: '30px', }} onClick={()=>{press(index, row, theName)}}><div>
      {theName}{majorScale.indexOf(theName)+1}</div></button> : <button style={{marginLeft: "10%", width: '80px', opacity: 0,}} 
              onClick={()=>{console.log(index,row, theName)}}><div>
      __</div></button>
    
    )} </div> )}
  
   else if(minor){

  
      return (
    
        <div style={{display: 'flex'}}>
    
          { row<10 ?
          
          <div style={{marginRight: "11px", textAlign: "left"}}>  {row}</div>:
          <div style={{marginRight: "2px", textAlign: "left"}}>{row}</div>
          }
     { names.map((theName, index) => 
    
     theName == minorScale[0] || theName == minorScale[1] || theName == minorScale[2] || theName == minorScale[3]
     || theName == minorScale[4]|| theName == minorScale[5]|| theName == minorScale[6] ?
      
    <button style={{marginLeft: "10%", width: '30px', }} onClick={()=>{press(index, row, theName)}}><div>
     {theName}{minorScale.indexOf(theName)+1}</div></button> : <button style={{marginLeft: "10%", width: '80px', opacity: 0,}} 
                onClick={()=>{console.log(index,row, theName)}}><div>
        __</div></button>

      
      )} </div> )}
  
   else if(harmMinor){

    let theNewVar = `eharmminrow${row}` 
  
        return (
      
          <div style={{display: 'flex'}}>
      
            { row<10 ?
            
            <div style={{marginRight: "11px", textAlign: "left"}}>  {row}</div>:
            <div style={{marginRight: "2px", textAlign: "left"}}>{row}</div>
            }
       { names.map((theName, index) => 
      
       theName == harmMinorScale[0] || theName == harmMinorScale[1] || theName == harmMinorScale[2] || theName == harmMinorScale[3]
       || theName == harmMinorScale[4]|| theName == harmMinorScale[5]|| theName == harmMinorScale[6] ?
        
      <button style={{marginLeft: "10%", width: '30px', }} onClick={()=>{press(index, row, theName)}}><div>
          {theName}{harmMinorScale.indexOf(theName)+1}</div></button> : <button style={{marginLeft: "10%", width: '80px', opacity: 0,}} 
                  onClick={()=>{console.log(index,row, theName)}}><div>
          __</div></button>
        
        )} </div> )}
  
        else {return(<div>no</div>)}
    
  }

  return (

    <>
<div style = {{display: "none"}}>
    <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[7]} />	</div>

    <div className="App" style={{width: "3%", marginTop: '100px', marginBottom: '20px', margin:'auto', marginLeft: "42%", alignItems:'center', justifyContent: 'center', }}>

      <div style={{width: "100%"}}>

     {position === 1 ? [renderRow(row0, 0),renderRow(row1, 1), renderRow(row2, 2), renderRow(row3, 3), renderRow(row4, 4), renderRow(row5, 5)]: null}
 
      {position === 2 ? [renderRow(row6,6),
      renderRow(row7,7),
      renderRow(row8,8),
      renderRow(row9,9),
      renderRow(row10,10)]:null}


      {position === 3 ? [renderRow(row11,11),
      renderRow(row12,12),
      renderRow(row13,13),
      renderRow(row14,14),
      renderRow(row15,15)]:null}

      { position === 4 ? [renderRow(row16,16),
      renderRow(row17,17),
      renderRow(row18,18),
      renderRow(row19,19),
      renderRow(row20,20)]: null}

      {/* {renderRow(row21,21)}
      {renderRow(row22,22)} */}

     {/* {[ renderRow(row0, 0),
      renderRow(row1, 1), 
      renderRow(row2, 2), 
      renderRow(row3, 3), 
      renderRow(row4, 4), 
      renderRow(row5, 5),
      renderRow(row6, 6),
      renderRow(row7,7),
      renderRow(row8,8),
      renderRow(row9,9),
      renderRow(row10,10),
      renderRow(row12,12),
      renderRow(row13,13),
      renderRow(row14,14),
      renderRow(row15,15),
      renderRow(row17,17),
      renderRow(row18,18),
      renderRow(row19,19),
      renderRow(row20,20)   ]} */}

</div>
    </div>


<div style={{margin:'auto', alignItems:'center', texjustifyContent: 'center', width: "10%"}}>
   <div style={{width: "100%", marginLeft: '1.8em', marginTop: "10%"}}> position: {position}</div>
    <button style={{marginTop: '10%', textAlign: 'center', position: 'relative', justifyContent: 'center', borderRadius: '1rem',
      alignItems: 'center', width: "100%"}} onClick={()=>{if(position>1)setPosition(prevState=>prevState-1)}}>position down</button>
     <button style={{justifyContent: 'center', borderRadius: '1rem',
      alignItems: 'center', width: "100%"}} onClick={()=>{if(position<4)setPosition(prevState=>prevState+1)}}>position up</button>

<button onClick={()=>{if(scaleNumber>-1)setScaleNumber(scaleNumber+1)}}>up {scaleNumber}</button>
<button onClick={()=>{if(scaleNumber<11)setScaleNumber(scaleNumber-1)}}>down{scaleNumber}</button>

{major? <div>major</div> : minor ? <div>minor</div> : harmMinor ? <div>harmonic</div> : null   }

<button onClick={() =>{setMajor(true); setMinor(false); setHarmMinor(false)}}>Major{major}</button>
<button onClick={() =>{setMajor(false); setMinor(true); setHarmMinor(false)}}>Minor{major}</button>
<button onClick={() => {setHarmMinor(true); setMinor(false); setMajor(false)}}>Harmonic{harmMinor}</button>

</div>
    </>
  );
}

export default App;
