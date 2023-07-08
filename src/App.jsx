import { useCallback, useEffect, useState } from "react";
import "./App.css";
import WelcomeSlide from "./slides/WelcomeSlide";
import EditorIntegrationSlide from "./slides/EditorIntegrationSlide";
import BenefitsSlide from "./slides/BenefitsSlide";
import MakeTingsCleaner from "./slides/MakeThingsCleaner";
import States from "./slides/StatesSlide";
import GroupAndPeer from "./slides/GroupAndPeer";
import ResponsiveDesign from "./slides/ResponsiveDesign";
import FunctionsDirectives from "./slides/FunctionDirectives";

const numberOfSlides = 8;

const renderSlide = (slide) => {
  switch (slide) {
    case 1:
      return <WelcomeSlide />;
    case 2:
      return <EditorIntegrationSlide />;
    case 3:
      return <BenefitsSlide />;
    case 4:
      return <MakeTingsCleaner />;
    case 5:
      return <States />;
    case 6:
      return <GroupAndPeer />;
    case 7:
      return <ResponsiveDesign />;
    case 8:
      return <FunctionsDirectives />;
    default:
      return <div>404</div>;
  }
};

function App() {
  const [slide, setSlide] = useState(1);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        if (slide === numberOfSlides) return;
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
    <div className="flex items-center justify-center h-screen ">
      <button
        className="btn from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white text-4xl  focus:ring-blue-400 "
        onClick={() => setSlide(slide - 1)}
        disabled={slide === 1}
      >
        &#x2190; {/* HTML entity for left arrow */}
      </button>
      <div className="min-w-[1200px]">{renderSlide(slide)}</div>
      <button
        className="btn from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white focus:ring-green-400 "
        onClick={() => setSlide(slide + 1)}
        disabled={slide === numberOfSlides}
      >
        &#x2192; {/* HTML entity for right arrow */}
      </button>
    </div>
  );
}

export default App;
