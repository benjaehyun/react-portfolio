import React from 'react'

export default function TableofContents() {
  return (
    <nav className=" p-4 bg-slate-600 lg:p-8">
        <ul className="space-y-2">
            <li><a href="#overview" className="text-white hover:text-slate-900 transition-colors">Overview and Key Features</a></li>
            <li><a href="#technologies" className="text-white hover:text-slate-900 transition-colors">Technologies Used</a></li>
            <li><a href="#background" className="text-white hover:text-slate-900 transition-colors">Background</a></li>
            <li><a href="#timeline" className="text-white hover:text-slate-900 transition-colors">Project Timeline</a></li>
        </ul>
    </nav>

  )
}
