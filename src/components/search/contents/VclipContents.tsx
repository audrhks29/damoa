import Image from "next/image"
import Link from "next/link"

export default function VclipContents({data}:{data:SearchVclipType[]}){
  return(
    data.map((result: SearchVclipType, index: number) => {
      const url = result.url.split('/')

      return (
        <li
          key={index}
          className='py-4 px-3 mb-3 rounded-2xl border shadow'>
          <Link href={result.url} target='_blank' className='w-full'>
            <p className='text-xs mb-3'>{`${url[0]}//${url[2]}`}</p>

            <div className="flex">
              {result.thumbnail !== "" 
              && <Image
                src={result.thumbnail}
                width={138}
                height={78}
                alt={result.title}
                quality={100} />}

              <div className="w-[600px] ml-4 whitespace-nowrap flex flex-col justify-between">
                <p
                  className='overflow-hidden text-ellipsis mb-2 hover:underline text-orange-600'
                  dangerouslySetInnerHTML={{ __html: result.title }}></p>
                <p className="text-sm">{result.author}</p>
                <p className="text-[#888] text-xs">{result.datetime}</p>
              </div>

            </div>
          </Link>
        </li>
      )
    })
  )
}