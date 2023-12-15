import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    return (
        // <div className="h-64 w-full absolute bg-zinc-700">
        //     <div className="h-full flex ml-[16vw] mr-[25vw] items-center text-white ">
        //         <div className="w-full">
        //             <h1 className="w-full font-serif text-4xl">Ben Lee</h1> 
        //             <h2 className="font-sans italic"> Feel free to reach out or say hi! </h2>
        //             <div className="mt-4 flex justify-center space-x-12">
        //                 <a href="https://github.com/benjaehyun" target="_blank" rel="noopener noreferrer" className='text-4xl'> <FontAwesomeIcon icon={faGithub} /> </a> <br />
        //                 <a href="https://www.linkedin.com/in/benjaehyun/" target="_blank" rel="noopener noreferrer" className='text-4xl'><FontAwesomeIcon icon={faLinkedin} /></a> <br />
        //                 <a href = "mailto: benjaminjaelee@gmail.com" className="text-4xl"><FontAwesomeIcon icon={faEnvelope} /></a>
        //             </div>
        //         </div>
        //         <div className="w-full  flex justify-evenly items-center font-mono font-extralight text-lg">
        //             <Link to='/' className=""> Home </Link>
        //             <Link to='/projects' className=""> Projects </Link>
        //             <Link to='/about' className=""> About Me </Link>
        //             {/* <Link to='/contact' className=" "> Contact </Link> */}
        //         </div>
        //     </div>
        // </div>
        <div className="w-full bg-zinc-700 p-6">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:ml-[16vw] md:mr-[25vw] text-white">
                <div className="flex-1 mb-6 md:mb-0">
                    <h1 className="font-serif text-4xl">Ben Lee</h1>
                    <h2 className="font-sans italic text-lg mt-2">Feel free to reach out or say hi!</h2>
                    <div className="mt-4 flex justify-center">
                        <a href="https://github.com/benjaehyun" target="_blank" rel="noopener noreferrer" className='text-4xl mx-2 md:mx-4'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/benjaehyun/" target="_blank" rel="noopener noreferrer" className='text-4xl mx-2 md:mx-4'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="mailto:benjaminjaelee@gmail.com" className="text-4xl mx-2 md:mx-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center md:flex-row md:justify-end font-mono font-extralight text-lg">
                    <Link to='/' className="mb-4 md:mb-0 md:mr-4">Home</Link>
                    <Link to='/projects' className="mb-4 md:mb-0 md:mx-4">Projects</Link>
                    <Link to='/about' className="mb-4 md:mb-0 md:ml-4">About Me</Link>
                </div>
            </div>
    </div>
    )
}