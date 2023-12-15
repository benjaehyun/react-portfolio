
export default function Example({isMobileMenuOpen}) {

  const paddingTopClass = isMobileMenuOpen ? 'pt-60' : 'pt-24';

  return (
    <div className={`relative isolate overflow-hidden bg-gray-300 px-6 ${paddingTopClass} pb-24 sm:pb-32 sm:pt-32 lg:overflow-visible lg:px-0`}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">cardIO</h1>
              <a href="https://github.com/benjaehyun/cardIO" target="_blank" rel="noopener noreferrer" className='underline'>Link To GitHub</a> || &nbsp;
              <a href="https://cardio-d645429cce4f.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='underline'>Link To App</a>
              <p className='mt-6 text-sm text-gray-700 '> Note: Live app is under construction, but please check out the Github for more information about this project! </p>
              <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
              cardIO is a powerful educational resource designed to draw on high-yield learning from spaced repetition during long study sessions. 
              This app was developed with a focus on efficiency, effectiveness, and user-friendliness, drawing inspiration from popular platforms like Anki and Quizlet.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <h1 className='font-bold text-xl'>Description:  </h1><br /> 
              <p className='text-justify'>
                In cardIO, users are able to create/login to an account using their Google account (implemented using Passport.js authentication middleware which handled Google's Oauth procedure). 
                Users can then create their own decks of flashcards and go through each card until they are finished with the deck. They are also able to view all 
                of the decks created on the platform and see collections of decks different users have made as well. Also, users are encouraged to have discussions on various topics 
                with comments and message boards residing on both decks and individual cards.
              </p>
              <br />
              <h1 className='font-bold text-xl'>Notes: </h1>
              <p className="mt-8 text-justify">
                Developing most portions of this app was fairly straightforward, using the Express framework with newly learned RESTful Routing practices. The main difficulty with developing this app 
                came from the constraints associated with using Embedded JavaScript Templates as the front-end. While many aspects of the app could be normally done by routing and rendering some data that is returned
                by the server, flipping the cards was significantly more involved than expected. Slightly deviating from the conventions of EJS usage, I implemented a script that uses DOM manipulation to handle the flip 
                trigger and display the fronts and backs of the card. 
              </p>
              <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">Technologies Used: </h2>
              <p className="mt-6">
                JavaScript, HTML, CSS, Passport.js, Node.js, Express.js, MongoDB, and Mongoose
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
