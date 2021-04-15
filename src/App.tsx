import React from 'react';
import { cancelAudioStream, enableLiveInput } from './brains/AudioSourcer';
import './style/App.css';

const App = () => {
  const [isEnable, setIsEnable] = React.useState(true);

  const enableUserAudio = () => {
    enableLiveInput();
    setIsEnable(false);
  }

  const stopUserAudio = () => {
    cancelAudioStream();
    setIsEnable(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={enableUserAudio} hidden={!isEnable}>Enable User Audio</button>
        <button onClick={stopUserAudio} hidden={isEnable}>Stop User Audio</button>
      </header>
    </div>
  );
}

export default App;
