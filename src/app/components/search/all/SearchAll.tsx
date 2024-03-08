import useSearchAllStore from "@/store/searchAll-store"
import SearchWeb from "../web/SearchWeb";
import SearchVclip from "../vclip/SearchVclip";

export default function SearchAll() {
  const { searchWebResults, searchVclipResults } = useSearchAllStore();
  // console.log(searchWebResults);
  console.log(searchVclipResults);
  return (
    <div className="w-[800px]">
      <SearchWeb searchTypeResults={searchWebResults} />
      <SearchVclip searchTypeResults={searchVclipResults} />
    </div>
  )
}