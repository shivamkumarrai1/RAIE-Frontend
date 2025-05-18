import React, { useState } from 'react';
import PromptBox from './components/PromptBox';
import CodeViewer from './components/CodeViewer';
import OutputLog from './components/OutputLog';
import StatusIndicator from './components/StatusIndicator';
import './index.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setResult(null);

    const response = await fetch("/generate-and-run", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold"> Recursive AI Executor</h1>
      <PromptBox prompt={prompt} setPrompt={setPrompt} onRun={handleRun} loading={loading} />
      <StatusIndicator result={result} />
      <CodeViewer code={result?.code || ''} />
      <OutputLog log={result?.output || ''} />
    </div>
  );
}

export default App;

