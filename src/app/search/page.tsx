"use client"

import useSearchResultDataStore from "@/store/searchResult-store"

import SearchBox from "../components/search/SearchBox"
import Paging from "../components/search/Paging"

export default function SearchResult() {
  const { searchResults } = useSearchResultDataStore()
  // const params = useSearchParams()

  // const limitParam = params.get('new');
  // console.log(limitParam);
  return (
    <main className="inner">
      <SearchBox
        styleProp={{ marginRight: 'auto' }} />

      <ul className="w-[800px]">
        {searchResults.map((result: SearchResultType) => {
          const url = result.url.split('/')

          return (
            <li key={result.url} className='py-4 px-3 mb-3 rounded-2xl border shadow'>
              <a href={result.url} target='_blank'>
                <p className='text-xs mb-3'>{`${url[0]}//${url[2]}`}</p>
                <p className='mb-2' dangerouslySetInnerHTML={{ __html: result.title }}></p>
                <p className='text-sm' dangerouslySetInnerHTML={{ __html: result.contents }}></p>
              </a>
            </li>
          )
        })}
      </ul>
      <Paging />
    </main>
  )
}