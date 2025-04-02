import React from 'react';
import { Button } from '@mui/material';

function VoiceInput({ setCode }) {
  const handleVoice = () => {
    // Mock voice input (replace with real Web Speech API later)
    const mockCode = "console.log('Voice input detected');";
    setCode(mockCode);
    alert('Voice input mocked: ' + mockCode);
  };

  return <Button variant="outlined" onClick={handleVoice}>Voice Debug</Button>;
}

export default VoiceInput;