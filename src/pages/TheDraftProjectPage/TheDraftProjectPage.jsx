import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Draft</h1> <br />
              <a href="https://github.com/benjaehyun/thedraft" target="_blank" className='underline'>Link To GitHub</a> || &nbsp;
              <a href="https://thedraft-theebuggers-823b566ea1e8.herokuapp.com/" target="_blank" className='underline'>Link To App</a>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              The Draft, created in collaboration with developers Nadew Demissew and Jonathan Do, is a discussion forum connecting job-seekers and industry experts 
              together to share knowledge, experiences, and insights with one another. Drawing inspiration from the site CollegeConfidential.com,
               users generate discussion that helps everyone navigate the often complex and challenging world of job hunting. The app's other major component 
               is the job tracker feature that is tied to each user. 
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
            className="w-[48rem] max-w-none rounded-t-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/thedraft/thedraft-projectpg-mac.png"
            alt=""
          />
          <img
            className="w-[48rem] max-w-none rounded-b-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/thedraft/thedraft-projectpg-mac-2.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Description: <br />
                The first major component to The Draft app is the subforums feature, which is how users submit topics, questions, or any other kind of interesting content for other users to engage with. Subforms fall into two catergories: General subforums and Company subforums. General subforums are how users can submit content for discussion that is regarding a general topic of conversation relating to job-seeking. Alternatively, Company subforums are how users submit content related to job-searching or interesting info regarding a specific company. Once on a given company's page, the user can then navigate all discussions related to that company.
                <br />
                The second major component to The Draft App is it's job application tracker, which lives on the user's profile. The Job Application Tracker feature is designed to help users track a particular application cycle and provides a pdf viewer to show them what resume and/or cover letter was used, a status field that can be updated to reflect where they currently are in the cycle, and additional data like application components and notes to help the user provided extra context and action items as needed.
              </p>
              <p className="mt-8">
                Difficulties: 
                The most apparent difficulty with this project was the time constraint. Even though it was developed in a 3-member team, implementing all of the app's functionalities within a 1 week sprint
                was extremely arduous. To add onto our sheer ambition with the app's capabilities, many of the app's functionality relied on technologies and implementations that we've never used before: AJAX calls, 
                handling both image and pdf file uploads with AWS S3, utilizing PDF.js to display the stored pdf files, using the bootstrap library for the first time, as well as several other aspects of the project. 
                Overall, I think that we were able to accomplish everything we had initially set out to with this project in a way that is useful and intuitive from a user experience perspective.  
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Technologies Used: </h2>
              <p className="mt-6">
                Python, JavaScript, HTML, CSS, Django, Bootstrap, AWS, PDF.js, Heroku, Django Templating Language, PostgreSQL. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
