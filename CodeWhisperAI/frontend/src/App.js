import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import ReviewPanel from './components/ReviewPanel';
import VoiceInput from './components/VoiceInput';
import { Button } from '@mui/material';
import { reviewCode, debugCode } from './api';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [review, setReview] = useState(null);
  const [debug, setDebug] = useState(null);

  const handleReview = async () => {
    const result = await reviewCode(code, language);
    setReview(result);
    setDebug(null);
  };

  const handleDebug = async () => {
    const result = await debugCode(code, language);
    setDebug(result);
    setReview(null);
  };

  return (
    <div className="App">
      <h1>CodeWhisper AI</h1>
      <CodeEditor code={code} setCode={setCode} language={language} setLanguage={setLanguage} />
      <div className="controls">
        <Button variant="contained" onClick={handleReview}>Review Code</Button>
        <Button variant="contained" onClick={handleDebug}>Debug Code</Button>
        <VoiceInput setCode={setCode} />
      </div>
      <ReviewPanel review={review} debug={debug} />
    </div>
  );
}

export default App;