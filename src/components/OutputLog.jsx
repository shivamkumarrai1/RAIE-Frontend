export default function OutputLog({ log }) {
    if (!log) return null;
    return (
      <div className="p-3 bg-black text-green-300 border rounded">
        <h2 className="font-bold text-white mb-2">Execution Output</h2>
        <pre className="overflow-auto whitespace-pre-wrap text-sm">{log}</pre>
      </div>
    );
  }
  