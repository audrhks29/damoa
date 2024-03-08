import Image from "next/image"
import Link from "next/link"

export default function SearchBlog(props: { searchTypeResults: SearchBlogType[] }) {
  return (
    <ul className="w-[800px]">
      {props.searchTypeResults.map((result: SearchBlogType) => {

        return (
          <>
            <li key={result.url} className='py-4 px-3 mb-3 rounded-2xl border shadow'>
              <Link href={result.url} target='_blank'>
                <p className='mb-3'>
                  <span className="mr-3">{result.blogname}</span>
                  <span className="text-[#888] text-xs">{result.datetime}</span>
                </p>

                <div className="flex">
                  <Image
                    className="rounded-3xl"
                    src={result.thumbnail}
                    width={120}
                    height={120}
                    alt=""
                    quality={100} />
                  <div className="w-[600px] ml-4 flex flex-col justify-between">
                    <p
                      className='mb-2 hover:underline text-orange-600'
                      dangerouslySetInnerHTML={{ __html: result.title }}></p>
                    <p
                      className='text-sm'
                      dangerouslySetInnerHTML={{ __html: result.contents }}></p>
                  </div>
                </div>
              </Link>
            </li>
          </>
        )
      })}
    </ul>
  )
}