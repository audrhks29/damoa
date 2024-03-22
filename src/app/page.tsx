import React from 'react';
import dynamic from 'next/dynamic';

import Loading from '@/components/weather/common/Loading';

const SearchBox = dynamic(() => import('@/components/search/SearchBox'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="inner">
      <div className="text-center text-6xl mt-40 text-orange-600">DAMOA</div>
      <SearchBox
        styleProp={{ margin: "auto", marginTop: "20px" }} />
    </main>
  );
}


