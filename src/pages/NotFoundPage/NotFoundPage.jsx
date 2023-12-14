import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col text-white items-center justify-center h-screen ">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 text-blue-600 hover:underline">
        Go back to the homepage
        </Link>
  </div>
  )
}
