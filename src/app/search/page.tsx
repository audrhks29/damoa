import useSearchResultDataStore from "@/store/searchResult-store"

export default function SearchResult() {
  const { searchResults } = useSearchResultDataStore()

  return (
    <div>
      <ul>
        {searchResults.map((result: SearchResultType) => (
          <li key={result.url}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}