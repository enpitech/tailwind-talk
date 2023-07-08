import { useState } from "react";

export default function EndSlide() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-gray-700 shadow-md dark:bg-slate-800 dark:text-gray-100">
      <h1 className="text-9xl font-bold mb-10 text-purple-500">Wrap Up 🎉</h1>

      <div className="w-3/4 p-6 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4 lg:flex lg:items-center lg:space-x-4 lg:space-y-0 text-gray-600 font-semibold text-2xl dark:bg-slate-800 dark:text-gray-100">
        <div className="text-center lg:text-left">
          Tailwind provides powerful features out of the box such as:
          <ul className="list-disc list-inside mt-4 text-left">
            <li>Responsive Design</li>
            <li>Dark Mode</li>
            <li>Visibility Control</li>
            <li>Smooth Transitions</li>
            <li>Animations</li>
            <li>Interactions: hover, focus, etc.</li>
            <li>And much more!</li>
          </ul>
          However, be aware of potential pitfalls, like CSS class merging rules
          and ensuring your build configuration is set up correctly to purge
          unused styles and keep your stylesheets lean and fast.
        </div>
      </div>

      {!showConfetti ? (
        <button
          className="mt-10 px-8 py-3 font-semibold rounded bg-blue-600 text-white text-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 dark:bg-blue-400 dark:hover:bg-blue-500"
          onClick={() => setShowConfetti(true)}
        >
          Show Confetti
        </button>
      ) : (
        <div className="mt-10 animate-bounce text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          🎉🎉🎉
        </div>
      )}
    </div>
  );
}
