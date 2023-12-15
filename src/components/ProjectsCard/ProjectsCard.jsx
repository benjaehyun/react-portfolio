import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectsCard({ title, description, images, link }) {
    return (
        // <Link to={link}>
        //     <div className='text-white flex flex-col md:flex-row border-solid rounded-lg border-2 p-3 w-full md:w-[60vw] max-w-5xl mx-auto'>
        //         <div className='md:w-1/2 flex flex-col'>
        //             <h2 className='text-3xl mb-4'>{title}</h2>
        //             <div className='md:hidden'>
        //                 {images.map((image, index) => (
        //                     <img key={index} src={image} className='rounded-lg mb-2' alt={title} />
        //                 ))}
        //             </div>
        //         </div>
        //         <div className='md:w-1/2 flex flex-col justify-between'>
        //             <div className='hidden md:block'>
        //                 {images.map((image, index) => (
        //                     <img key={index} src={image} className='h-52 rounded-lg mb-2' alt={title} />
        //                 ))}
        //             </div>
        //             <p className='mt-4 md:mt-0 text-xl'>{description}</p>
        //         </div>
        //     </div>
        // </Link>

        <Link to={link}>
            <div className='bg-gray-800 bg-opacity-75 text-white border-solid rounded-lg border-2 p-6 md:p-8 w-full md:w-[80vw] max-w-6xl mx-auto hover:bg-opacity-90 transition duration-300 ease-in-out'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                    <div className='md:col-span-4'>
                        <h2 className='text-3xl font-bold mb-3'>{title}</h2>
                        <p className='text-lg'>{description}</p>
                    </div>
                    <div className='md:col-span-8'>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            {images.map((image, index) => (
                                <img key={index} src={image} className='rounded-lg w-full h-auto' alt={title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
