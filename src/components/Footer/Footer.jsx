import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    return (
        // <div className="h-40 grid grid-cols-12 ">
        //     <h1 className="col-start-3 col-end-5 my-auto">benjaelee</h1>
        //     <Link to='/' className="col-start-6 col-span-1 row-span-1 my-auto"> Home </Link>
        //     <Link to='/projects' className="col-start-7 col-span-1 row-span-1 my-auto"> Project </Link>
        //     <Link to='/about' className="col-start-8 col-span-1 row-span-1 my-auto"> About Me </Link>
        //     <Link to='/contact' className="col-start-9 col-span-1 row-span-1 my-auto"> Contact </Link>
        // </div>
        <div className="h-64 w-full absolute bg-zinc-700">
            <div className="h-full flex ml-[16vw] mr-[25vw] items-center text-white ">
                <div className="w-full">
                    <h1 className="w-full font-serif text-4xl">Ben Lee</h1> 
                    <h2 className="font-sans italic"> Feel free to reach out or say hi! </h2>
                    <div className="mt-4 flex justify-center space-x-12">
                        <a href="https://github.com/benjaehyun" target="_blank" className='text-4xl'> <FontAwesomeIcon icon={faGithub} /> </a> <br />
                        <a href="https://www.linkedin.com/in/benjaehyun/" target="_blank" className='text-4xl'><FontAwesomeIcon icon={faLinkedin} /></a> <br />
                        <a href = "mailto: benjaminjaelee@gmail.com" className="text-4xl"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                </div>
                <div className="w-full  flex justify-evenly items-center font-mono font-extralight text-lg">
                    <Link to='/' className=""> Home </Link>
                    <Link to='/projects' className=""> Projects </Link>
                    <Link to='/about' className=""> About Me </Link>
                    {/* <Link to='/contact' className=" "> Contact </Link> */}
                </div>
            </div>
        </div>
    )
}