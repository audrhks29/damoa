import Link from "next/link"

export default function WebContents({ data }: { data: SearchWebType[] }) {
  return (
    data.map((result: SearchWebType, index: number) => {
      const url = result.url.split('/')

      return (
        <li
          key={index}
          className='py-4 px-3 mb-3 rounded-2xl border shadow'>
          <Link href={result.url} target='_blank'>
            <p className='text-xs mb-3'>{`${url[0]}//${url[2]}`}</p>
            <p
              className='search_result_p'
              dangerouslySetInnerHTML={{ __html: result.title }}></p>
            <p className='text-sm' dangerouslySetInnerHTML={{ __html: result.contents }}></p>
          </Link>
        </li>
      )
    })
  )
}