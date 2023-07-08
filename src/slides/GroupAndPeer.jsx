import { useState } from "react";
import PeerExercise from "../assets/peer-exercise.png";

export default function GroupAndPeer() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white shadow-md">
      <h1 className="text-9xl font-bold  text-violet-700 p-3 mt-5 rounded ">
        Group and Peer
      </h1>

      {!showCode ? (
        <a
          href="#"
          className="group block mt-10 mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
          onClick={() => setShowCode(true)}
        >
          <div className="flex items-center space-x-3">
            <h3 className="text-slate-900 group-hover:text-white text-6xl font-semibold">
              Hi there!
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-2xl">
            Please notice, that while hovering me, the title text color is
            changing
          </p>
        </a>
      ) : (
        <code
          onDoubleClick={() => setShowCode(false)}
          className="w-full text-left text-white font-mono text-lg block whitespace-pre p-4  rounded-lg shadow-lg bg-black"
        >
          {`<a
  href="#"
  className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1
   ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
>
  <div className="flex items-center space-x-3">
    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
      Hi there!
    </h3>
  </div>
  <p className="text-slate-500 group-hover:text-white text-sm">
    Please notice, that while hovering me, the title text color is
    changing
  </p>
</a>`}
        </code>
      )}

      <h2 className="text-5xl mt-10 italic">Peer</h2>
      <img
        src={PeerExercise}
        alt=""
        width="750"
        className=" border mb-10 bg-slate-500"
      />

      <pre className="text-lg bg-gray-800 text-white rounded-md p-6 m-2 ">
        Checkout more{" "}
        <a
          href="https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state"
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
