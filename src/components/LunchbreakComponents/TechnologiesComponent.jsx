import React from 'react';
import { ReactOriginal, DjangoPlain, PostgresqlPlainWordmark, DjangorestLineWordmark, TailwindcssOriginal } from 'devicons-react';


export default function TechnologiesComponent() {
    return (
        <section id="technologies" className="py-6 px-4 lg:px-8 max-w-4xl mx-auto text-white">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col items-center text-center">
                    <ReactOriginal size='50' />
                    <p className="font-semibold">React.js</p>
                    <p>Used for building the dynamic user interface, ensuring a responsive and interactive experience.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <DjangoPlain size='50'/>
                    <p className="font-semibold">Django</p>
                    <p>Handled server-side logic, including API endpoints, and served as the framework for the admin panel and user management.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <PostgresqlPlainWordmark  size='50'/>
                    <p className="font-semibold">PostgreSQL</p>
                    <p>Chosen for its robustness and reliability in storing user data, company details, orders, and restaurant information efficiently.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <DjangorestLineWordmark  size='50'/>
                    <p className="font-semibold">DjangoRESTFramework</p>
                    <p>Empowered the backend to efficiently create RESTful APIs. Key for authentication mechanisms, data serialization, and request handling, providing a seamless bridge between the frontend and database.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <TailwindcssOriginal  size='50'/>
                    <p className="font-semibold">Tailwind CSS</p>
                    <p>Utilized to style the frontend, allowing for rapid development of custom, responsive designs without leaving the HTML.</p>
                </div>
            </div>
        </section>
    );
}
