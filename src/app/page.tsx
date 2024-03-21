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

export default function Home() {
  return (
    <main className="inner">
      <div className="text-center text-6xl mt-40">DAMOA</div>

      <SearchBox
        styleProp={{ margin: "auto", marginTop: "20px" }} />
      <div className="flex sm:justify-center lg:justify-between mt-6 w-full items-start">
        {/* <Weather /> */}
      </div>
    </main>
  );
}


