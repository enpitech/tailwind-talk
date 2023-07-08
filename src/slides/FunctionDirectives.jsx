import { useState, useEffect } from "react";

export default function FunctionsDirectives() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const codeExample = `
  // In tailwind.config.js
  module.exports = {
    darkMode: 'class',
    //...
    variants: {
      extend: {
        backgroundColor: ['dark'],
        textColor: ['dark'],
      }
    }
  }


  // In JSX
  <div className="dark:bg-green-200">
    ...
  </div>
  `;

  const codeLines = codeExample.split("\n").map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <h1 className="text-9xl font-bold mb-10 text-blue-500 dark:text-yellow-500 p-3 rounded shadow-lg">
        Functions & Directives
      </h1>

      <div className="w-full p-6 mx-auto rounded-xl shadow-md space-y-2 sm:p-4  lg:items-center lg:space-x-4 lg:space-y-0 font-semibold">
        <div className="text-center lg:text-left text-4xl">
          <span className="text-blue-600 dark:text-yellow-500">theme()</span>{" "}
          and{" "}
          <span className="text-pink-600 dark:text-green-500">screen()</span> in
          Tailwind CSS help us access values in our theme and construct media
          queries. <br />
          <br />
          We can easily toggle between{" "}
          <span className="text-green-600 dark:text-pink-500">
            dark and light modes
          </span>
          .
        </div>
        {darkMode ? (
          <div className="text-left text-2xl bg-black text-white p-4 rounded h-[300px] overflow-scroll ">
            <code>{codeLines}</code>
          </div>
        ) : null}
      </div>

      <div className="invisible dark:visible ">
        Exercise: Hide the scrollbar using layers
      </div>
      <button
        onClick={toggleDarkMode}
        className="mt-4 px-4 py-2 bg-blue-500 dark:bg-yellow-500 text-white font-bold rounded hover:bg-blue-700 dark:hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-500 focus:ring-opacity-75"
      >
        Toggle Dark Mode
      </button>

      <pre className="text-lg bg-gray-800 text-white rounded-md p-6 m-2 ">
        Checkout more{" "}
        <a
          href="https://tailwindcss.com/docs/dark-mode"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline hover:text-blue-500"
        >
          here
        </a>
      </pre>
    </div>
  );
}
