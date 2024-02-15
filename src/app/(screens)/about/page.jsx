import Image from "next/image";

export default function About() {
    return (
        <section className="container py-5 flex flex-col md:flex-row justify-center items-center">
            <div className="mb-10 w-[100%] md:w-[70%] text-center">
                <h3 className="text-active font-bold mb-2">👋 Hello</h3>
                <h1 className="text-darkGray font-extrabold text-4xl mb-5">My name is &quot;Amit Sharma&quot;</h1>
                <Image src="/profile.png" width={100} height={100} className="rounded-full mb-10 mx-auto shadow-xl" alt="amit sharma profile" />

                <p className="text-lightGray mb-5">I&apos;m a <span className="text-active">front-end and back-end</span> developer that learned everything on my own. I love making interesting <span className="text-active">mobile apps and websites.</span> My last employer is Kylo Apps in India and worked as a 🚀 SDE-1.  I&apos;ve been designing and developing websites for different tech and startup companies for the last five years. I also provide <span className="text-active">freelancing services</span> with an emphasis on creating aesthetically pleasing and intuitive digital experiences.</p>

                <p className="text-lightGray mb-5">When I had to select an elective in school, I chose to study Computer science/C++, which is how I started my career in technology. At the age of 15, this exposed me to HTML & CSS and sparked my interest in coding.</p>

                <p className="text-lightGray mb-5">When I was ninteen, I decided to sharpen my talents even further by pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering.</p>

                <p className="text-lightGray mb-5">I didn&apos;t have a defined career path while I was a college student, but the COVID-19 outbreak forced us to switch to online instruction, which gave me plenty of time to pursue my hobbies. I became interested in front-end and back-end development at this time, concentrating on making user-friendly interfaces and seamless experiences.</p>

                <p className="text-lightGray mb-5">I started a self-directed learning path and spent 4-5 hours a day learning about different facets of frontend and backend development. I continued to practise and added online courses from the university to my studies, which helped me progressively improve my abilities and self-assurance.</p>

                <p className="text-lightGray mb-5">I threw myself into learning backend (Node.js) and frontend (React) technologies, grasping concepts like database management, RESTful APIs, and data manipulation.</p>

                <p className="text-lightGray mb-5">Having gained a strong foundation in frontend and backend development, I started putting my newly acquired abilities to use on side projects. Even though there were obstacles in my path, I persisted, growing from every endeavour and challenging myself to come up with novel answers.</p>

                <p className="text-lightGray mb-5">I started from zero and committed to perfecting my skill, even in the face of early failures and little acknowledgement. Despite the lack of interest in my GitHub repository and personal projects at first, I persisted since I was passionate about coding.</p>

                <p className="text-lightGray">I really think that following one&apos;s passions requires patience and tenacity. I&apos;m sure that by concentrating on my passion for coding and never stopping to push the envelope, I&apos;ll eventually achieve satisfying outcomes in my career as a frontend and backend developer.</p>

            </div>
        </section>
    )
}