export default function CodeViewer({ code }) {
    if (!code) return null;
    return (
      <div className="p-3 bg-gray-100 border rounded">
        <h2 className="font-bold mb-2">Generated Code</h2>
        <pre className="overflow-auto whitespace-pre-wrap text-sm text-black">{code}</pre>
      </div>
    );
  }
  