import React, {Suspense} from 'react'
import YTCard from './YTCard'
import { getChannelsVideos } from '@/services/api';
import Loading from '../../components/LoadingComp';
import { Button } from '@/components/ui/button';

export default async function Videos() {
    const response = await getChannelsVideos();
    return (
        <Suspense fallback={<Loading text="Please wait for a second, your videos are fetching from Youtube API..." />}>
            <div className="flex md:gap-1.5 gap-0 flex-wrap items-center">
                {
                    response?.items && response?.items.length > 0 &&
                    response?.items.map((video) => {
                        return <YTCard key={video.id} video={video} type="videos" />
                    })
                }
            </div>
        </Suspense>
    )
}