'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
    const pathName = usePathname();
    return (
        <nav className="w-full">
            <div className="container flex justify-center md:justify-between items-center">
                <div>
                    <Image
                        priority
                        src="/logo.png"
                        width={80}
                        height={80}
                        alt="Amit Sharma" />
                </div>

                <motion.ul
                    className="md:hidden flex justify-around flex-wrap w-[90%] fixed bottom-20 z-10 bg-white py-4 rounded-md shadow-2xl"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 70, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                >
                    <li><Link className={`text-lg ${pathName === "/" && "text-active"}`} href="/">Home</Link></li>
                    <li><Link className={`text-lg ${pathName === "/yt-videos" && "text-active"}`} href="/yt-videos">YT Videos</Link></li>
                    <li><Link className={`text-lg ${pathName === "/blogs" && "text-active"}`} href="/blogs">Blogs</Link></li>
                    <li><Link className={`text-lg ${pathName === "/contact" && "text-active"}`} href="/contact">Contact</Link></li>
                    <li><Link className={`text-lg ${pathName === "/about" && "text-active"}`} href="/about">About</Link></li>
                </motion.ul>

                <ul className="hidden md:flex justify-between w-2/5">
                    <li><Link className={`text-lg ${pathName === "/" && "text-active"}`} href="/">Home</Link></li>
                    <li><Link className={`text-lg ${pathName === "/yt-videos" && "text-active"}`} href="/yt-videos">YT Videos</Link></li>
                    <li><Link className={`text-lg ${pathName === "/blogs" && "text-active"}`} href="/blogs">Blogs</Link></li>
                    <li><Link className={`text-lg ${pathName === "/contact" && "text-active"}`} href="/contact">Contact</Link></li>
                    <li><Link className={`text-lg ${pathName === "/about" && "text-active"}`} href="/about">About</Link></li>
                    {/* <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-lg flex items-center">Tools <IoMdArrowDropdown /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                            <Link href="/tools/code-compiler" className={`text-lg ${pathName === "/tools/code-formatter" && "text-active"}`}>
                                <DropdownMenuItem className="cursor-pointer">Compiler</DropdownMenuItem>
                            </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}