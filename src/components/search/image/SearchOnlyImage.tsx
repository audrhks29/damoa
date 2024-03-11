import Link from "next/link"
import SearchImageAll_Image from "./Image";

export default function SearchOnlyImage(props: { searchTypeResults: SearchImageType[] }) {
  // console.log(object);
  return (
    <ul className="w-[1200px] h-auto px-3 py-4 rounded-2xl border shadow flex">
      {props.searchTypeResults && props.searchTypeResults.map((result: SearchImageType, index: number) => {

        return (
          <li key={index} className='m-2'>
            {result.image_url !== ""
              &&
              <Link href={result.doc_url}
                className="relative block"
                style={{ width: result.width / 3, height: result.height / 3 }}
              >
                <SearchImageAll_Image
                  imgSrc={result.image_url}
                />
              </Link>
            }
          </li>
        )

      })}
    </ul >
  )
}