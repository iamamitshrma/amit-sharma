import { skills } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";


export default function About() {
    return (
        <section className="container py-5 min-h-[100vh] bg-slate-200">
            <div className="flex flex-col items-center my-10">
                <h1 className="mb-2 font-bold text-darkGray text-5xl">About</h1>
                <p className="text-lightGray font-thin leading-5">who am i and what i know?</p>
            </div>

            <div className="md:flex md:justify-between">
                <div className="mb-10 w-full md:w-1/2">
                    <p className="text-lightGray font-thin w-full mb-5">I&apos;m Amit Sharma, a flexible developer with expertise in front-end and back-end programming for websites and mobile apps.</p>
                    <h1 className="text-darkGray font-semibold text-2xl mb-1">&quot;Front-end Programming&quot;</h1>
                    <p className="text-lightGray w-full md:w-1/2 mb-5">My area of expertise is designing visually appealing user interfaces that balance usability and style.</p>
                    <h1 className="text-darkGray font-semibold text-2xl mb-1">&quot;Reverse Engineering&quot;</h1>
                    <p className="text-lightGray w-full md:w-1/2 mb-5">I&apos;m great at creating reliable server-side designs that provide smooth communication and data management.</p>
                    <h1 className="text-darkGray font-semibold text-2xl mb-1">&quot;Development for Mobile&quot;</h1>
                    <p className="text-lightGray w-full md:w-1/2 mb-10">I design user-friendly mobile experiences with an emphasis on functionality and user experience.</p>
                    <p className="text-darkGray w-full font-thin mb-5">Let&apos;s talk about how I can support you in completing your projects and get in touch!</p>
                    <div className="w-full md:w-[80%]">
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap justify-between items-center">
                    {
                        skills.map((skill) => {
                            return (
                                <Link href={skill.link} target="_blank" key={skill.id} className="flex flex-col items-center justify-center p-2 mb-5 w-[30%] md:w-[30%] cursor-pointer">
                                    <Image className="mb-5" src={skill.logo} width={50} height={50} alt={skill.alt} />
                                    <span>{skill.name}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}