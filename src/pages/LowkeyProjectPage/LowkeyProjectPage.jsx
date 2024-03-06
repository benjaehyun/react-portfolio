

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
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">lowKEY</h1> <br />
              <a href="https://github.com/benjaehyun/lowKEY" target="_blank" rel="noopener noreferrer" className='underline'>Link To GitHub</a> || &nbsp;
              <a href="https://lowkey-08ba0f67b0aa.herokuapp.com/" target="_blank" rel="noopener noreferrer" className='underline'>Link To App</a>
              <p className='mt-6 text-sm text-gray-700 text-justify'> Note: In order to demo the app, please contact me. Due to the nature of Spotify's Developer API, I need to manually whitelist your Spotify Account in my app's permissions</p>
              <p className="mt-6 text-xl text-justify leading-8 text-gray-700">
              LowKEY is a MERN-stack application that leverages the power of the Spotify API to match users based on their musical preferences. 
              Whether you're looking for new friends or potential soulmates who share your taste in music, this app is designed to help you connect with like-minded music enthusiasts. 
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-t-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/lowkey/lowkey-projectpg-mac.png"
            alt=""
          />
          <img
            className="w-[48rem] max-w-none rounded-b-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/lowkey/lowkey-projectpg-mac-1.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <h1 className='font-bold text-xl'>Description:  </h1><br /> 
              <p className='text-justify'>
                When they are prompted during the profile creations process, users are able to select either: their top 20 songs from the past 6 months or a playlist from their library. 
                Using Spotify's API, song features data can be fetched and stored. Using an algorithm that measures similarity metrics across features such as energy, instrumentalness, valence, etc., the 
                profiles displayed to the user will be sorted based on that similarity score. <br /> <br />
                Once users are matched (they both send a "like" to each other), they can communicate via private messages
                implemented using Socket.io, which are persisted in MongoDB for future sessions. Additionally, similarity data is displayed on the match page for each matched profile, showing 
                what metrics the two users scored highly on. Other data that is shown to each match includes: songs, albums, or artists that the users may share. 
              </p>
              <br />
              <h1 className='font-bold text-xl'>Notes: </h1>
              <p className="mt-8 text-justify">
                The most difficult part of starting this app was implementing Spotify's Authorization Flow with PKCE in addition to using JWT's to manage user data separate from Spotify. Once this was resolved, the next difficulty was also the most exciting: the algorithm for similarity metrics across users' songs. After extensive research, I ended up sorting the various song features 
                and using a simple euclidean distance formula. From what I was able to learn, it was the best way to have some influence based on range, frequency, and other data features, on the overall similarity score.
                I also considered other similarity meterics such as cosine similarity; however, these methods didn't seem to fit the data that was being returned by Spotify because things like the direction of vectors matter less when the 
                values are all within a given range. 
                <br /> 
                <br /> 
                Aside from the actual algorithm design, another challenge was normalizing the values so that no single metric would have an overwhelming impact on the similarity score. Things like instrumentalness 
                might yield incredibly small values when calculations are being made, as compared to something like energy (Also worth noting that while the values themselves were very small, they also had a tendency to have an extremely high variance. So it's 
                difficult to just multiply the metrics by some constant factor). There were also some complications with implementing Socket.io to use websockets for live chat functionality, which were then stored in the database and used to update React states. 
                But these were later resolved by changing the React state management and adjusting the Socket.io configuration.   
              </p>
              <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">Technologies Used: </h2>
              <p className="mt-6">
                JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, Mongoose, React, Socket.io, Bootstrap, Spotify API, AWS S3, Chart.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
