import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function YTCard({ video }) {
    return (
        <Card key={video.id.videoId} className="w-[32%] mb-5">
            <CardHeader>
                <CardTitle className="font-medium text-xl text-darkGray" title={video?.snippet?.title}>{video?.snippet?.title?.split("|")[0]}</CardTitle>
                <CardDescription className="text-lightGray leading-4 font-thin" title={video?.snippet?.description}>{video?.snippet?.description.slice(0, 30) || "  "}...</CardDescription>
            </CardHeader>
            <CardContent className="w-full h-[200px]">
                <Image className="w-full h-full bg-contain" src={video?.snippet?.thumbnails?.high?.url} width={100} height={100} alt={`Image`} />
            </CardContent>
            <CardFooter>
                <Link href={video?.id?.videoId ? `https://www.youtube.com/watch?v=${video?.id?.videoId}` : `https://www.youtube.com/@thecodemm`} target="_blank"><Button className="text-active border-active" variant="outline">Open On Youtube</Button></Link>
            </CardFooter>
        </Card>
    )
}