// import { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from 'react-icons/fa';

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         function handleResize() {
//           if (window.innerWidth >= 768) { // Tailwind's default breakpoint for 'md'
//             setIsMobileMenuOpen(false);
//           }
//         }
    
//         window.addEventListener('resize', handleResize);
    
//         // Clean up the event listener on component unmount
//         return () => window.removeEventListener('resize', handleResize);
//       }, []);

//     return (
//         <div className="relative h-40">
//         <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:ml-[16vw] lg:mr-[25vw]">
//             <Link to='/' >
//                 <h1 className="font-serif text-4xl text-white whitespace-nowrap">Ben Lee</h1>
//             </Link>
//           <div className="flex items-center">
//             <div className="md:hidden">
//               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                 {isMobileMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
//               </button>
//             </div>
//             {/* Add margin to each link for spacing */}
//             <div className="hidden md:flex w-full justify-evenly items-center font-mono font-extralight text-lg text-white">
//               <Link to='/' className="mr-4">Home</Link>
//               <Link to='/projects' className="mx-4">Projects</Link>
//               <Link to='/about' className="ml-4">About Me</Link>
//             </div>
//           </div>
//           {isMobileMenuOpen && (
//             <div className="absolute top-full left-0 right-0 bg-[#282c34]/75 font-mono font-extralight text-lg z-10 flex flex-col items-center py-4">
//               <Link to='/' className="text-white py-2">Home</Link>
//               <Link to='/projects' className="text-white py-2">Projects</Link>
//               <Link to='/about' className="text-white py-2">About Me</Link>
//             </div>
//           )}
//         </div>
//       </div>

//     )
// }


import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth >= 768) { // Tailwind's default breakpoint for 'md'
            setIsMobileMenuOpen(false);
          }
        }
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    // Function to close the mobile menu (Newly added)
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className="relative h-40 ">
            <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:ml-[16vw] lg:mr-[25vw]">
                <Link to='/' onClick={closeMobileMenu}> {/* Added onClick event to close menu */}
                    <h1 className="font-serif text-4xl text-white whitespace-nowrap">Ben Lee</h1>
                </Link>
                <div className="flex items-center">
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
                        </button>
                    </div>
                    <div className="hidden md:flex w-full justify-evenly items-center font-mono font-extralight text-lg text-white">
                        <Link to='/' className="mr-4">Home</Link>
                        <Link to='/projects' className="mx-4">Projects</Link>
                        <Link to='/about' className="mx-4">About Me</Link>
                        <Link to='/contact' className="ml-4">Contact</Link>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#282c34]/75 font-mono font-extralight text-lg z-10 flex flex-col items-center py-4">
                        <Link to='/' className="text-white py-2" onClick={closeMobileMenu}>Home</Link> {/* Added onClick event */}
                        <Link to='/projects' className="text-white py-2" onClick={closeMobileMenu}>Projects</Link> {/* Added onClick event */}
                        <Link to='/about' className="text-white py-2" onClick={closeMobileMenu}>About Me</Link> {/* Added onClick event */}
                        <Link to='/contact' className="text-white py-2" onClick={closeMobileMenu}>Contact</Link> {/* Added onClick event */}
                    </div>
                )}
            </div>
        </div>
    );
}
