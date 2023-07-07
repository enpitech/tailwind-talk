import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";

const renderSlide = (slide) => {
  switch (slide) {
    case 1:
      return <Slide1 />;
    case 2:
      return <Slide2 />;
    case 3:
      return <Slide3 />;
    default:
      return <div>404</div>;
  }
};

function App() {
  const [slide, setSlide] = useState(1);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        if (slide === 3) return;
        setSlide(slide + 1);
      } else if (e.key === "ArrowLeft") {
        if (slide === 1) return;
        setSlide(slide - 1);
      }
    },
    [slide]
  );

  useEffect(() => {
    // bind arrow keys for navigation
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        className="absolute top-0 left-0 m-4 p-2 bg-gray-200 rounded shadow-md"
        onClick={() => setSlide(slide - 1)}
        disabled={slide === 1}
      >
        {"<"}
      </button>
      {renderSlide(slide)}
      <button
        className="absolute top-0 right-0 m-4 p-2 bg-gray-200 rounded shadow-md"
        onClick={() => setSlide(slide + 1)}
      >
        {">"}
      </button>
    </div>
  );
}

export default App;
