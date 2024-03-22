import menu from '@/assets/SearchTypeList.json'
import { useRouter, useSearchParams } from 'next/navigation';

export default function TypeSection() {
  const params = useSearchParams()
  const router = useRouter()

  const typeParams = params.get('type')
  const queryParams = params.get('query');

  // click type button
  const handleType = (type: string) => {
    router.push(`/search?type=${type}&query=${queryParams}`);
  }

  return (
    <ul className='sm:w-full lg:w-[800px] flex justify-between py-6'>
      {menu.map(item => (
        <li
          className='border hover:border-orange-600 w-24 text-center rounded-2xl cursor-pointer h-8 leading-8 text-[14px]'
          key={item.id}
          onClick={() => handleType(item.type)}
          style={{
            borderColor: typeParams == item.type ? '#EA580C' : '',
            fontWeight: typeParams == item.type ? 'bold' : '',
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}