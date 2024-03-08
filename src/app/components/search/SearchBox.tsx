"use client"

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useSearchResultDataStore from '@/store/searchResult-store';
import { useRouter } from 'next/navigation';


const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default function SearchBox(props) {
  const router = useRouter()
  const { fetchSearchResultData } = useSearchResultDataStore()

  // const params = useSearchParams()
  // const queryParams = params.get('query');

  const [query, setQuery] = useState('');

  const handleSearch = (API_KEY: string, query: string) => {
    fetchSearchResultData(API_KEY, query);
    router.push(`/search?query=${query}`)
  };

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setQuery(event.target.value);
  };

  return (
    <div className='relative w-[500px] my-6'
      style={props.styleProp}
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="검색어를 입력하세요"
        className='w-[500px] h-[50px] pl-6 border border-orange-600 rounded-3xl pr-[70px] focus:border-blue-500 focus:outline-none'
      />
      <button
        onClick={() => handleSearch(API_KEY, query)}
        className='w-[70px] h-[50px] absolute top-0 right-0 flex items-center justify-center'>
        <i className='text-[30px] text-orange-600'><AiOutlineSearch /></i></button>
    </div>
  );
}