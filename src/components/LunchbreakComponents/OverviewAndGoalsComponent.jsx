import React from 'react'

export default function OverviewAndGoalsComponent() {
    return (
        <section id="overview" className="py-6 px-4 lg:px-8 max-w-4xl mx-auto text-white">
            <h2 className="text-2xl font-bold mb-4">Overview and Key Features</h2>
            <p className="text-lg mb-4">
            LunchBreak is a comprehensive web application designed to transform corporate dining experiences. By seamlessly connecting employees and companies with a wide array of restaurant options, the platform facilitates efficient meal ordering, budget management, and menu customization. Developed with a keen focus on user experience and operational efficiency, LunchBreak utilizes a robust tech stack comprising Django and React, alongside Django REST Framework for dynamic API interactions and JsonWebTokens for secure authentication.
            </p>
            <ul className="list-disc pl-5 text-lg">
                <li>Dynamic Restaurant Menus: Company employees can explore and order from menus that are tailored to their dietary preferences and available on specified days, ensuring a diverse dining experience.</li>
                <li>Budget and Expense Tracking: Companies have the ability to set dining budgets for their employees, enabling effective cost control while still offering choice and flexibility.</li>
                <li>Advanced Menu Customization: Restaurants benefit from an intuitive interface to manage their menu offerings, including the ability to specify available days and customize items with add-ons, catering to a wide range of needs for diverse menus.</li>
                <li>Responsive and Accessible Design: Adopting a mobile-first design philosophy, guaranteeing a seamless and engaging user interface across all devices and platforms.</li>
            </ul>
        </section>
    );
}
