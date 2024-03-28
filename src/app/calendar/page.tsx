import dynamic from 'next/dynamic'

const Todo = dynamic(() => import('@/components/calendar/Todo'), {
  ssr: false
})

export default function CalendarPage() {
  return (
    <div className='pb-5'>
      <h2 className='text-center text-[50px] mb-3 text-primary'>DAMOA Calendar</h2>
      <Todo />
    </div>
  )
}