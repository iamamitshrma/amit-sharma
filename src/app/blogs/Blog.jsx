import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ blog }) {
    console.log(blog["content:endcoded"])
    return (
        <Link className="w-[100%] md:w-[33%] mb-5" href={blog?.link[0]} target="_blank">
            <Card className="w-[100%] md:w-[100%] p-0 h-[400px] flex flex-col justify-between">
                <div className="dangerous-html" dangerouslySetInnerHTML={{ __html: blog["content:encoded"] }}></div>
                <span className="px-2 font-thin text-sm text-darkGray" title={blog?.pubDate[0] || ""}>{blog?.pubDate[0]?.split(" ")?.slice(0, 4)?.join(" ")}</span>
                <h3 className="px-2 font-semibold" title={blog?.title[0] || ""}>{blog?.title[0].slice(0, 50)}...</h3>

                <div className="flex flex-wrap px-1">
                    {
                        blog?.category && blog?.category?.length > 0 &&
                        blog?.category?.map((cat) => {
                            return <Badge variant="outline" className="me-2 mb-1 font-light" key={cat}>{cat}</Badge>
                        })
                    }
                </div>

                <div className="flex items-center px-2">
                    <span className="font-thin text-sm text-darkGray me-3">{blog["dc:creator"][0]}</span>
                    <Image src="/medium.png" alt="medium" width={30} height={30} />
                </div>
            </Card>
        </Link>
    )
}