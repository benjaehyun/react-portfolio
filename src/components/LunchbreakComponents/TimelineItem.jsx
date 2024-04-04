import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function TimelineItem({ title, description, details, side }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col my-8 items-center ${side === 'right' ? 'text-right' : 'text-left'}`} data-aos="fade-up">
            {/* Wrap the entire item for unified hover effects */}
            <div 
                className="group cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`flex items-center ${side === 'right' ? 'flex-row-reverse space-x-reverse' : ''} space-x-4`}>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:bg-blue-600">
                        {isOpen ? <AiOutlineMinus className="text-white" /> : <AiOutlinePlus className="text-white" />}
                    </div>
                    <h3 className="text-xl font-semibold inline">{title}</h3>
                </div>
                <p className="mt-2">{description}</p>
            </div>
            {isOpen && (
                <div className="mt-4 py-4 px-8 bg-gray-700 rounded-lg">
                    {details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
