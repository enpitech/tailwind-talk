export default function MakeTingsCleaner() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-md">
      <h1 className="text-9xl font-bold mb-10">It can be cleaner 🧹</h1>
      <code className="w-full text-left text-blue-900 font-mono text-lg block whitespace-pre p-4 bg-blue-200 rounded-lg shadow-lg">
        {`@layer components {
  .btn {
    @apply
    py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg
    shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2
    focus:ring-opacity-75 cursor-pointer;
  }
}`}
      </code>
    </div>
  );
}
