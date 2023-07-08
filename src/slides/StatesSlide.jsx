import { useState } from "react";

export default function States() {
  const [showExercises, setShowExercises] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-md">
      <h1 className="text-9xl font-bold mb-10 text-blue-500 selection:bg-yellow-200 p-3 rounded shadow-lg before:content-['⭐'] after:content-['⭐']">
        States
      </h1>

      <div className="w-full p-6 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4 lg:flex lg:items-center lg:space-x-4 lg:space-y-0 text-gray-600 font-semibold">
        <div className=" text-center lg:text-left text-4xl">
          <span className="text-blue-600 ">We can style states</span> like
          hover, focus, active, and disabled.
          <br />
          <br />
          We can also style
          <span className="text-pink-600"> pseudo elements</span> like
          placeholder and selection.
        </div>
      </div>

      {!showExercises ? (
        <Form onSubmit={() => setShowExercises(true)} />
      ) : (
        <Exercises onClick={() => setShowExercises(false)} />
      )}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Form({ onSubmit }) {
  return (
    <form className="text-lg w-4/5 mx-auto">
      <label className="block">
        <span className="block text-base font-semibold text-gray-700">
          Username
        </span>
        <input
          type="text"
          value="tbone"
          disabled
          className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-base shadow-sm placeholder-gray-400
          focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
          disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
        />
      </label>
      <label className="block mt-6">
        <span className="block text-base font-semibold text-gray-700">
          Email
        </span>
        <input
          type="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          required
          placeholder="Enter your email"
          className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-base shadow-sm placeholder-gray-400
          focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
          invalid:border-red-500 invalid:text-red-600 invalid:ring-red-500
        "
        />
      </label>

      <label className="block mt-6">
        <span className="block text-base font-semibold text-gray-700">
          Password
        </span>
        <input
          type="password"
          className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-base shadow-sm placeholder-gray-400
          focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
        "
        />
      </label>
      <button
        type="button"
        onClick={() => onSubmit()}
        className="mt-6 px-6 py-3 w-full bg-blue-500 text-white font-bold text-base rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Submit
      </button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
const Exercises = ({ onClick }) => {
  return (
    <div
      className="p-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white rounded-lg shadow-lg"
      onClick={onClick}
    >
      <h1 className="text-4xl font-bold mb-4">Exercises:</h1>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-2xl">Add placeholder style</li>
        <li className="text-2xl">Exercise add valid style</li>
        <li className="text-2xl">Change before/after</li>
      </ul>
    </div>
  );
};
