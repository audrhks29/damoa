import Image from "next/image"
import Link from "next/link"

export default function SearchBook(props: { searchTypeResults: SearchBookType[] }) {
  return (
    <ul className="w-[800px]">
      {props.searchTypeResults && props.searchTypeResults.map((result: SearchBookType, index: number) => {
        const date = new Date(result.datetime);
        const formattedDate = date.getFullYear() + "년 " + (date.getMonth() + 1) + "월 " + date.getDate() + "일";

        return (
          <li key={index} className='py-4 px-3 mb-3 rounded-2xl border shadow'>
            <Link href={result.url} target='_blank'>
              <div className="flex">

                {result.thumbnail !== "" && <Image
                  src={result.thumbnail}
                  height={120}
                  width={100}
                  alt=""
                  quality={100}
                  className="w-auto h-auto"
                  priority={true}
                />}

                <div className='text-sm flex flex-col justify-between ml-4'>
                  <p className='mb-2 text-base hover:underline text-orange-600'>{result.title}</p>
                  <div>
                    <p>
                      <span className="text-[#888]">저자&nbsp;&nbsp;</span>
                      {result.authors.map((item, idx) => (
                        idx !== result.authors.length - 1
                          ? <span key={idx}>{item}, </span>
                          : <span key={idx}>{item}</span>
                      ))}
                    </p>
                    {result.translators.length > 0
                      && <p>
                        <span className="text-[#888]">번역&nbsp;&nbsp;</span>
                        {result.translators.map((item, idx) => (
                          idx !== result.translators.length - 1
                            ? <span key={idx}>{item}, </span>
                            : <span key={idx}>{item}</span>
                        ))}
                      </p>}
                    <p>
                      <span className="text-[#888]">출간&nbsp;&nbsp;</span>
                      <span>{formattedDate}</span>
                    </p>
                    <p>
                      <span className="text-[#888]">가격&nbsp;&nbsp;</span>
                      <span
                        className="mr-1"
                        style={{
                          textDecoration: result.sale_price !== -1 ? "line-through" : "",
                          color: result.sale_price !== -1 ? "#888" : ""
                        }}>
                        {result.price.toLocaleString()}원</span>
                      {result.sale_price !== -1
                        && <span>{result.sale_price.toLocaleString()}원</span>}
                    </p>
                    <p>
                      <span className="text-[#888]">출판&nbsp;&nbsp;</span>
                      <span>{result.publisher}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}