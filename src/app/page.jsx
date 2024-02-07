import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-5 flex items-center justify-center h-[80vh]">
      <div className="">
        <h1 className="font-bold text-5xl">
          <span className="block text-lightGray">HI!</span>
          <span className="text-darkGray">I am Amit Sharma</span>
        </h1>
        <p className="text-black font-thin leading-5 mb-5">A Coder and Youtuber</p>
        <div className="flex">
          <Link className="me-2" href="https://github.com/iamamitshrma" target="_blank">
            <Image src="/github.png" width={30} height={30} alt="amit sharma github" />
          </Link>
          <Link className="me-2" href="https://www.linkedin.com/in/amit-sharma-b32171143/" target="_blank">
            <Image src="/linkedin.png" width={30} height={30} alt="amit sharma linkedin" />
          </Link>
          <Link href="https://www.youtube.com/channel/UC-DqwAwCxiOGIkHzOUTwUKw" target="_blank">
            <Image src="/youtube.png" width={30} height={30} alt="thecodemm youtube channel" />
          </Link>
        </div>
      </div>
    </section>
  );
}
