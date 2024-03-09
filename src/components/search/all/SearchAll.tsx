import useSearchAllStore from "@/store/searchAll-store"
import SearchWeb from "../web/SearchWeb";
import SearchVclip from "../vclip/SearchVclip";
import SearchImage from "../image/SearchImage";
import SearchBlog from "../blog/SearchBlog";
import SearchBook from "../book/SearchBook";
import SearchCafe from "../cafe/SearchCafe";

export default function SearchAll() {
  const {
    searchWebResults,
    searchVclipResults,
    searchImageResults,
    searchBlogResults,
    searchBookResults,
    searchCafeResults
  } = useSearchAllStore();
  return (
    <div className="w-[800px]">
      {searchWebResults.length > 0 && <section>
        <h2>웹문서</h2>
        <SearchWeb searchTypeResults={searchWebResults} />
      </section>}

      {searchVclipResults.length > 0 && <section>
        <h2>동영상</h2>
        <SearchVclip searchTypeResults={searchVclipResults} />
      </section>}

      {searchImageResults.length > 0 && <section>
        <h2>이미지</h2>
        <SearchImage searchTypeResults={searchImageResults} />
      </section>}

      {searchBlogResults.length > 0 && <section>
        <h2>블로그</h2>
        <SearchBlog searchTypeResults={searchBlogResults} />
      </section>}

      {searchBookResults.length > 0 && <section>
        <h2>도서</h2>
        <SearchBook searchTypeResults={searchBookResults} />
      </section>}

      {searchCafeResults.length > 0 && <section>
        <h2>카페</h2>
        <SearchCafe searchTypeResults={searchCafeResults} />
      </section>}

    </div >
  )
}