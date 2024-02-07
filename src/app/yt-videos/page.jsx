"use client"
import YTPlaylist from "@/components/YT/YRPlaylist"
import YTVideo from "@/components/YT/YTVideo"
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
                <TabsList className="grid w-full grid-cols-2">
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