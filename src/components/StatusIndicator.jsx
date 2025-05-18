export default function StatusIndicator({ result }) {
    if (!result) return null;
    return (
      <div className={`p-3 rounded text-white ${result.success ? 'bg-green-600' : 'bg-red-600'}`}>
        {result.success ? '✅ Execution Successful' : '❌ Execution Failed'} (Attempts: {result.attempts})
      </div>
    );
  }
  