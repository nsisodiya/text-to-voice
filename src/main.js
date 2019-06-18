import React from 'react';
import { render } from 'react-dom';

window.speechSynthesis.getVoices();

function speakMessage(text) {
  if ('speechSynthesis' in window) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();

    var selectedVoice = voices.filter(function(v) {
      return v.voiceURI === 'Google हिन्दी';
    })[0];
    msg.lang = 'hi-IN';
    msg.voice = selectedVoice;
    msg.rate = 0.8;
    msg.pitch = 0;
    msg.text = text;
    speechSynthesis.speak(msg);
  } else {
    throw new Error('SpeechSynthesisUtterance Not Supported');
  }
}

const App = function App() {
  return (
    <div>
      <button
        onClick={(e) => {
          speakMessage('आपका ट्रक बुक किया जा रहा है');
        }}>
        Speak - आपका ट्रक बुक किया जा रहा है
      </button>
      <p />
      <button
        onClick={(e) => {
          speakMessage('क्या आप खुश हैं');
        }}>
        Speak - क्या आप खुश हैं
      </button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
