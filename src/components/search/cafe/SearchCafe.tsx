import Image from "next/image";
import Link from "next/link"

export default function SearchCafe(props: { searchTypeResults: SearchCafeType[] }) {
  return (
    <ul className="w-[800px]">
      {props.searchTypeResults.map((result: SearchCafeType, index: number) => {
        const date = new Date(result.datetime);
        const formattedDate = date.getFullYear() + "년 " + (date.getMonth() + 1) + "월 " + date.getDate() + "일";

        return (
          <li key={index} className='py-4 px-3 mb-3 rounded-2xl border shadow'>
            <Link href={result.url} target='_blank'>
              <p className='mb-3'>
                <span className="mr-3">{result.cafename}</span>
                <span className="text-[#888] text-xs">{formattedDate}</span>
              </p>

              <div className="flex">
                {result.thumbnail !== "" &&
                  <Image
                    className="rounded-3xl"
                    src={result.thumbnail}
                    width={120}
                    height={120}
                    alt={result.title}
                    quality={100}
                  />}
                <div className="w-[600px] ml-4">
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
        )
      })}
    </ul>
  )
}