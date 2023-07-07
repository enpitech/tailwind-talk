import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'

const numberOfSlides = 3

const renderSlide = (slide) => {
  switch (slide) {
    case 1:
      return <Slide1 />
    case 2:
      return <Slide2 />
    case 3:
      return <Slide3 />
    default:
      return <div>404</div>
  }
}

function App() {
  const [slide, setSlide] = useState(1)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') {
        if (slide === numberOfSlides) return
        setSlide(slide + 1)
      } else if (e.key === 'ArrowLeft') {
        if (slide === 1) return
        setSlide(slide - 1)
      }
    },
    [slide],
  )

  useEffect(() => {
    // bind arrow keys for navigation
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="flex items-center justify-center h-screen ">
      <button
        className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white text-4xl font-bold rounded-full shadow-lg transform hover:scale-110 motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
        onClick={() => setSlide(slide - 1)}
        disabled={slide === 1}
      >
        &#x2190; {/* HTML entity for left arrow */}
      </button>
      {renderSlide(slide)}
      <button
        className="p-6 bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white text-4xl font-bold rounded-full shadow-lg transform hover:scale-110 motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
        onClick={() => setSlide(slide + 1)}
        disabled={slide === numberOfSlides}
      >
        &#x2192; {/* HTML entity for right arrow */}
      </button>
    </div>
  )
}

export default App
