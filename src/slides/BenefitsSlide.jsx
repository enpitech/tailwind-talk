import { useState } from "react";
import ItsUgly from "../assets/itsugly.png";

export default function BenefitsSlide() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-md ">
      <h1 className="text-9xl font-bold text-green-500 text-left mt-2 mb-10 flex">
        Yes, its ugly! But..
      </h1>
      <h2 className="text-6xl font-bold">Important Benefits of Tailwind CSS</h2>
      <img src={ItsUgly} alt="Its Ugly" className="mt-10 h-44" />
      {!showDetails ? (
        <ul
          onClick={() => setShowDetails(true)}
          className="space-y-4 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <li className="text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg">
            You aren’t wasting energy inventing class names
          </li>
          <li className="text-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-6 rounded-lg shadow-lg">
            Your CSS stops growing
          </li>
          <li className="text-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6 rounded-lg shadow-lg">
            Making changes feels safer
          </li>
        </ul>
      ) : (
        <div
          onClick={() => setShowDetails(false)}
          className="p-10 bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-md shadow-lg hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <h1 className="text-3xl font-bold mb-4">Here, we have used:</h1>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">text-2xl:</span> for large text size.
            </li>
            <li>
              <span className="font-bold">bg-gradient-to-r:</span> to specify a
              gradient background that goes from left to right.
            </li>
            <li>
              <span className="font-bold">from-, via-, to- classes:</span> to
              specify the gradient colors.
            </li>
            <li>
              <span className="font-bold">p-6:</span> to give each item some
              space around the text.
            </li>
            <li>
              <span className="font-bold">rounded-lg:</span> for larger rounded
              corners.
            </li>
            <li>
              <span className="font-bold">shadow-lg:</span> to add a large box
              shadow for a lifted effect.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
