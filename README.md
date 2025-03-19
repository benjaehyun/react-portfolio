# Ben Lee - Portfolio

### [View Live Portfolio](https://www.benjaelee.com/) 



## Welcome!

Hi! I'm Ben, a full-stack developer with a STEM background and entrepreneurial experience based in Seattle, WA. This repository contains the source code for my personal portfolio website where I showcase my journey from pre-med to software engineering and highlight the projects I've worked on.

My portfolio is designed to provide visitors with insights into my technical skills, project experience, and personal journey. Feel free to explore the code to learn more about how I've implemented various features and components.

## Portfolio Features

- **Responsive Design**: Mobile-first approach ensuring a seamless experience across all device sizes
- **Project Showcase**: Detailed pages for both completed and ongoing projects
- **Interactive Components**: Custom animations, interactive timeline, and other engaging elements
- **Personal Introduction**: About section that shares my background and journey into software development
- **Skills Overview**: Visual representation of technologies I work with
- **Contact Information**: Multiple ways to connect with me

## Technology Stack

- **React**: Front-end library for building the user interface
- **React Router**: For handling navigation between different sections
- **Tailwind CSS**: Utility-first CSS framework for styling
- **FontAwesome & Devicons**: For icons and technology logos
- **AOS (Animate on Scroll)**: For scroll-based animations

## Project Structure

```
portfolio/
├── public/               # Static files (images, icons)
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Footer/
│   │   ├── LunchbreakComponents/
│   │   ├── Navbar/
│   │   ├── OngoingProjectsCard/
│   │   ├── ProjectsCard/
│   │   └── ProjectsList/
│   ├── pages/            # Main page components
│   │   ├── AboutPage/
│   │   ├── App/
│   │   ├── BrewistaProjectPage/
│   │   ├── CardioProjectPage/
│   │   ├── ContactPage/
│   │   ├── HomePage/
│   │   ├── LowkeyProjectPage/
│   │   ├── LunchbreakProjectPage/
│   │   ├── NotFoundPage/
│   │   ├── ProjectsPage/
│   │   ├── SweeperProjectPage/
│   │   └── TheDraftProjectPage/
│   ├── utilities/        # Helper functions
│   ├── index.css         # Global styles
│   └── index.js          # Application entry point
├── package.json          # Dependencies and scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

## Implementation Details

### Component Architecture & Reusability

The portfolio implements a highly modular component architecture that allows for maximum reusability while maintaining consistency:

- **Project Display System**: A standardized yet flexible template system for project pages allows each project to maintain visual consistency while accommodating unique content needs:
  ```jsx
  // Base component structure in ProjectsCard.jsx
  <Link to={link}>
    <div className='bg-gray-800 bg-opacity-75 text-white border-solid rounded-lg border-2 p-6 md:p-8 w-full md:w-[80vw] max-w-6xl mx-auto hover:bg-opacity-90 transition duration-300 ease-in-out'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 items-center'>
        // Dynamic project data
      </div>
    </div>
  </Link>
  ```

- **Component Building Block Approach**: The portfolio uses smaller, specialized components that work like building blocks, working in tandem with reusable components display specialized sections:
  ```jsx
  // LunchbreakProjectPage.jsx 
  <div id="overview">
    <OverviewAndGoalsComponent />
  </div>
  <div id="technologies">
    <TechnologiesComponent />
  </div>
  <div id="background">
    <BackgroundComponent />
  </div>
  <div id="timeline">
    <ProjectTimeline />
  </div>
  ```

### Centralized Data Management

The portfolio uses a centralized data approach for information on things like projects:

- **Project Data Structure**: All project information is maintained in structured arrays that serve as a single source of truth:
  ```jsx
  const projects = [
    {
      title: "lowKEY",
      description: "A MERN-Stack dating app...",
      images: ["lowkey/lowkey-mac-1.png", "lowkey/lowkey-mac-2.png"],
      linkSuffix: "lowkey"
    },
    // More projects...
  ];
  ```

- **Content**: This approach allows for easy maintenance and updates - adding a new project simply requires adding a new object to the array without modifying component code.

### Dynamic Feature Components

- **Interactive Timeline System**: The project implements a sophisticated timeline component with expandable entries, animations, and responsive design:
  ```jsx
  // Custom timeline implementation with props-based configuration
  const timelineData = [
    { 
      title: "Project Kickoff", 
      description: "We gathered as a team to define our project scope and objectives.", 
      details: ["Defined initial project scope", "Set up initial project milestones", "Agreed on communication protocols"],
      side: 'left' 
    },
    // More timeline items...
  ];
  ```

- **Technology Showcase Component**: A flexible grid-based system for displaying technologies with icons, descriptions and layout adaptation:
  ```jsx
  <div className="flex flex-col items-center text-center">
    <ReactOriginal size='50' />
    <p className="font-semibold">React.js</p>
    <p>Used for building the dynamic user interface, ensuring a responsive and interactive experience.</p>
  </div>
  ```

### State Management & UI Synchronization

- **Shared Mobile Menu State**: The portfolio implements a  pattern to synchronize the mobile menu open state across multiple components:
  ```jsx
  // State is managed in App.jsx
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // And passed to both Navbar and content components
  <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
  <Routes>
    <Route path='/' element={<HomePage isMobileMenuOpen={isMobileMenuOpen} />} />
    // Other routes with state passed down
  </Routes>
  ```

- **Conditional Styling**: The portfolio uses this shared state to dynamically adjust layout spacing when the mobile menu is open:
  ```jsx
  const paddingTopClass = isMobileMenuOpen ? 'pt-[25vh]' : 'pt-[10vh]';
  ```

### Conditional Layout Rendering

The portfolio uses sophisticated conditional rendering patterns to create responsive interfaces:

```jsx
<div className="hidden md:flex w-full justify-evenly items-center font-mono font-extralight text-lg text-white">
  // Desktop navigation
</div>
{isMobileMenuOpen && (
  <div className="absolute top-full left-0 right-0 bg-[#282c34]/75 font-mono font-extralight text-lg z-10 flex flex-col items-center py-4">
    // Mobile navigation
  </div>
)}
```

This approach delivers an appropriate experience for each device type.




## Future Enhancements

- [ ] Add a blog section for sharing technical articles and thoughts
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive elements and animations
- [ ] Integrate a headless CMS for easier content management

## Connect With Me

- GitHub: [benjaehyun](https://github.com/benjaehyun)
- LinkedIn: [benjaehyun](https://www.linkedin.com/in/benjaehyun/)
- Email: [benjaminjaelee@gmail.com](mailto:benjaminjaelee@gmail.com)

---

© 2025 Ben Lee. All Rights Reserved.