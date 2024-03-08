"use client"

import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useSearchResultDataStore from '@/store/searchResult-store';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox(props) {
  const router = useRouter()
  const params = useSearchParams()

  const { fetchSearchResultData } = useSearchResultDataStore()

  const queryParams = params.get('query')
  const pageParams = params.get('page')

  const [query, setQuery] = useState(queryParams);

  useEffect(() => {
    if (queryParams) handleUrl(queryParams)
  }, [queryParams, pageParams])

  const handleUrl = (query: string) => {
    const page = pageParams
    fetchSearchResultData(query, page);
    router.push(`/search?query=${query}&page=${page}`)
  }

  const handleSearch = (query: string) => {
    const page = 1;
    fetchSearchResultData(query, page);
    router.push(`/search?query=${query}&page=${page}`)
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
        onClick={() => handleSearch(query)}
        className='w-[70px] h-[50px] absolute top-0 right-0 flex items-center justify-center'>
        <i className='text-[30px] text-orange-600'><AiOutlineSearch /></i>
      </button>
    </div>
  );
}