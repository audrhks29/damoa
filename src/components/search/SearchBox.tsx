"use client"

import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useSearchResultDataStore from '@/store/searchType-store';
import useSearchAllStore from '@/store/searchAll-store';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox(
  props: { styleProp: React.CSSProperties | undefined }
) {
  const router = useRouter();
  const params = useSearchParams();

  const { fetchSearchTypeData } = useSearchResultDataStore();
  const { fetchSearchData } = useSearchAllStore();

  const typeParams = params.get('type');
  const queryParams = params.get('query');
  const pageParams = params.get('page');

  const [query, setQuery] = useState<string>(queryParams ? queryParams : "");

  useEffect(() => {
    // fix url
    const handleUrl = (query: string) => {
      const page = Number(pageParams);
      if (typeParams === "all" || !typeParams) {
        fetchSearchData(query, page);
      }
      if (page && typeParams !== "all" && typeParams) fetchSearchTypeData(typeParams, query, page);
      if (typeParams) router.push(`/search?type=${typeParams}&query=${query}&page=${page}`);
    }

    if (queryParams) handleUrl(queryParams);
  }, [queryParams, pageParams, typeParams, fetchSearchTypeData, router, fetchSearchData])



  // search button click
  const handleSearch = (query: string) => {
    const page = 1;
    if (typeParams === "all" || !typeParams) {
      fetchSearchData(query, page);
      router.push(`/search?type=all&query=${query}&page=${page}`);
    } else {
      fetchSearchTypeData(typeParams, query, page);
      router.push(`/search?type=${typeParams}&query=${query}&page=${page}`);
    }
  };

  // input change
  const handleChange = (
    event: {
      target: {
        value: React.SetStateAction<string>;
      }
    }) => {
    setQuery(event.target.value);
  };

  return (
    <div className='relative w-[500px] mt-6'
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