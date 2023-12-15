import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 py-8">
            <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                    Let's Connect!
                </h1>
                <p className="text-md md:text-lg text-gray-300 mb-6">
                    Interested in discussing new opportunities, projects, or just a chat about tech? Reach out to me!
                </p>
                <div className="flex justify-center space-x-4 md:space-x-6">
                    <a href="https://github.com/benjaehyun" target="_blank" rel="noopener noreferrer" className='text-2xl md:text-3xl text-gray-400 hover:text-white'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/benjaehyun/" target="_blank" rel="noopener noreferrer" className='text-2xl md:text-3xl text-gray-400 hover:text-white'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:benjaminjaelee@gmail.com" className="text-2xl md:text-3xl text-gray-400 hover:text-white">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </div>
    )
}
