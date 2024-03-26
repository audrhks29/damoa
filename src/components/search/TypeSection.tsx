import menu from '@/assets/SearchTypeList.json'
import { useRouter, useSearchParams } from 'next/navigation';
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from '../ui/menubar';

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
    <Menubar className="h-20 border-none text-center text-[14px] sm:w-full lg:w-[800px] flex justify-between">
      <MenubarMenu>
        {menu.map(item => (
          <MenubarTrigger
            className='w-24 justify-center p-3 cursor-pointer h-8 leading-8'
            key={item.id}
            onClick={() => handleType(item.type)}
            style={{
              backgroundColor: typeParams === item.type ? '#0f172a' : 'white',
              color: typeParams === item.type ? 'white' : 'black',
              border: typeParams === item.type ? "none" : '1px solid #0f172a'
            }}
          >
            {item.name}
          </MenubarTrigger>
        ))}
      </MenubarMenu>
    </Menubar>
  )
}