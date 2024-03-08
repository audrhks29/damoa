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

  // console.log(searchImageResults);
  console.log(searchBlogResults);
  // console.log(searchBookResults);
  // console.log(searchCafeResults);

  return (
    <div className="w-[800px]">
      <section>
        <h2>웹문서</h2>
        <SearchWeb searchTypeResults={searchWebResults} />
      </section>

      <section>
        <h2>동영상</h2>
        <SearchVclip searchTypeResults={searchVclipResults} />
      </section>

      <section>
        <h2>이미지</h2>
        <SearchImage searchTypeResults={searchImageResults} />
      </section>

      <section>
        <h2>블로그</h2>
        <SearchBlog searchTypeResults={searchBlogResults} />
      </section>

      <section>
        <h2>도서</h2>
        <SearchBook searchTypeResults={searchBookResults} />
      </section>

      <section>
        <h2>카페</h2>
        <SearchCafe searchTypeResults={searchCafeResults} />
      </section>

    </div>
  )
}