import React from 'react';
import dynamic from 'next/dynamic';

const SearchBox = dynamic(() => import('@/components/search/SearchBox'))

export default function Home() {
  return (
    <main className="inner">
      <div className="text-center text-primary text-6xl mt-40">DAMOA</div>
      <SearchBox
        styleProp={{ margin: "auto", marginTop: "20px" }} />
    </main>
  );
}


