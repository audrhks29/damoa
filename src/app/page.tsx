import React from 'react';
import dynamic from 'next/dynamic';

const SearchBox = dynamic(() => import('@/components/search/SearchBox'), { ssr: false })
import Loading from '@/components/weather/common/Loading';
const Weather = dynamic(() => import('@/components/weather/Weather'), {
  ssr: false,
  loading: () => <Loading />
})



export default function Home() {
  return (
    <main className="inner h-screen flex flex-col items-center justify-center">
      <div className="text-center text-6xl">DAMOA</div>
      <SearchBox
        styleProp={{ marginTop: 20 }} />
      <Weather />
    </main>
  );
}


