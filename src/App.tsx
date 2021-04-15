import React from 'react';
import { cancelAudioStream, toggleLiveInput } from './brains/AudioSourcer';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleLiveInput}>Enable User Audio</button>
        <button onClick={cancelAudioStream}>Stop User Audio</button>
      </header>
    </div>
  );
}

export default App;
