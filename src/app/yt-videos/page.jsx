
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Videos from "./Videos"
import Playlist from "./Playlist"

export default function YTVideos() {
    return (
        <div className="container py-5">
            <Tabs defaultValue="videos" className="w-[100%]">
                <TabsList className="grid w-full grid-cols-2 mb-5">
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <TabsTrigger value="playlist">Playlists</TabsTrigger>
                </TabsList>
                <TabsContent value="videos">
                    <Videos />
                </TabsContent>
                <TabsContent value="playlist">
                    <Playlist />
                </TabsContent>
            </Tabs>
        </div>
    )
}