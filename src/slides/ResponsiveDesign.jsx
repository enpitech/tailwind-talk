import { useState } from "react";

export default function ResponsiveDesign() {
  const [showExercises, setShowExercises] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-md">
      <h1 className="text-9xl font-bold mb-10 text-blue-500">Responsive</h1>

      <div className="w-full p-6 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4 lg:flex lg:items-center lg:space-x-4 lg:space-y-0 text-gray-600 font-semibold">
        <div className="text-center lg:text-left text-4xl">
          Tailwind CSS is <span className="text-blue-600 ">mobile-first</span>.
          We can <span className="text-pink-600">customize breakpoints</span> to
          suit our designs needs.
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-6 flex flex-col  xl:flex-row 2xl:flex-row">
        <div className="m-4 bg-blue-500 text-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-2">Card 1</h2>
          <p className="text-base">Resize the screen to see the magic! 🎩✨</p>
        </div>
        <div className="m-4 bg-red-500 text-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-2">Card 2</h2>
          <p className="text-base">Resize the screen to see the magic! 🎩✨</p>
        </div>
        <div className="m-4 bg-green-500 text-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-2">Card 3</h2>
          <p className="text-base">Resize the screen to see the magic! 🎩✨</p>
        </div>
        <div className="m-4 bg-yellow-500 text-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-2">Card 4</h2>
          <p className="text-base">Resize the screen to see the magic! 🎩✨</p>
        </div>
      </div>

      {!showExercises ? (
        <button
          onClick={() => setShowExercises(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Show Exercises
        </button>
      ) : (
        <Exercises onClick={() => setShowExercises(false)} />
      )}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Exercises = ({ onClick }) => {
  return (
    <div
      className="p-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white rounded-lg shadow-lg mt-8"
      onClick={onClick}
    >
      <h1 className="text-4xl font-bold mb-4">Exercises:</h1>
      <ul className="list-disc list-inside space-y-2 text-left">
        <li className="text-2xl">Make the slides responsive</li>
        <li className="text-2xl">Customize the default breakpoints.</li>
        <li className="text-2xl">Build a responsive navbar.</li>
      </ul>
    </div>
  );
};
