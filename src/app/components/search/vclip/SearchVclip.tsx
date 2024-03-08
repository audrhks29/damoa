import Image from "next/image"

export default function SearchVclip(props: { searchTypeResults: SearchVclipType[] }) {
  return (
    <ul className="w-[800px] ">
      {props.searchTypeResults.map((result: SearchVclipType) => {
        const url = result.url.split('/')
        // const
        return (
          <li
            key={result.url}
            className='py-4 px-3 mb-3 rounded-2xl border shadow'>
            <a href={result.url} target='_blank' className='w-full'>
              <p className='text-xs mb-3'>{`${url[0]}//${url[2]}`}</p>

              <div className="flex">
                <Image
                  src={result.thumbnail}
                  width={138}
                  height={78}
                  alt={result.title} />

                <div className="w-[600px] ml-4 whitespace-nowrap flex flex-col justify-between">
                  <p className='overflow-hidden text-ellipsis mb-2 hover:underline' dangerouslySetInnerHTML={{ __html: result.title }}></p>
                  <p className="text-[14px]">{result.author}</p>
                  <p className="text-[#888] text-[12px]">{result.datetime}</p>
                </div>

              </div>
            </a>
          </li>

        )
      })}
    </ul>
  )
}