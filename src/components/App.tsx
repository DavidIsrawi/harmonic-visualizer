import React from 'react';
import { cancelAudioStream, enableLiveInput } from '../brains/AudioSourcer';
import '../style/App.css';
import ToneBanner from './ToneBanner';

const App = () => {
  const [isEnable, setIsEnable] = React.useState(true);
  const [frequency, setFrequency] = React.useState(30);
  const [tone, setTone] = React.useState('A');

  const enableUserAudio = () => {
    enableLiveInput(updateToneAndFrequency);
    setIsEnable(false);
  }

  const updateToneAndFrequency = (newTone: string, newFrequency: number) => {
    setTone(newTone);
    setFrequency(newFrequency);
  }

  const stopUserAudio = () => {
    cancelAudioStream();
    setIsEnable(true);
  }

  return (
    <div className="App">
        <button onClick={enableUserAudio} hidden={!isEnable}>Enable User Audio</button>
        <button onClick={stopUserAudio} hidden={isEnable}>Stop User Audio</button>
        <ToneBanner tone={tone} frequency={frequency}/>
    </div>
  );
}

export default App;
