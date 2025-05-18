export default function PromptBox({ prompt, setPrompt, onRun, loading }) {
    return (
      <div>
        <textarea
          className="w-full p-3 border rounded"
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a Python coding task..."
        />
        <button
          onClick={onRun}
          disabled={loading}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </div>
    );
  }
  