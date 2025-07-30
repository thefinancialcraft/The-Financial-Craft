import React, { useRef } from 'react';

// Import all images from logos folder statically
import logo1 from '@/assets/logos/1.avif';
import logo2 from '@/assets/logos/2.webp';
import logo3 from '@/assets/logos/3.webp';
import logo4 from '@/assets/logos/4.avif';
import logo5 from '@/assets/logos/5.webp';
import logo7 from '@/assets/logos/7.webp';
import logo8 from '@/assets/logos/8.avif';
import logo9 from '@/assets/logos/9.webp';
import logo10 from '@/assets/logos/10.webp';
import logo11 from '@/assets/logos/11.webp';
import logo12 from '@/assets/logos/12.webp';
import logo13 from '@/assets/logos/13.webp';
import logo14 from '@/assets/logos/14.webp';
import logo15 from '@/assets/logos/15.webp';
import logo16 from '@/assets/logos/16.webp';
import logo17 from '@/assets/logos/17.webp';
import logo18 from '@/assets/logos/18.webp';
import logo19 from '@/assets/logos/19.webp';
import logo20 from '@/assets/logos/20.webp';
import logo21 from '@/assets/logos/21.png';
import logo22 from '@/assets/logos/22.webp';
import logo23 from '@/assets/logos/23.avif';



const logos = [
  logo1, logo2, logo3, logo4, logo5, logo7, logo8,
  logo9, logo10, logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20, logo21, logo22,
  logo23
];


const BrandLogoViewer = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden w-full relative bg-gradient-to-b from-white to-transparent">
      <div
        ref={sliderRef}
        className="flex w-max h-28 md:h-32 animate-scroll"
      >
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 mr-[20px] md:mr-[60px] w-[100px] md:w-[140px] h-full flex items-center justify-center p-2 md:p-4 hover:text-gray-900 transition-colors opacity-50 pt-5 hover:opacity-100"
            onMouseEnter={() => {
              if (sliderRef.current) {
                sliderRef.current.style.animationPlayState = 'paused';
              }
            }}
            onMouseLeave={() => {
              if (sliderRef.current) {
                sliderRef.current.style.animationPlayState = 'running';
              }
            }}
          >
            <img
              src={logo}
              alt={`Brand Logo ${idx + 1}`}
              className="h-full max-h-full object-contain grayscale hover:grayscale-0 "
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

         
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BrandLogoViewer;
