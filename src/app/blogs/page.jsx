import Image from "next/image";
import Blog from "./Blog";

async function getData() {
    const res = await fetch("http://localhost:3000/api/blogs", {cache: "no-store"});
    return res.json();
}
export default async function Blogs() {
    const res = await getData();

    return (
        <main className="container py-5">
            <section className="h-[83vh] bg-bg-blog bg-cover">
                <h3 className="text-active font-bold mb-2">Blogs</h3>
                <h3 className="text-darkGray font-extrabold text-4xl mb-5 md:w-1/2">Unlock the Code: Your Ultimate Resource Hub for Software Development and Programming Insights!</h3>
                <p className="text-lightGray font-thin leading-5 mb-5">Explore a World of Insightful Perspectives: Dive Into Our Blog Archives!</p>
                <Image src="/medium.png" alt="medium website" width={50} height={50} />
            </section>

            <section>
                <div className="flex flex-col items-center my-10">
                    <h1 className="mb-2 font-bold text-darkGray text-5xl">Blogs</h1>
                    <p className="text-lightGray font-thin leading-5">what i write?</p>
                </div>
                <div className="flex md:gap-4 gap-0 flex-wrap items-center">
                    {
                        res?.data[0]?.item && res?.data[0]?.item?.length > 0 && res?.data[0]?.item?.map((blog) => {
                            return <Blog key={blog?.pubDate[0]} blog={blog} />
                        })
                    }
                </div>
            </section>
        </main>
    )
}