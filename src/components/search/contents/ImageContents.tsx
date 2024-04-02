import Image from "next/image"
import Link from "next/link"

export default function ImageContents({ data }: { data: SearchImageType[] }) {
  return (
    <ul className="search_result_box flex justify-between px-3 py-4 rounded-2xl border shadow">
      {data.map((result: SearchImageType, index: number) => {

        return (
          <li key={index}>
            <div className='overflow-hidden rounded-3xl cursor-pointer'>
              <Link href={result.doc_url} target="_blank">
                {result.thumbnail_url !== "" && <Image
                  className='hover:scale-105 transition-all sm:w-28 md:w-36 lg:w-44 xl:w-[180px]'
                  src={result.thumbnail_url}
                  width={180}
                  height={180}
                  alt=""
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />}
              </Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}