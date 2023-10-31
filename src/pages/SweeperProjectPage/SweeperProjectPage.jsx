import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function SweeperProjectPage() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-300  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">sweeper</h1> <br />
              <a href="https://github.com/benjaehyun/sweeper" target="_blank" className='underline'>Link To GitHub</a> || &nbsp;
              <a href="https://benjaehyun.github.io/sweeper/" target="_blank" className='underline'>Link To App</a>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Based on the popular game Minesweeper, sweeper is a logic puzzle game which features a grid of clickable squares with hidden
               bombs scattered through the board. The goal of the game is to clear the entire board without setting off any of the bombs.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className='flex '>
            <img
                className="w-[48rem] max-w-none rounded-b-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src="/sweeper/sweeper-projectpg.png"
                alt=""
            />

            </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Description: <br /> 
                    A browser contained game created using only JavaScript, HTML, and CSS. Sweeper was my first dive into 
                    developing using a nostalgic pastime as reference. This project utilizes basic game logic to check for win/lose condition ie. if a bomb containing cell was clicked or if 
                    all non-bomb containing cells have been revealed. 
                    <br /> 
                    The game uses DOM manipulation for graphic rendering and on-click controls. Once a user selects a difficulty (initiating the game), the script 
                    programatically constructs the back-end representation of the cells which are 2-D arrays and implements a class-based approach in the construction. 
                    <br /> 
                    The final and honestly most difficult portion 
                    of this project was the function handling the initial reveal, in which the user clicks a completely blank board and a solvable pattern of cells are uncovered with their corresponding values.
                    The function was ultimately designed in such a way that the bombs were placed in cells that did not match the exact cell that the user first clicked (so that the user could not lose on the first turn).
                    Then a recursive reveal function was called designed after a flood-fill algorithm. 
              </p>
              <p className="mt-8">
                Difficulties : <br />  
                As mentioned above, the most difficult portion of this project was getting the correct behavior of the initial reveal function such that the user will always be displayed a solvable pattern. 
                I spent a handful of days implementing different versions of the function looking for the right pattern, as compared to the few days that it took to build out the rest of the app out of the 1 week sprint for the whole project.
                Following the guidance of online resources, I tried to implement a version of a flood-fill algorithm that would be able to fill a space when given defined edges (in this case, the edges were 
                number containing cells). I kept getting "cliffs" where the revealed portion would go around corners of numbers, leading to a board that has too many solved cells (that may not always be solvable). 
                I found that I was able to recursively call the reveal function on cells that have a value of "0". This meant that the pattern will always have number containing edges and was not over-solved. 
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Technologies Used: </h2>
              <p className="mt-6">
                JavaScript, HTML, CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
