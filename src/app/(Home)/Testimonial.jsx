import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import Link from "next/link"

export default function Testimonial() {
    return (
        <section className="container py-5 flex flex-col justify-center min-h-[100vh]">
            <div className="flex flex-col items-center mb-10">
                <h1 className="mb-2 font-bold text-darkGray text-5xl">Testimonials</h1>
                <p className="text-lightGray font-thin leading-5">What People think?</p>
            </div>
            <div className="flex justify-between items-center flex-wrap h-[70%]">
                {
                    testimonials.map((testimonial) => {
                        return (
                            <Link className="w-[100%] md:w-[32%] mb-5" href={testimonial.link} target="_blank">
                                <Card className="w-[100%] md:w-[100%] p-5">
                                    <CardHeader className="mb-5">
                                        <h1 className="font-bold text-darkGray text-center">{testimonial.tag}</h1>
                                    </CardHeader>
                                    <CardContent className="mb-5 h-[120px]">
                                        <p className="text-lightGray font-thin text-center">{testimonial?.comment}</p>
                                    </CardContent>
                                    <CardFooter className="flex flex-col items-center justify-center">
                                        <h2 className="font-bold text-active">{testimonial.name}</h2>
                                        <p className="text-lightGray font-thin text-sm">{testimonial.type}</p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}