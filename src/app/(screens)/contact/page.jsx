import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";


export default function Contact() {
    return (
        <section className="container py-5 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-10">
                <h3 className="text-active font-bold mb-2">Contact</h3>
                <h1 className="text-darkGray font-extrabold text-4xl mb-1">Say &quot;HEY&quot;</h1>
                <p className="text-lightGray font-thin text-sm w-full md:w-1/2 mb-10">Have a question or need help? Contact for quick assistance and friendly support. I am here to help you.</p>

                <div className="w-full md:w-[80%]">
                    <div className="flex mb-10 rounded-md border-[1px] border-gray-200 p-4">
                        <MdOutlineAlternateEmail className="text-lightGray me-4" size={30} />
                        <div>
                            <h2 className="text-darkGray font-semibold mb-2">Contact me by email</h2>
                            <p className="text-lightGray font-thin mb-2">If you wish to write me an email instead please use</p>
                            <Link href="mailto: iamamitshrma@gmail.com"><span>iamamitshrma@gmail.com</span></Link>

                        </div>
                    </div>
                    <div className="flex rounded-md border-[1px] border-gray-200 p-4">
                        <FiMessageCircle className="text-lightGray me-4" size={30} />
                        <div>
                            <h2 className="text-darkGray font-semibold mb-2">Social Handles</h2>
                            <p className="text-lightGray font-thin mb-2">You can directly connect on these platforms</p>
                            <div className="flex">
                                <Link className="me-2" href="https://github.com/iamamitshrma" target="_blank">
                                    <Image src="/github.png" width={30} height={30} alt="amit sharma github" />
                                </Link>
                                <Link className="me-2" href="https://www.linkedin.com/in/amit-sharma-b32171143/" target="_blank">
                                    <Image src="/linkedin.png" width={30} height={30} alt="amit sharma linkedin" />
                                </Link>
                                <Link className="me-2" href="https://www.youtube.com/channel/UC-DqwAwCxiOGIkHzOUTwUKw" target="_blank">
                                    <Image src="/youtube.png" width={30} height={30} alt="thecodemm youtube channel" />
                                </Link>
                                <Link className="me-2" href="https://www.instagram.com/iamamitshaarma/" target="_blank">
                                    <Image src="/instagram.png" width={30} height={30} alt="amit sharma instagram page" />
                                </Link>
                                <Link className="me-2" href="https://twitter.com/amit__shaarma" target="_blank">
                                    <Image src="/twitter.png" width={30} height={30} alt="amit sharma twitter or x page" />
                                </Link>
                                <Link href="https://discord.gg/CatZjxdS" target="_blank">
                                    <Image src="/discord.png" width={30} height={30} alt="amit sharma discord server" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <ContactForm />
            </div>
        </section>
    )
}