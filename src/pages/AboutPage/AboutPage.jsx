export default function AboutPage () {
    
    return (
        <>
            <div 
            style={{
                backgroundImage: 'url("hobby/millpark.jpg")', 
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className='top-0 h-[80vh] absolute w-full z-[-1] blur-md'
            >
            </div>
            <div className="flex justify-center items-center mt-[10vh]">
                <img src="me/wedding-photo.png" style={{scale: '1.4'}} alt="" className="w-[12vw] z-1  border-solid rounded-full border-2" />
                <div className="w-[30vw] ml-16">
                <h1 className='text-white text-4xl'> A pre-med student turned engineer and new Seattleite with a passion for elegant solutions.</h1> <br />
                <h3 className="text-white text-xl italic">And recent graduate of General Assembly's Software Engineering Immersive Program! </h3>
                </div>
            </div>
            <div className="flex flex-col items-center mb-[15vh] space-y-24 mt-[35vh]">
                <div className="w-[60vw]">
                <h1 className="text-white text-5xl"> Hi 👋, Glad you were able to find me! </h1> <br /> <br />
                <h1 className="text-white text-xl text-left"> I'm Ben, and I am currently based in Seattle, WA. I'm a creative-minded software
                developer with a passion for elegant solutions to enrich user experiences.
                <br />
                <br />
                Before embarking on my journey of becoming a developer, I was fully immersed in my pre-med studies in university, MCAT taken and all. Then the covid-19 pandemic pumped the brakes on school, 
                volunteer work, and anything else that I could've been doing in preparation for medical school. For the first time, I was able to take a break and take a step back. In that time, 
                I discovered a profound interest in the limitless possibilities in tech, more specifically: software development. 
                {/* Even now, it's hard for me to pinpoint exactly what it was that drew me to this field, whether it was the 
                deeply logical nature of computer science, the seemingly infinite range of problems that you could face at any given moment, the elegant solutions, or the boundless reach of enriching user experiences through products.   */}
                <br />
                <br />
                I took an admittedly risky step to transition into a SWE career and enrolled in an intensive bootcamp. Through countless lines 
                of code, rigorious problem-solving, and the invaluable support of my mentors and peers, I graduated and fell deeper into what's nothing short of an infatuation with coding. I think
                that my pivot from medicine to tech has equipped me with a unique blend of skills including: attention to detail, a strong analytical mindset, and the ability to approach challenges with 
                resilience and a fresh perspective.
                <br />
                <br />
                I'm currently looking for that next step to push impactful products and contribute meaningfully to the dynamic landscape of technology.
                 </h1>
            </div>
            <h1 className="text-white text-3xl">Find me on: </h1>
            <div>
                <a href="https://github.com/benjaehyun" target="_blank" rel="noopener noreferrer" className='text-white underline text-2xl'> GitHub </a>  &nbsp; <span className="text-white text-2xl">||</span> &nbsp;
                <a href="https://www.linkedin.com/in/benjaehyun/" target="_blank" rel="noopener noreferrer" className='text-white underline text-2xl'>LinkedIn</a>
            </div>
            <div className="text-center flex items-center justify-center">
                <img src="hobby/seattle.jpg" alt="" className="w-[60vw] z-[-1] blur-md bottom-[10%]"/>
                <div className="flex justify-center items-center absolute">
                    <img src="me/hobby-2.png" alt="" className="w-[12vw] z-1 border-solid rounded-full border-2" />
                    <div className="w-[30vw] ml-16">
                        <h1 className='text-black text-4xl italic'> A little more about me: </h1> <br /> 
                        <h3 className="text-black text-xl bg-slate-100/25 p-6 border-hidden rounded-lg border-2 "> I'm a 2nd gen Korean-American born and raised in Oklahoma. <br /> <br />
                        <span className="text-justify">
                        Some of my favorite hobbies include: golf, photography (all of the photos on my site are photos I've taken!), cooking for friends, and reading when I have down time (which I can't seem to find much of these days 😅)
                        I'm currently reading "yolk" by Mary HK Choi.</span> </h3>
                    </div>
                </div>
            </div>
            <div className="border-solid rounded-md border-2 p-12">
                <h1 className="text-white text-4xl"> Skills </h1>
                <ul className="text-white list-disc flex justify-evenly space-x-14 mt-12">
                    <div>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Express</li>
                    </div>
                    <div>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                    </div>
                    <div>
                        <li>EJS</li>
                        <li>Django</li>
                        <li>DTL</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </div>
                    <div>
                        <li>Git</li>
                        <li>Github</li>
                        <li>RESTful Routing</li>
                        <li>JSON API</li>
                        <li>AWS S3</li>
                    </div>
                </ul>
            </div>

            </div>
        </>
    )  
}