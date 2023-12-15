import ProjectsList from '../../components/ProjectsList/ProjectsList'

export default function HomePage ({isMobileMenuOpen}) {

    const projects = [
        {
            title: "lowKEY",
            description: "A MERN-Stack dating app. Full-Stack application where users can connect their Spotify account to view other users who have similar tastes in music. With the Spotify API, song metrics are used to sort users based on similarity. Once matched, users can chat privately and view what musical features they have in common.",
            images: ["lowkey/lowkey-mac-1.png", "lowkey/lowkey-mac-2.png"],
            linkSuffix: "lowkey"
        },
        {
            title: "The Draft",
            description: "A Django forum app. Full-Stack application created in collaboration with developers Nadew Demissew and Jon Do. The Draft is a discussion forum inspired by websites such as 'CollegeConfidential', with its focus shifted toward navigating the complex and challenging world of job hunting. This app also features a job application tracker which helps users track a particular application cycle.",
            images: ["thedraft/thedraft-mac-1.png", "thedraft/thedraft-mac-2.png"],
            linkSuffix: "thedraft"
        },
        {
            title: "cardIO",
            description: "A MEN-Stack flashcard app. My first Full-Stack application: CardIO. This project was developed as an educational resource to draw on high-yield learning from spaced repetition of flashcards. The idea for this app comes from my past experiences of using other flashcard apps such as Quizlet and Anki back as a pre-med student.",
            images: ["cardio/cardio-mac-1.png", "cardio/cardio-mac-2.png"],
            linkSuffix: "cardio"
        },
        {
            title: "sweeper",
            description: "A browser game made using JavaScript, HTML, and CSS. Based on the popular game Minesweeper, sweeper was my first dive into development, while using a nostalgic pastime as reference. My first coding endeavor utilizes basic game logic, DOM manipulation for graphic rendering, and a recursive implementation for the cell reveal function.",
            images: [
                // "sweeper/sweeper-1.png", "sweeper/sweeper-2.png", 
            // "sweeper/sweeper-3.png", "sweeper/sweeper-4.png"
        ],
            linkSuffix: "sweeper"
        },
    ];

    const paddingTopClass = isMobileMenuOpen ? 'pt-[27vh]' : 'pt-[10vh]';
    
    return (
        <>
            {/* <div 
            style={{
                backgroundImage: 'url("hobby/chicago-street.jpg")', 
                backgroundSize: "cover",
                backgroundPosition: "center bottom -5vh"
            }}
            className='top-0 h-[80vh] absolute w-full z-[-1] blur-sm'
            >
               
            </div>
            <div className="flex justify-center items-center mt-[10vh]">
                <img src="me/griffith-portrait.jpg" alt="" className="w-[20vw] z-1  border-solid rounded-full border-2" />
                <div className="w-[30vw] ml-16">
                <h1 className='text-white text-4xl'> Hi there 👋, I'm Ben! <br />
                    I'm a full-stack developer with a STEM background and entrepreneurial experience. <br />
                    I'm currently located in Seattle, WA. </h1>
                </div>
            </div> */}


        {/* <div 
            style={{ backgroundImage: 'url("hobby/chicago-street.jpg")' }}
            className='h-[90vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center absolute w-full z-[-1] blur-sm top-0 left-0'
        />
        <div className="flex flex-col md:flex-row justify-center items-center pt-[10vh] md:pt-[15vh] relative">
            <img 
                src="me/griffith-portrait.jpg" 
                alt="Ben Lee" 
                className="w-32 md:w-[20vw] rounded-full border-2 border-white" 
            />
            <div className="w-4/5 md:w-[30vw] mt-4 md:mt-0 md:ml-16 p-4">
                <h1 className='text-white text-2xl md:text-4xl lg:text-5xl'>Hi there 👋, I'm Ben!</h1> <br/>
                <p className="text-white text-lg md:text-xl lg:text-2xl ">
                    I'm a full-stack developer with a STEM background and entrepreneurial experience.<br />
                    I'm currently located in Seattle, WA.
                </p>
            </div>
        </div> */}


        <div 
            style={{ backgroundImage: 'url("hobby/chicago-street.jpg")' }}
            className='h-[90vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center absolute w-full z-[-1] blur-sm top-0 left-0'
        ></div>
        <div className={`flex flex-col md:flex-row justify-center items-center ${paddingTopClass} md:pt-[9vh] relative`}>
            <img 
                src="me/griffith-portrait.jpg" 
                alt="Ben Lee" 
                className="w-32 md:w-[20vw] rounded-full border-2 border-white" 
            />
            <div className="w-4/5 md:w-[30vw] mt-4 md:mt-0 md:ml-16 p-4">
                <h1 className='text-white text-2xl md:text-4xl lg:text-5xl'>Hi there 👋, I'm Ben!</h1> <br/>
                <p className="text-white text-lg md:text-xl lg:text-2xl ">
                    I'm a full-stack developer with a STEM background and entrepreneurial experience.<br />
                    I'm currently located in Seattle, WA.
                </p>
            </div>
        </div>
            



            {/* <div className='flex flex-col justify-evenly items-center mb-[15vh] space-y-12 font-mono mt-[30vh]'>
                <h1 className="text-4xl text-white"> HomePage</h1>
                <Link to='/projects/lowkey' > 
                    <div className='text-white flex border-solid rounded-lg border-2 p-3 w-[40vw]'>
                        <div className='flex flex-col'>
                            <img src="lowkey/lowkey-mac-1.png" className='h-52 rounded-lg' alt="" />
                            <img src="lowkey/lowkey-mac-2.png" className='h-52 rounded-lg' alt="" />
                        </div>
                        <div className='w-[60%] m-auto'>
                            <h2 className='text-3xl text-white '>lowKEY</h2>
                            <h4 className='text-xl text-white'>A MERN-Stack dating app </h4>
                            <p className='text-white mt-5'>
                                Full-Stack application where users can connect their Spotify account to view other users who have similar tastes in music.
                                With the Spotify API, song metrics are used to sort users based on similarity.
                                Once matched, users can chat privately and view what musical features they have in common.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/projects/thedraft' >
                    <div className='text-white flex border-solid rounded-lg border-2 p-3 w-[40vw]'>
                        <div className='flex flex-col'>
                            <img src="thedraft/thedraft-mac-1.png" className='h-52 rounded-lg' alt="" />
                            <img src="thedraft/thedraft-mac-2.png" className='h-52 rounded-lg' alt="" />
                        </div>
                        <div className='w-[60%] m-auto'>
                            <h2 className='text-3xl text-white '>The Draft</h2>
                            <h4 className='text-xl text-white'>A Django forum app. </h4>
                            <p className='text-white mt-5'>
                                Full-Stack application created in collaboration with developers Nadew Demissew and Jon Do. The Draft is a discussion forum inspired by 
                                websites such as "CollegeConfidential" with its focus shifted toward navigating the complex and challenging world of job hunting. This app 
                                also features a job application tracker which helps users track a particular application cycle.  
                                
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/projects/cardio' > 
                    <div className='text-white flex border-solid rounded-lg border-2 p-3 w-[40vw]'>
                        <div className='flex flex-col'>
                            <img src="thedraft/thedraft-mac-1.png" className='h-52 rounded-lg' alt="" />
                            <img src="thedraft/thedraft-mac-2.png" className='h-52 rounded-lg' alt="" />
                        </div>
                        <div className='w-[60%] m-auto'>
                            <h2 className='text-3xl text-white '>cardIO</h2>
                            <h4 className='text-xl text-white'>A MEN-Stack flashcard app. </h4>
                            <p className='text-white mt-5'>
                                My first Full-Stack application: CardIO. This project was developed as an educational resource 
                                to draw on high-yield learning from spaced repetition of flashcards. The idea for this app comes from my past experiences of using other flashcard apps 
                                such as Quizlet and Anki back as a pre-med student.  
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/projects/sweeper' > 
                    <div className='text-white flex border-solid rounded-lg border-2 p-3 w-[40vw]'>
                        <div className='grid grid-cols-2 grid-rows-2'>
                            <img src="sweeper/sweeper-1.png" className='h-52 ' alt="" />
                            <img src="sweeper/sweeper-3.png" className='h-52 ' alt="" />
                            <img src="sweeper/sweeper-2.png" className='h-52 mt-0.5' alt="" />
                            <img src="sweeper/sweeper-4.png" className='h-52 mt-0.5' alt="" />
                        </div>
                        <div className='w-[60%] m-auto'>
                            <h2 className='text-3xl text-white '>sweeper</h2>
                            <h4 className='text-xl text-white'>A browser game made using JavaScript, HTML, and CSS.</h4>
                            <p className='text-white mt-5'>
                                Based on the popular game Minesweeper, sweeper was my first dive into 
                                development, while using a nostalgic pastime as reference. My first coding endeavor utilizes basic game logic, DOM manipulation for graphic rendering, and a recursive 
                                implementation for the cell reveal function (which was a particularly tricky problem for me to solve).  
                            </p>
                        </div>
                    </div>
                </Link>
            </div> */}

            <ProjectsList projects={projects} />
        </>
    )  
}