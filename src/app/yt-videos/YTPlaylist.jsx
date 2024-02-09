import React from 'react'
import YTCard from './YTCard'
import { useQuery } from '@tanstack/react-query';
import { getChannelsPlaylist } from '@/services/api';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { Button } from '@/components/ui/button';

export default function YTPlaylist() {
    const { isLoading, data, error, isError, refetch } = useQuery({ queryKey: ['ytChannels'], queryFn: () => getChannelsPlaylist("date", 20, "playlist"), staleTime: 86400000, retry: 1, refetchInterval: 86400000 });

    if (isError) {
        return <Error error={error} />
    }

    if (isLoading) {
        return <Loading text="Please wait for a second, your playlist are fetching from Youtube API..." />
    }

    return (
        <>
            <div className="mb-10">
                <p className='mb-5 font-thin text-lightGray'><span className='font-bold'>Note:</span> Updated Data will be fetched automatically in a day only, Click Update to refetched now</p>
                <Button onClick={refetch} variant="outline" className="border-active text-active">Update</Button>
            </div>
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