import React from 'react'

const technologiesUsed = [
    { name: "React", description: "Utilized for building the dynamic single-page application interface." },
    { name: "Django", description: "Used for the server-side logic, handling API requests, and serving static files." },
    { name: "PostgreSQL", description: "Chosen for its consistency with relational-based data, allowing for scalable growth." },
    { name: "DjangoRestFramework", description: "Employed to expose our API and seamlessly integrate our React Frontend and Django Backend " },
];

export default function TechnologiesComponent() {
    return (
        <section id="technologies" className="py-6 px-4 lg:px-8 max-w-4xl mx-auto text-white">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {technologiesUsed.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* Placeholder for tech logo, consider replacing '???' with an actual <img> tag or icon component */}
                        <div className="text-3xl">???</div>
                        <p className="mt-2">{tech.name}</p>
                    </div>
                ))}
            </div>
            <div className="technology-highlights">
                <h3 className="text-xl font-semibold mb-3">Technology Highlights</h3>
                {technologiesUsed.map((tech, index) => (
                    <div key={index} className="mb-4">
                        <h4 className="text-lg font-semibold">{tech.name}</h4>
                        <p>{tech.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
