import Link from "next/link"
import SearchImageAll_Image from "./Image";

export default function SearchOnlyImage(props: { searchTypeResults: SearchImageType[] }) {
  // console.log(object);
  return (
    <div className="w-[1200px] px-3 py-4 rounded-2xl border shadow columns-5 md:columns-5 lg:columns-5 gap-4">
      {
        props.searchTypeResults && props.searchTypeResults.map((result: SearchImageType, index: number) => {
          if (result.image_url !== "")
            return (
              <div key={index}
                className="relative "
                style={{
                  height: "100px"
                }}
              >
                <SearchImageAll_Image
                  imgSrc={result.image_url}
                />
              </div>
            )
        })
      }
    </div>
  )
}