import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container flex items-center justify-center flex-col py-8 border-t-[1px]">
      <h1 className="font-bold text-5xl text-lightGray mb-2">Amit Sharma</h1>
      <p className="text-center text-darkGray mb-5 md:w-3/4">Learn web application development, production software, and programming with Amit Sharma. To overcome obstacles, take use of individualised coaching and consultation services. Create expertly crafted, search engine-friendly software or web apps just for your goods. Together, let&apos;s work and create!</p>
      <div className="flex mb-24 md:mb-10">
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

      <ul className="hidden md:flex justify-between w-2/5">
        <li><Link className={`text-lg`} href="/">Home</Link></li>
        <li><Link className={`text-lg`} href="/yt-videos">YT Videos</Link></li>
        <li><Link className={`text-lg`} href="/blogs">Blogs</Link></li>
        <li><Link className={`text-lg`} href="/contact">Contact</Link></li>
        <li><Link className={`text-lg`} href="/about">About</Link></li>
      </ul>
    </footer>
  )
}