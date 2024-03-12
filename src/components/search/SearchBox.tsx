"use client"

import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useSearchResultDataStore from '@/store/searchType-store';
import useSearchAllStore from '@/store/searchAll-store';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchBox(
  props: { styleProp: React.CSSProperties | undefined }
) {
  const router = useRouter();
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  const [query, setQuery] = useState<string>(queryParams ? queryParams : "");

  useEffect(() => {
    // fix url
    const handleUrl = (query: string) => {
      if (typeParams) router.push(`/search?type=${typeParams}&query=${query}`);
    }

    if (queryParams) handleUrl(queryParams);
  }, [queryParams, typeParams, router])

  // search button click
  const handleSearch = (query: string) => {
    if (typeParams === "all" || !typeParams) {
      router.push(`/search?type=all&query=${query}`);
    } else {
      router.push(`/search?type=${typeParams}&query=${query}`);
    }
  };

  // press EnterKey
  const handleEnterAtInput
    = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") handleSearch(query)
    }

  // input change
  const handleChange
    = (event: { target: { value: React.SetStateAction<string> } }) => {
      setQuery(event.target.value);
    };

  return (
    <div className='relative w-[500px] mt-6'
      style={props.styleProp}
    >
      <Link href={'/'}>
        {typeParams && queryParams && <Image
          width='50'
          height='50'
          alt=''
          src='/logo.png'
          className='absolute top-0 -left-16'
          priority={true}
        />}
      </Link>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleEnterAtInput}
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