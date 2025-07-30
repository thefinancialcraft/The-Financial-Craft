import { useEffect, useRef } from "react";
import hrImg1 from "@/assets/hpy_faimly.png";
import hrImg2 from "@/assets/imgBnr2.jpg";
import plyFml1 from "@/assets/Playing Faimly.png"

  const FloatingElement = ({ children, delay = 0, className = "" }: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }) => (
    <div 
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

// Replace with your actual images or use sample ones
const images = [
  hrImg1,
  plyFml1,
  hrImg2,
 
  
];

// Add this global CSS (see below) in your CSS file
// .no-scrollbar::-webkit-scrollbar {
//   display: none;
// }
// .no-scrollbar {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }

const ImageSliderInsideFloatingElement = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let index = 0;

    const interval = setInterval(() => {
      if (!slider) return;
      const slideWidth = slider.clientWidth;
      index = (index + 1) % images.length;
      slider.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }, 3000);

    

    return () => clearInterval(interval);
  }, []);

  const fitModes = [
  "object-contain",     // First card
  "object-contain",,   // Second card
  // Fourth card
];

const bgColorModes = [
  "", // First card
  "#faf8f5", // Second card
  "#e4f5f5", // Third card (add more as needed)
];



  return (
    <FloatingElement>
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
      <div className="w-full h-64 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex w-full h-full overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 h-full flex items-center justify-center"
              style={{ backgroundColor: bgColorModes[idx] || "" }}
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className={`w-full h-full ${fitModes[idx] || "object-contain"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </FloatingElement>
  );
};

export default ImageSliderInsideFloatingElement;
