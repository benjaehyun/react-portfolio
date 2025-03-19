export const projects = [
  {
    id: "brewista",
    title: "Brewista",
    shortDescription: "A sophisticated coffee brewing companion application enabling precise recipe creation and sharing through an interactive interface.",
    description: "Brewista is a sophisticated coffee brewing companion application that enables precise recipe creation, scaling, and sharing through an interactive brewing guide interface. The platform combines rigorous recipe scaling calculations with real-time brewing guidance, creating an engaging experience for coffee enthusiasts while maintaining precise measurements for optimal brewing results.",
    previewImages: [],
    media: {
      mobile: {
        screenshots: [
          {
            src: "/brewista/brewista-1.png",
            description: "Homepage"
          },
          {
            src: "/brewista/brewista-2.png",
            description: "Community recipe index"
          },
          {
            src: "/brewista/brewista-3.png",
            description: "Recipe creation page"
          },
          {
            src: "/brewista/brewista-4.png",
            description: "Profile page"
          },
          {
            src: "/brewista/brewista-5.png",
            description: "Profile gear section"
          },
          {
            src: "/brewista/brewista-6.png",
            description: "Profile gear section with filters"
          },
          {
            src: "/brewista/brewista-7.png",
            description: "Recipe overview"
          },
          {
            src: "/brewista/brewista-8.png",
            description: "Calculation page with inputs displaying scaling factor and adjustments on timeline"
          },
          {
            src: "/brewista/brewista-9.png",
            description: "First page in brewing Process: Preparation Overview"
          },
          {
            src: "/brewista/brewista-10.png",
            description: "Timer settings on brew page"
          },
          {
            src: "/brewista/brewista-11.png",
            description: "Post-Brew option to edit the original or scaled version of recipe for this brew"
          }
        ],
        animations: [
          {
            src: "/brewista/brewista-1.gif",
            description: "Step management example in Recipe Creation Flow"
          },
          {
            src: "/brewista/brewista-2.gif",
            description: "Calculating new desired recipe specs and reviewing the adjustments on timeline"
          },
          {
            src: "/brewista/brewista-3.gif",
            description: "Example Navigation between steps"
          }
        ]
      }
    },
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose ODM",
      "Context API",
      "GSAP",
      "React Spring",
      "JWT",
      "Screen Wake Lock Web API", 
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/benjaehyun/brewista", 
    liveUrl: "https://brewista-9c2f976eb426.herokuapp.com/", 
    status: "completed",
    featured: true,
    keyFeatures: [
      "Dynamic Recipe Scaling Engine",
      "Interactive Brewing Timeline",
      "Social Recipe Sharing",
      "Comprehensive Bean Database"
    ],
    detailedInfo: {
      sections: [
        {
          id: "technical-implementation",
          title: "Technical Implementation",
          content: "Engineered a dynamic recipe scaling engine implementing complex algorithms for non-linear time calculations and precise measurements, maintaining accuracy to 0.1g for optimal brewing results. The application features an interactive brewing timeline using GSAP animations and React Spring, creating a seamless user experience with 60fps performance on mobile devices. State management was optimized using React Context API and custom hooks, with strategic memoization and debounced calculations for optimal performance."
        },
        {
          id: "features",
          title: "Feature Implementation",
          content: "Built a comprehensive recipe management system enabling users to create, fork, and customize brewing recipes with detailed step tracking and modification history. The platform includes sophisticated social features allowing users to share, save, and discover recipes within the brewing community. An advanced search and filter system integrates multiple parameters including equipment compatibility, bean origins, and user ratings."
        }
      ],
      challenges: [
        "Implementing precise recipe scaling algorithms",
        "Optimizing animation performance across devices",
        "Managing complex state updates for real-time brewing guidance",
        "Designing efficient data structures for recipe relationships"
      ],
      findings: [
        "Effectiveness of custom hooks for complex state management",
        "Impact of optimized database indexing on query performance",
        "Benefits of mobile-first development approach",
        "Importance of precise measurement calculations in brewing applications"
      ]
    }
  },
  {
    id: "symphony",
    title: "Symphony",
    shortDescription: "A rebuild of lowKEY, elevating the music-based social platform with advanced state management and refined user experiences.",
    description: "Symphony is a complete redesign of one of my previous passion projects, lowKEY, improving the music-based social platform with robust state management and polished user experiences. This rebuild leverages modern architectural patterns to create a more robust and scalable application. While maintaining the core concept of connecting users through musical compatibility, Symphony introduces a refined matching algorithm based on Rentfrow's MUSIC model, complemented by an new interface that seamlessly adapts between mobile and desktop experiences.",
    previewImages: [],
    media: {
      mobile: {
        screenshots: [
          {
            src: "/symphony/symphony-1.png",
            description: "Discovery page displaying a profile card (containing name, age, bio, and music analysis source) and action buttons"
          },
          {
            src: "/symphony/symphony-2.png",
            description: "Profile music details first tab: Overview with similarity scores, weighted composite score, and charted values for MUSIC dimensions"
          },
          {
            src: "/symphony/symphony-3.png",
            description: "Frequency of most common genres in user's selected playlist (Note: percentages aren't a fraction of the total genres. Rather it's the percentage of songs that these genres appeared in, since spotify provides several genres for each song/artist)"
          },
          {
            src: "/symphony/symphony-4.png",
            description: "Values for spotify audio features and descriptions of each"
          },
          {
            src: "/symphony/symphony-5.png",
            description: ""
          },
          {
            src: "/symphony/symphony-6.png",
            description: ""
          }
        ],
        animations: [
          {
            src: "/symphony/symphony-1.gif",
            description: "Overview of profile discovery page displaying music profile and ui for music analysis"
          },
          {
            src: "/symphony/symphony-2.gif",
            description: "Like gesture animation, match notification sheet, and CTA navigation"
          },
          {
            src: "/symphony/symphony-3.gif",
            description: "Messages page and messsaging UI example"
          },
          {
            src: "/symphony/symphony-4.gif",
            description: "Matches overview page and unmatching"
          }
        ]
      }
    },
    technologies: [
      "React",
      "Redux Toolkit",
      "Redux Persist",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "Redis",
      "AWS S3",
      "Spotify API",
      "JWT",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "PWA"
    ],
    githubUrl: "https://github.com/benjaehyun/symphony", 
    liveUrl: null,
    status: "completed",
    featured: true,
    keyFeatures: [
        "Refined MUSIC Model Algorithm",
        "Responsive Desktop/Mobile UI",
        "Advanced State Management",
        "Real-time Interaction System"
    ],
    detailedInfo: {
        sections: [
          {
            id: "evolution",
            title: "Project Evolution",
            content: "Symphony emerges as a mature evolution of lowKEY, reimplementing core functionalities with sophisticated architectural patterns and enhanced user experiences. The project showcases significant growth in technical implementation, particularly in state management with Redux Toolkit, and a complete UI overhaul optimized for both mobile and desktop platforms. The matching algorithm has been refined to incorporate Rentfrow's MUSIC model, providing more nuanced and accurate compatibility scores compared to the original euclidean distance calculations."
          },
          {
            id: "technical-improvements",
            title: "Technical Improvements",
            content: "The rebuild introduces Redux Toolkit for robust state management, replacing the previous Context API implementation. This change enables more predictable state updates, optimistic UI rendering, and efficient cross-device synchronization. The mobile experience has been completely redesigned using a mobile-first approach, while the desktop interface takes advantage of larger screens with a sophisticated split-view layout. Redis caching has been implemented to optimize Spotify API calls and improve response times significantly."
          },
          {
            id: "user-experience",
            title: "Enhanced User Experience",
            content: "Symphony features a completely redesigned user interface with smooth animations powered by Framer Motion, creating a more engaging and intuitive experience across all devices. The matching system now provides more detailed insights into musical compatibility, with interactive visualizations of shared musical attributes and preferences. Real-time features have been enhanced with an improved Socket.IO implementation, enabling instantaneous updates and seamless communication."
          }
        ],
        challenges: [
          "Implementing complex state management patterns with Redux Toolkit",
          "Designing a responsive UI that excels on both mobile and desktop",
          "Refining the matching algorithm with the MUSIC model",
          "Optimizing real-time features for scale"
        ],
        findings: [
          "Impact of sophisticated state management on application reliability",
          "Effectiveness of mobile-first design in creating consistent experiences",
          "Benefits of advanced algorithmic models in user matching",
          "Importance of caching strategies in API-dependent applications"
        ]
    }
  },
  {
    id: "pomodoro",
    title: "Pomodoro",
    shortDescription: "A sophisticated time management PWA with offline capabilities and cross-device synchronization.",
    description: "A full-stack Progressive Web Application implementing advanced time management with offline capabilities and cross-device synchronization. The application features precise timing, comprehensive offline support, and sophisticated state management for an optimal user experience across all devices.",
    previewImages: [],
    media: {
      mobile: {
        screenshots: [
          {
            src: "/pomodoro/pomodoro-1.png",
            description: "Landing page with default pomodoro configuration"
          },
          {
            src: "/pomodoro/pomodoro-2.png",
            description: "Expanded list of cycles"
          },
          {
            src: "/pomodoro/pomodoro-3.png",
            description: "Modal to add/edit cycles"
          },
          {
            src: "/pomodoro/pomodoro-4.png",
            description: "Navigation menu"
          },
          {
            src: "/pomodoro/pomodoro-5.png",
            description: "Configuration management menu with toggles to show/hide configurations in quick access menu and links to edit/delete custom configurations"
          }
        ],
        animations: [
          {
            src: "/pomodoro/pomodoro-1.gif",
            description: "Timer page, showing quick access menu and cycle management flow, with automatic custom configuration handling when making changes"
          },
          {
            src: "/pomodoro/pomodoro-2.gif",
            description: "Quick access management and saving a new configuration"
          }
        ]
      }
    },
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Material-UI",
      "Service Workers",
      "Workbox",
      "IndexedDB",
      "JWT",
      "react-beautiful-dnd",
      "Axios",
    ],
    githubUrl: "https://github.com/benjaehyun/pomodoro-timer", 
    liveUrl: "https://pomodoro-timer-nine-delta.vercel.app/", 
    status: "completed",
    featured: true,
    keyFeatures: [
      "High-precision Timer System",
      "Cross-device Synchronization",
      "Offline-first Architecture",
      "Advanced Configuration Management"
    ],
    detailedInfo: {
      sections: [
        {
          id: "technical-implementation",
          title: "Technical Implementation",
          content: "Architected sophisticated offline-first system achieving 95% Lighthouse performance score and sub-100ms service worker initialization. Engineered high-precision timer system maintaining accuracy within 16ms state updates, even during background tab operation. Implemented complex state management using Redux Toolkit with optimized selectors, reducing unnecessary re-renders by 40%."
        },
        {
          id: "performance",
          title: "Performance & Optimization",
          content: "Developed cross-device synchronization system with conflict resolution, enabling seamless user experience across platforms. Created drag-and-drop configuration system using react-beautiful-dnd with real-time updates and automatic state synchronization. Implemented intelligent caching strategy using Service Workers and IndexedDB, reducing server load by 60%."
        }
      ],
      challenges: [
        "Maintaining timer accuracy across device states",
        "Implementing robust offline functionality",
        "Managing cross-device state synchronization",
        "Optimizing performance for background operation"
      ],
      findings: [
        "Effectiveness of Service Workers for offline capability",
        "Impact of optimized Redux selectors on performance",
        "Importance of precise timing mechanisms"
      ]
    }
  },
  {
    id: "gively",
    title: "Gively",
    shortDescription: "A cross-platform social donation application fostering community-centered charitable giving.",
    description: "Gively is a cross-platform social donation application that creates a community-centered platform for charitable giving, leveraging real-time updates and advanced social networking features. The application combines sophisticated notification systems with intelligent friend recommendations to create meaningful connections within charitable communities.",
    previewImages: [], // Placeholder for images
    technologies: [
      "React Native",
      "Expo Managed Workflow",
      "Firebase Authentication",
      "Firebase Cloud Functions v2",
      "Firebase Cloud Messaging",
      "Firebase Storage",
      "Firestore",
      "React Context API",
      "MasterCard Donate API",
      "Charity Navigator API",
      "Google Places API",
      "Expo Push Notifications",
      "Tailwind CSS",
      "AsyncStorage",
      "Fuse.js"
    ],
    githubUrl: '', 
    // githubUrl: "https://github.com/GivelyFoundation/Gively", 
    liveUrl: null, 
    status: "ongoing",
    featured: false,
    keyFeatures: [
      "Real-time Notification System",
      "Advanced Friend Recommendations",
      "High-performance Feed System",
      "Sophisticated Data Caching"
    ],
    detailedInfo: {
      sections: [
        {
          id: "technical-implementation",
          title: "Technical Implementation",
          content: "Engineered a sophisticated real-time notification system using Firebase Cloud Functions v2, reducing server costs by 40% through intelligent notification grouping and batch processing. Developed an advanced friend recommendation engine with multi-factor scoring, improving user connection rates by 40% through analysis of shared interests and network proximity."
        },
        {
          id: "architecture",
          title: "Architecture & Optimization",
          content: "Implemented a high-performance dual-feed system with optimized FlatList configurations and sophisticated caching, reducing initial load times by 60%. Designed and implemented a scalable Firestore data structure handling 100k+ users while maintaining optimal query performance. Created a custom caching system reducing database reads by 40% through efficient data fetching patterns and intelligent invalidation strategies."
        }
      ],
      challenges: [
        "Optimizing notification delivery at scale",
        "Implementing efficient data caching strategies",
        "Managing complex social networking features",
        "Ensuring cross-platform consistency"
      ],
      findings: [
        "Effectiveness of Firebase Cloud Functions for scaling",
        "Impact of intelligent caching on performance",
        "Benefits of multi-factor recommendation systems",
        "Importance of efficient data structure design"
      ]
    }
  },
  {
    id: "sweeper",
    title: "sweeper",
    shortDescription: "A Minesweeper clone built with vanilla JavaScript.",
    description: "Based on the popular game Minesweeper, sweeper is a logic puzzle game which features a grid of clickable squares with hidden bombs scattered through the board. The goal of the game is to clear the entire board without setting off any of the bombs.",
    previewImages: [
      "sweeper/sweeper-mac-1.png",
      "sweeper/sweeper-mac-2.png"
    ],
    technologies: [
      "JavaScript",
      "HTML", 
      "CSS",
      "DOM APIs",
      "Custom Web Fonts",
      "Responsive Design"
    ],
    githubUrl: "https://github.com/benjaehyun/sweeper",
    liveUrl: "https://benjaehyun.github.io/sweeper/",
    status: "completed",
    featured: false,
    keyFeatures: [
      "Multiple Difficulty Levels",
      "Dynamic Grid Generation",
      "Recursive Cell Revealing",
      "Win/Loss Detection"
    ],
    detailedInfo: {
      sections: [
        {
          id: "description",
          title: "Description",
          content: "A browser contained game created using only JavaScript, HTML, and CSS. Sweeper was my first dive into developing using a nostalgic pastime as reference. This project utilizes basic game logic to check for win/lose condition ie. if a bomb containing cell was clicked or if all non-bomb containing cells have been revealed. The game uses DOM manipulation for graphic rendering and on-click controls. Once a user selects a difficulty (initiating the game), the script programatically constructs the back-end representation of the cells which are 2-D arrays and implements a class-based approach in the construction."
        },
        {
          id: "technical-notes",
          title: "Technical Notes",
          content: "The final and honestly most difficult portion of this project was the function handling the initial reveal, in which the user clicks a completely blank board and a solvable pattern of cells are uncovered with their corresponding values. The function was ultimately designed in such a way that the bombs were placed in cells that did not match the exact cell that the user first clicked (so that the user could not lose on the first turn). Then a recursive reveal function was called designed after a flood-fill algorithm."
        }
      ],
      challenges: [
        "Implementing the initial reveal function",
        "Creating a reliable flood-fill algorithm",
        "Ensuring first-click safety"
      ],
      findings: [
        "Effectiveness of recursive algorithms for flood-fill",
        "Importance of user experience in game design",
        "Benefits of class-based structure in game logic"
      ]
    }
  },
  {
    id: "lowkey",
    title: "lowKEY",
    shortDescription: "A MERN-Stack dating app integrating with Spotify for music-based matching.",
    description: "LowKEY is a MERN-stack application that leverages the power of the Spotify API to match users based on their musical preferences. Whether you're looking for new friends or potential soulmates who share your taste in music, this app is designed to help you connect with like-minded music enthusiasts.",
    previewImages: [
      "lowkey/lowkey-projectpg-mac.png",
      "lowkey/lowkey-projectpg-mac-1.png"
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React",
      "Socket.io",
      "Bootstrap",
      "Spotify API",
      "AWS S3",
      "Chart.js",
      "JWT",
      "bcrypt",
      "Axios",
      "dotenv",
      "CORS"
    ],
    githubUrl: "https://github.com/benjaehyun/lowKEY",
    // liveUrl: "https://lowkey-08ba0f67b0aa.herokuapp.com/",
    liveUrl: "",
    status: "completed",
    featured: false,
    keyFeatures: [
      "Spotify Integration",
      "Real-time Chat",
      "Music Taste Matching Algorithm",
      "Interactive User Profiles"
    ],
    detailedInfo: {
      sections: [
        {
          id: "description",
          title: "Description",
          content: "When they are prompted during the profile creations process, users are able to select either: their top 20 songs from the past 6 months or a playlist from their library. Using Spotify's API, song feature data can be fetched and stored. Using an algorithm that measures similarity metrics across features (such as energy, instrumentalness, valence, etc.), the profiles displayed to the user will be sorted based on that similarity score. Once users are matched (they both send a 'like' to each other), they can communicate via private messages implemented using Socket.io, which are persisted in MongoDB for future sessions. Additionally, similarity data is displayed on the match page for each matched pair, showing what metrics the two users scored highly on. Other data shown on the match page about each pair includes: songs, albums, or artists that the users may share."
        },
        {
          id: "technical-notes",
          title: "Technical Notes",
          content: "The most difficult part of starting this app was implementing Spotify's Authorization Flow with PKCE in a system using JWTs to manage user authorization in this application. Once this was resolved, the next challenge was also the most exciting: the algorithm for similarity metrics across users' songs. After extensive research, I ended up sorting the various song feature data and using a simple euclidean distance formula. From what I was able to learn, it was the best way to reflect data characteristics such as range, frequency, and others, on the overall similarity score. I also considered other similarity metrics such as cosine similarity; however, these methods didn't seem to fit the data that was being returned by Spotify because things like the direction of data vectors matter less when the values are all within a given range."
        }
      ],
      challenges: [
        "Implementing Spotify's Authorization Flow with PKCE",
        "Developing an effective music taste similarity algorithm",
        "Managing real-time chat with Socket.io",
        "Handling complex state management with React"
      ],
      findings: [
        "Effectiveness of euclidean distance for similarity matching",
        "Importance of data normalization in matching algorithms",
        "Benefits of JWT for authentication management"
      ]
    }
  },
  {
    id: "thedraft",
    title: "The Draft",
    shortDescription: "A collaborative forum platform for job seekers.",
    description: "The Draft, created in collaboration with developers Nadew Demissew and Jonathan Do, is a discussion forum connecting job-seekers and industry experts together to share knowledge, experiences, and insights with one another. Drawing inspiration from the popular website CollegeConfidential.com, users generate discussion that helps everyone navigate the often complex and challenging world of job hunting.",
    previewImages: [
      "thedraft/thedraft-projectpg-mac.png",
      "thedraft/thedraft-projectpg-mac-2.png"
    ],
    technologies: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Django",
      "Bootstrap",
      "AWS S3",
      "PDF.js",
      "AJAX",
      "Heroku",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/benjaehyun/thedraft",
    liveUrl: "https://thedraft-theebuggers-823b566ea1e8.herokuapp.com/",
    status: "completed",
    featured: false,
    keyFeatures: [
      "Job Application Tracker",
      "Discussion Forums",
      "PDF Resume Viewer",
      "Company-specific Subforums"
    ],
    detailedInfo: {
      sections: [
        {
          id: "description",
          title: "Description",
          content: "The first major component to The Draft app is the subforums feature, which is how users submit topics, questions, or any other kind of interesting content for other users to engage with. Subforms fall into two categories: General subforums and Company subforums. General subforums are how users can submit content for discussion that is regarding a general topic of conversation relating to job-seeking. Alternatively, Company subforums are how users submit content related to job-searching or interesting info regarding a specific company. Once on a given company's page, the user can then navigate all discussions related to that company. The second major component to The Draft App is its job application tracker, which lives on the user's profile. The Job Application Tracker feature is designed to help users track a particular application cycle and provides a pdf viewer to show them what resume and/or cover letter was used, a status field that can be updated to reflect where they currently are in the cycle, and additional data like application components and notes to help the user provided extra context and action items as needed."
        },
        {
          id: "technical-notes",
          title: "Technical Notes",
          content: "The most apparent difficulty with this project was the time constraint. Even though it was developed in a 3-member team, implementing all of the app's functionalities within a 1 week sprint was extremely arduous. To add onto our sheer ambition with the app's capabilities, many of the app's functionality relied on technologies and implementations that we've never used before: AJAX calls, handling both image and pdf file uploads with AWS S3, utilizing PDF.js to display the stored pdf files, using the bootstrap library for the first time, as well as several other aspects of the project."
        }
      ],
      challenges: [
        "Managing complex file uploads with AWS S3",
        "Implementing PDF viewing functionality",
        "Creating an intuitive forum structure",
        "Meeting tight development deadlines"
      ],
      findings: [
        "Importance of team coordination in time-constrained projects",
        "Benefits of using established libraries for complex features",
        "Value of clear project architecture in collaborative development"
      ]
    }
  },
  {
    id: "cardio",
    title: "cardIO",
    shortDescription: "An educational flashcard application focused on spaced repetition learning.",
    description: "CardIO is a powerful educational resource designed to draw on high-yield learning from spaced repetition during long study sessions. Drawing inspiration from popular platforms like Anki and Quizlet, the app was developed with a focus on efficiency, effectiveness, and user-friendliness.",
    previewImages: ["cardio/cardio-1.png"],
    technologies: [
      "JavaScript",
      "HTML", 
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS Templates",
      "Passport.js",
      "Google OAuth",
      "Express Session",
      "Method Override",
      "RESTful APIs",
      "dotenv"
    ],
    githubUrl: "https://github.com/benjaehyun/cardIO",
    // liveUrl: "https://cardio-c535cdf1802c.herokuapp.com/",
    liveUrl: "",
    status: "completed",
    featured: false,
    keyFeatures: [
      "Google OAuth Integration",
      "Custom Deck Creation",
      "Community Discussion Features",
      "Progress Tracking"
    ],
    detailedInfo: {
      sections: [
        {
          id: "description",
          title: "Description",
          content: "In cardIO, users are able to create/login to an account using their Google account (implemented using Passport.js authentication middleware which handled Google's Oauth procedure). Users can then create their own decks of flashcards and go through each card until they are finished with the deck. They are also able to view all of the decks created on the platform and see collections of decks different users have made as well. Also, users are encouraged to have discussions on various topics with comments and message boards residing on both decks and individual cards."
        },
        {
          id: "technical-notes",
          title: "Technical Notes",
          content: "Developing most portions of this app was fairly straightforward, using the Express framework with newly learned RESTful Routing practices. The main difficulty with developing this app came from the constraints associated with using Embedded JavaScript Templates as the front-end. While many aspects of the app could be normally done by routing and rendering some data that is returned by the server, flipping the cards was significantly more involved than expected. Slightly deviating from the conventions of EJS usage, I implemented a script that uses DOM manipulation to handle the flip trigger and display the fronts and backs of the card."
        }
      ],
      challenges: [
        "Implementing card flipping functionality with EJS constraints",
        "Managing user authentication with Google OAuth",
        "Creating an intuitive deck management system"
      ],
      findings: [
        "Effectiveness of RESTful routing with Express",
        "Importance of user experience in educational tools",
        "Benefits of community-driven content creation"
      ]
    }
  },
  {
    id: "lunchbreak",
    title: "LunchBreak",
    shortDescription: "A corporate dining platform connecting employees with restaurants.",
    description: "LunchBreak is an inactive comprehensive web application designed to transform corporate dining experiences. By seamlessly connecting employees and companies with a wide array of restaurant options, the platform facilitates efficient meal ordering, budget management, and menu customization.",
    previewImages: [],
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "Django REST Framework",
      "JWT",
      "Tailwind CSS",
      "React Context API",
      "Axios",
      "HTTP-only Cookies",
      "CSRF Protection"
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    featured: false,
    keyFeatures: [
      "Dynamic Restaurant Menus",
      "Budget and Expense Tracking",
      "Advanced Menu Customization",
      "Responsive Design"
    ],
    detailedInfo: {
      sections: [
        {
          id: "overview",
          title: "Overview and Key Features",
          content: "LunchBreak is a comprehensive web application designed to transform corporate dining experiences. By seamlessly connecting employees and companies with a wide array of restaurant options, the platform facilitates efficient meal ordering, budget management, and menu customization. Developed with a keen focus on user experience and operational efficiency, LunchBreak utilizes a robust tech stack comprising Django and React, alongside Django REST Framework for dynamic API interactions and JsonWebTokens for secure authentication."
        },
        {
          id: "background",
          title: "Project Background",
          content: "Soon after my bootcamp, a small group of 3 other cohort-mates and I, all hungry to expand our horizons beyond what our coursework offered, decided to continue our learning journey together. It wasn't long before this initiative led to an exciting opportunity where one of us was connected with someone in need of a developer team to bring an application idea to life."
        }
      ],
      challenges: [
        "Implementing complex authentication system with multiple user types",
        "Building a scalable menu management system",
        "Integrating real-time order updates"
      ],
      findings: [
        "The importance of robust state management in complex applications",
        "Effective strategies for handling multi-tenant architectures",
        "Best practices for real-time data synchronization"
      ]
    }
  },
];
  
  // helpers
  export const getOngoingProjects = () => 
    projects.filter(project => project.status === 'ongoing');
  
  export const getCompletedProjects = () => 
    projects.filter(project => project.status === 'completed');
  
  export const getFeaturedProjects = () => 
    projects.filter(project => project.featured);
  
  export const getProjectById = (id) => 
    projects.find(project => project.id === id);
  
  export const getProjectPreviewData = (project) => ({
    title: project.title,
    description: project.description,
    shortDescription: project.shortDescription,
    technologies: project.technologies,
    previewImages: project.previewImages,
    images: project.previewImages,
    media: project.media,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    projectLink: project.id,
    status: project.status,
    keyFeatures: project.keyFeatures
  });