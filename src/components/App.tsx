import React from 'react';
import { cancelAudioStream, enableLiveInput } from '../brains/AudioSourcer';
import '../style/App.css';
import HarmonicSeriesDefinition from './HarmonicSeriesDefinition';
import HarmonicSeriesNotes from './HarmonicSeriesNotes';
import NoteBanner from './NoteBanner';

const App = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [frequency, setFrequency] = React.useState(0);
  const [note, setNote] = React.useState('');

  const enableUserAudio = () => {
    enableLiveInput(updateNoteAndFrequency);
    setIsEnabled(true);
  }

  const updateNoteAndFrequency = (newNote: string, newFrequency: number) => {
    setNote(newNote);
    setFrequency(newFrequency);
  }

  const stopUserAudio = () => {
    cancelAudioStream();
    setIsEnabled(false);
  }

  return (
    <div className="App">
        <HarmonicSeriesDefinition/>
        <button onClick={enableUserAudio} hidden={isEnabled}>Find your Harmonic Series</button>
        <button onClick={stopUserAudio} hidden={!isEnabled}>Pause Audio</button>
        <NoteBanner note={note} frequency={frequency}/>
        <br></br>
        <HarmonicSeriesNotes frequency={frequency}/>
    </div>
  );
}

export default App;
