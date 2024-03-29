import { Metadata } from 'next';
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: "Calendar",
  description: "일정을 만들어보세요"
};

const Todo = dynamic(() => import('@/components/calendar/Todo'), {
  ssr: false
})

export default function CalendarPage() {
  return (
    <div className='pb-5'>
      <h2 className='text-center text-[50px] mb-5 text-primary'>DAMOA Calendar</h2>
      <Todo />
    </div>
  )
}