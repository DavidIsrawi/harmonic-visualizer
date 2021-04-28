import React from 'react';
import '../style/App.css';
import HarmonicSeriesDefinition from './HarmonicSeriesDefinition';
import HarmonicSeriesNotes from './HarmonicSeriesNotes';
import NoteBanner from './NoteBanner';

const App = () => {
  const [frequency, setFrequency] = React.useState(0);
  const [note, setNote] = React.useState('');

  const UpdateNoteAndFrequency = (newNote: string, newFrequency: number) => {
    setNote(newNote);
    setFrequency(newFrequency);
  }


  return (
    <div className="App">
        <HarmonicSeriesDefinition/>
        <NoteBanner updateNoteAndFrequency={UpdateNoteAndFrequency} note={note} frequency={frequency}/>
        <br></br>
        { frequency !== 0 ? <HarmonicSeriesNotes frequency={frequency}/> : null }
    </div>
  );
}

export default App;
