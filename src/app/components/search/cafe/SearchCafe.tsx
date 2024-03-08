export default function SearchCafe(props: { searchTypeResults: SearchCafeType[] }) {
  return (
    <ul className="w-[800px]">
      {props.searchTypeResults.map((result: SearchCafeType) => {
        // const url = result.url.split('/')

        return (
          <>
            {/* <li key={result.url} className='py-4 px-3 mb-3 rounded-2xl border shadow'>
          <a href={result.url} target='_blank'>
            <p className='text-xs mb-3'>{`${url[0]}//${url[2]}`}</p>
            <p className='mb-2 hover:underline' dangerouslySetInnerHTML={{ __html: result.title }}></p>
            <p className='text-sm' dangerouslySetInnerHTML={{ __html: result.contents }}></p>
          </a>
        </li> */}
          </>
        )
      })}
    </ul>
  )
}