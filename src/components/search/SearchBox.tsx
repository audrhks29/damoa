"use client"

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { AiOutlineSearch } from 'react-icons/ai';
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

  // search button click
  const handleSearch = (query: string) => {
    if (query === "") {
      alert("검색어를 입력하세요")
      return
    }
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
    <div
      className='relative sm:w-4/5 md:w-3/5 xl:w-1/2 flex items-center'
      style={props.styleProp}
    >
      <Link href={'/'}>
        {typeParams && queryParams && <Image
          width='50'
          height='50'
          alt=''
          src='/logo.png'
          priority={true}
          className='mr-6'
        />}
      </Link>

      {typeParams && queryParams && <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleEnterAtInput}
        placeholder="검색어를 입력하세요"
        className='w-full h-[50px] pl-6 min-[1350px]:pl-6 border border-orange-600 rounded-3xl pr-[70px] focus:border-linkPrimary focus:outline-none'
      />}

      {/* 메인화면 input */}
      {!typeParams && !queryParams && <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleEnterAtInput}
        placeholder="검색어를 입력하세요"
        className='w-full h-[50px] pl-6 border border-orange-600 rounded-3xl pr-[70px] focus:border-linkPrimary focus:outline-none'
      />}

      <button
        onClick={() => handleSearch(query)}
        className='w-[70px] h-[50px] absolute top-0 right-0 flex items-center justify-center'>
        <i className='text-[30px] text-orange-600'><AiOutlineSearch /></i>
      </button>
    </div>
  );
}