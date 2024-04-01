import ProjectsList from "../../components/ProjectsList/ProjectsList"
import OngoingProjectsCard from "../../components/OngoingProjectsCard/OngoingProjectsCard";


export default function ProjectsPage ({isMobileMenuOpen}) {

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
            images: ["cardio/cardio-1.png", "cardio/cardio-2.png"],
            linkSuffix: "cardio"
        },
        {
            title: "sweeper",
            description: "A browser game made using JavaScript, HTML, and CSS. Based on the popular game Minesweeper, sweeper was my first dive into development, while using a nostalgic pastime as reference. My first coding endeavor utilizes basic game logic, DOM manipulation for graphic rendering, and a recursive implementation for the cell reveal function.",
            images: [
                "sweeper/sweeper-mac-1.png", "sweeper/sweeper-mac-2.png", 
            // "sweeper/sweeper-3.png", "sweeper/sweeper-4.png"
        ],
            linkSuffix: "sweeper"
        },
    ];

    const ongoingProjects = [
        {
            title: "LunchBreak", 
            description: "LunchBreak is a comprehensive web application designed to simplify corporate dining experiences. By seamlessly connecting employees and companies with a wide array of restaurant options, the platform facilitates meal ordering, budget management, and menu customization. Developed with a keen focus on user experience and operational efficiency, LunchBreak utilizes a robust tech stack comprising Django and React, alongside Django REST Framework for dynamic API interactions and Simple JWT for secure authentication.", 
            link: "/projects/lunchbreak"
        }, 
        {
            title: "Brewista", 
            description: "Brewista is designed to be a comprehensive digital companion for coffee enthusiasts. Its primary goal is to enhance the coffee brewing experience by allowing users to track, create, and share their coffee brewing recipes. Whether users are experimenting with different brewing methods, trying out new coffee beans, or perfecting their pour-over technique, Brewista provides a platform to document every step of the journey. Users can journal their experiences, note variations in flavor, and share insights with a community of like-minded individuals.", 
            link: "/projects/brewista"
        }        
    ]
    
    const paddingTopClass = isMobileMenuOpen ? 'pt-[25vh]' : 'pt-[10vh]';

    return (
        <>
            <div 
            style={{
                backgroundImage: 'url("hobby/ny.jpg")', 
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className='h-[90vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center absolute w-full z-[-1] blur-md top-0 left-0'
            >
            </div>
            <div className={`flex flex-col md:flex-row justify-center items-center ${paddingTopClass} md:pt-[22vh] relative `}>
                    <div className="w-4/5 md:w-[30vw] mt-4 md:mt-0 md:ml-16 p-4">
                        <h1 className='text-white text-4xl md:text-4xl'>Thanks for taking an interest in some of my projects!</h1> <br />
                        <h3 className="text-white text-2xl md:text-xl ">Take a look at what I've been up to recently ⬇️</h3>
                    </div>
                </div>
            <h1 className="text-4xl text-center font-bold font-mono text-white mt-[40vh] md:mt-[35vh] lg:mt-[40vh] mb-8">Ongoing Projects</h1>
            {ongoingProjects.map((project, index) => (
                <OngoingProjectsCard 
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                />
                ))}
            <h1 className="text-4xl text-center font-bold font-mono text-white mt-[20vh] md:mt-[17.5vh] lg:mt-[20vh] ">Past Projects</h1>
            <ProjectsList projects={projects} />
        </>
    )    
}