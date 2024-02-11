import React, {Suspense} from 'react'
import YTCard from './YTCard'
import { getChannelsPlaylist } from '@/services/api';
import Loading from '../../components/LoadingComp';
import { Button } from '@/components/ui/button';

export default async function Playlist() {
    const response = await getChannelsPlaylist();
    return (
        <Suspense fallback={<Loading text="Please wait for a second, your playlist are fetching from Youtube API..." />}>
            <div className="flex md:gap-1.5 gap-0 flex-wrap items-center">
                {
                    response?.items && response?.items.length > 0 &&
                    response?.items.map((video) => {
                        return <YTCard key={video.id} video={video} type="playlist" />
                    })
                }
            </div>
        </Suspense>
    )
}