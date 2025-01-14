import React from 'react'

export default function BrewistaProjectPage({isMobileMenuOpen}) {
    const paddingTopClass = isMobileMenuOpen ? 'pt-60' : 'pt-24';
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 sm:px-8">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <header className="bg-gray-800/90 text-white text-center py-6 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Brewista</h1>
            <p className="mt-2 text-lg sm:text-xl">Full-Stack Web Application</p>
            <p className="text-sm sm:text-base">React | Node.js | Express | MongoDB | GSAP | React Spring | JWT | TailwindCSS</p>
          </header>
  
          <main className="p-6 sm:p-10">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Brewista is a sophisticated coffee brewing companion application that enables precise recipe creation, scaling, and sharing through an interactive brewing guide interface.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Achievement Highlights</h2>
  
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Technical Implementation</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Engineered a dynamic recipe scaling engine implementing complex algorithms for non-linear time calculations and precise measurements, maintaining accuracy to 0.1g for optimal brewing results.</li>
                <li>Developed an interactive brewing timeline using GSAP animations and React Spring, creating a seamless user experience with 60fps performance on mobile devices.</li>
                <li>Implemented efficient state management using React Context API and custom hooks, optimizing render cycles through strategic memoization and debounced calculations.</li>
                <li>Designed and implemented a MongoDB schema handling complex relationships between users, recipes, equipment, and coffee beans with optimized indexing for efficient queries.</li>
                <li>Created a mobile-first responsive interface using TailwindCSS with custom animations and interactive components, ensuring consistent performance across all devices.</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Feature Implementation</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Built a comprehensive recipe management system enabling users to create, fork, and customize brewing recipes with detailed step tracking and modification history.</li>
                <li>Developed a sophisticated social feature set allowing users to share, save, and discover recipes within the brewing community.</li>
                <li>Implemented an advanced search and filter system integrating multiple parameters including equipment compatibility, bean origins, and user ratings.</li>
                <li>Created a detailed coffee bean and equipment tracking system categorizing brewing gear specifications, roasters, origins, and processing methods.</li>
                <li>Built a personalized tasting notes system linking specific recipe-bean-equipment combinations for enhanced user experience.</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Authentication & Security</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Implemented secure user authentication using JWT with refresh token rotation and protected routes.</li>
                <li>Designed role-based access control system for recipe modification and sharing permissions.</li>
                <li>Created secure API endpoints with proper validation and sanitization of user inputs.</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Performance & Optimization</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Achieved optimal performance through efficient component architecture and strategic code splitting.</li>
                <li>Implemented intelligent caching strategies for recipe data and user preferences.</li>
                <li>Optimized database queries through proper indexing and population strategies.</li>
                <li>Created efficient state update patterns using optimistic UI updates and proper error handling.</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    )
}
