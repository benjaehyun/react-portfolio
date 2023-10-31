import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        // <div className="h-40 grid grid-cols-12 ">
        //     <h1 className="col-start-3 col-end-5 my-auto">benjaelee</h1>
        //     <Link to='/' className="col-start-6 col-span-1 row-span-1 my-auto"> Home </Link>
        //     <Link to='/projects' className="col-start-7 col-span-1 row-span-1 my-auto"> Project </Link>
        //     <Link to='/about' className="col-start-8 col-span-1 row-span-1 my-auto"> About Me </Link>
        //     <Link to='/contact' className="col-start-9 col-span-1 row-span-1 my-auto"> Contact </Link>
        // </div>
        <div className="h-40 ">
            <div className="h-full flex ml-[16vw] mr-[25vw] items-center text-white">
                <h1 className="w-full font-serif text-4xl">Ben Lee</h1>
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