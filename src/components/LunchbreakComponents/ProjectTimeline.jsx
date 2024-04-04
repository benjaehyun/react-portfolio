import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TimelineItem from './TimelineItem';

export default function ProjectTimeline() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    const timelineData = [
        { 
            title: "Project Kickoff", 
            description: "We gathered as a team to define our project scope and objectives.", 
            details: ["Defined initial project scope", "Set up initial project milestones", "Agreed on communication protocols"],
            side: 'left' 
        },
        { 
            title: "Tech Stack Decision", 
            description: "After consulting with mentors, we decided on React and Django.", 
            details: ["Evaluated different tech stacks", "Consulted with industry mentors", "Chose React for the frontend and Django for the backend"],
            side: 'right' 
        },
        // Add more timeline items 
    ];


    return (
        <section className="py-12 bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Project Timeline</h2>
                <div className="border-l-2 border-blue-500 pl-4">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
