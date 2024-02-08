"use client"
import YTPlaylist from "@/app/yt-videos/YTPlaylist"
import YTVideo from "@/app/yt-videos/YTVideo"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function YTVideos() {

    return (
        <div className="container py-5">
            <Tabs defaultValue="videos" className="w-[100%]">
                <TabsList className="grid w-full grid-cols-2 mb-10">
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <TabsTrigger value="channels">Playlists</TabsTrigger>
                </TabsList>
                <TabsContent value="videos">
                    <YTVideo />
                </TabsContent>
                <TabsContent value="channels">
                    <YTPlaylist />
                </TabsContent>
            </Tabs>
        </div>
    )
}