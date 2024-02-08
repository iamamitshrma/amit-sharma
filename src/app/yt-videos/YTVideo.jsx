import React from 'react'
import YTCard from './YTCard'
import { useQuery } from '@tanstack/react-query';
import { getChannelsVideos } from '@/services/api';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

export default function YTVideo() {
    const { isLoading, data, error, isError } = useQuery({ queryKey: ['ytvideos'], queryFn: () => getChannelsVideos("date", 20, "videos"), staleTime: 60000 });
    if(isError) {
        return <Error error={error} />
    }

    if(isLoading) {
        return <Loading text="Please wait for a second, your videos are fetching from Youtube API..."  />
    }
    return (
        <>
            <div className="flex flex-wrap justify-between items-center">
                {
                    data?.data?.items && data?.data?.items.length > 0 &&
                    data?.data?.items.map((video) => {
                        return <YTCard key={video.id.videoId}  video={video} type="videos" />
                    })
                }
            </div>
        </>
    )
}