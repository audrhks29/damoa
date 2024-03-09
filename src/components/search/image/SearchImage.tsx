import Image from "next/image"
import Link from "next/link"

export default function SearchImage(props: { searchTypeResults: SearchImageType[] }) {
  return (
    <ul className="w-[800px] flex justify-between px-3 py-4 rounded-2xl border shadow">
      {props.searchTypeResults && props.searchTypeResults.map((result: SearchImageType, index: number) => {

        return (
          <li key={index}>
            <div className='overflow-hidden rounded-3xl w-[180px] cursor-pointer'>
              <Link href={result.doc_url} target="_blank">
                <Image
                  className='hover:scale-105 transition-all'
                  src={result.thumbnail_url}
                  width={180}
                  height={180}
                  alt=""
                  quality={100} />
              </Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}