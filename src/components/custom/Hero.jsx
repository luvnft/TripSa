import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center text-[#333333] mt-16'>
        <span className='text-[#D4AF37]'>Unleash Your Travel Vibes:</span> <br /> 
        Let AI Plan the Ultimate Trip, Just for You! 🌍✈️
      </h1>
      <p className='mt-4 text-xl text-[#2C3E50] text-center'>
        Your personal travel BFF—crafting custom trips based on what you love and your budget. 
        Follow us on TikTok 
        <a 
          href="https://tiktok.com/@travelw3w" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center mt-2"
        >
          @TravelW3W
        </a>. Let’s make it happen!
      </p>
      <Link to={'/create-trip'}>
        <Button>Explore for Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
