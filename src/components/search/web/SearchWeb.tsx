import Link from "next/link"

export default function SearchWeb(props: { searchTypeResults: SearchWebType[] }) {
  return (
    <ul className="w-[800px]">
      {props.searchTypeResults.map((result: SearchWebType, index: number) => {
        const url = result.url.split('/')

        return (
          <li
            key={index}
            className='py-4 px-3 mb-3 rounded-2xl border shadow'>
            <Link href={result.url} target='_blank'>
              <p className='text-xs mb-3'>{`${url[0]}//${url[2]}`}</p>
              <p
                className='mb-2 hover:underline text-orange-600'
                dangerouslySetInnerHTML={{ __html: result.title }}></p>
              <p className='text-sm' dangerouslySetInnerHTML={{ __html: result.contents }}></p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}