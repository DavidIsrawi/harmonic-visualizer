import React from 'react';
import { cancelAudioStream, enableLiveInput } from '../brains/AudioSourcer';
import '../style/App.css';
import ToneBanner from './ToneBanner';

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
    updateNoteAndFrequency('', 0);
    setIsEnabled(false);
  }

  return (
    <div className="App">
        <button onClick={enableUserAudio} hidden={isEnabled}>Enable User Audio</button>
        <button onClick={stopUserAudio} hidden={!isEnabled}>Stop User Audio</button>
        <ToneBanner note={note} frequency={frequency}/>
    </div>
  );
}

export default App;
