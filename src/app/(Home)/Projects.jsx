import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { projects } from "@/data/projects";
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md";
import { Badge } from "@/components/ui/badge"



export default function Projects() {
    return (
        <section className="container py-5 min-h-[100vh] ">
            <div className="flex flex-col items-center my-10">
                <h1 className="mb-2 font-bold text-darkGray text-5xl">Projects</h1>
                <p className="text-lightGray font-thin leading-5">what i did?</p>
            </div>

            <div className="flex justify-between items-center flex-wrap h-[70%]">
                {
                    projects.map((project) => {
                        return (
                                <Card className="w-[100%] md:w-[32%] mb-5 flex flex-col items-center p-5 bg-purple-50">
                                    <CardHeader className="mb-5">
                                        <Link href={project.link} target="_blank"><h1 className="font-bold text-darkGray text-center relative w-fit flex self-center">{project.name}<MdArrowOutward color="#8b169f" className="absolute -right-4 -top-2"/></h1></Link>
                                    </CardHeader>
                                    <CardContent className="mb-6 min-h-[160px]">
                                        <p className="text-lightGray font-thin text-center mb-5">{project?.comment}</p>
                                        <ul className="flex text-center items-center justify-center self-center flex-wrap">
                                            {
                                                project.technologies.map((tech) => {
                                                    return <li className="mb-2 me-2" key={tech}><Badge variant="outline">{tech}</Badge></li>
                                                })
                                            }
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="flex flex-col items-center justify-center">
                                        <p className="text-lightGray font-thin text-sm">Under</p>
                                        <h2 className="font-bold text-active mb-3">{project.under}</h2>
                                        <p className="text-lightGray font-thin">{project.type}</p>
                                    </CardFooter>
                                </Card>
                        )
                    })
                }
            </div>
        </section>
    )
}