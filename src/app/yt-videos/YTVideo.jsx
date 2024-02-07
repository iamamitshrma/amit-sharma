import React from 'react'
import YTCard from './YTCard'
import { Input } from '../../components/ui/input'
import { useQuery } from '@tanstack/react-query';
import { getChannelsVideos } from '@/services/api';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

export default function YTVideo() {
    const { isLoading, data, error, isError } = useQuery({ queryKey: ['ytvideos'], queryFn: () => getChannelsVideos("date", 20, "channel"), staleTime: 60000 });

    if(isError) {
        return <Error error={error} />
    }

    if(isLoading) {
        return <Loading text="" />
    }
    return (
        <>
            <Input className="mb-10 px-2 outline-none" placeholder="Search Video @thecodemm" />
            <div className="flex flex-wrap justify-between items-center">
                {
                    data?.data?.items && data?.data?.items.length > 0 &&
                    data?.data?.items.map((video) => {
                        return <YTCard key={video.id.videoId}  video={video} />
                    })
                }
            </div>
        </>
    )
}