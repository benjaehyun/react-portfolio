import React from 'react'
import { Link } from 'react-router-dom';

export default function OngoingProjectsCard({ title, description, link }) {
  return (
    <div className='mx-4 my-16'>
      <Link to={link}>
        <div className='font-mono bg-gray-700 bg-opacity-80 text-white border-solid rounded-lg border-2 border-blue-500 p-6 md:p-8 w-full md:w-[80vw] max-w-6xl mx-auto hover:bg-opacity-90 transition duration-300 ease-in-out px-4'>
          <div className='grid grid-cols-1 gap-4'>
            <h2 className='text-3xl font-bold mb-3'>{title} <span className='text-blue-400 text-xl'>(Ongoing)</span></h2>
            <p className='text-lg'>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
