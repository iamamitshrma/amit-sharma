import React from 'react'
import YTCard from './YTCard'
import { useQuery } from '@tanstack/react-query';
import { getChannelsPlaylist } from '@/services/api';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

export default function YTPlaylist() {
    const { isLoading, data, error, isError } = useQuery({ queryKey: ['ytChannels'], queryFn: () => getChannelsPlaylist("date", 20, "playlist"), staleTime: 60000 });

    if(isError) {
        return <Error error={error} />
    }

    if(isLoading) {
        return <Loading text="Please wait for a second, your playlist are fetching from Youtube API..." />
    }

    return (
        <>
            <div className="flex flex-wrap justify-between items-center">
                {
                    data?.data?.items && data?.data?.items.length > 0 &&
                    data?.data?.items.map((video) => {
                        return <YTCard key={video.id.videoId} video={video} type="playlist" />
                    })
                }
            </div>
        </>
    )
}