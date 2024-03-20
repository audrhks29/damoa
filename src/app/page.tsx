import React from 'react';
import dynamic from 'next/dynamic';

import Loading from '@/components/weather/common/Loading';
const SearchBox = dynamic(() => import('@/components/search/SearchBox'), {
  ssr: false
})

const Weather = dynamic(() => import('@/components/weather/Weather'), {
  ssr: false,
  loading: () => <Loading />
})
import Login from '@/components/user/login/container/Login';

export default function Home() {
  return (
    <main className="inner h-screen flex flex-col items-center justify-center">
      <div className="text-center text-6xl">DAMOA</div>
      <SearchBox
        styleProp={{ marginTop: 20 }} />
      <div className="flex sm:justify-center lg:justify-between mt-6 w-full items-start">
        <Weather />
        <Login />
      </div>
    </main>
  );
}


