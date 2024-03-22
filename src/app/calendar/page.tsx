import dynamic from 'next/dynamic'

// const Calendar =dynamic(()=>import ("@/components/calendar/Calendar"))
const Calendar = dynamic(() => import('@/components/calendar/Calendar'), {
  ssr: false
})
export default function CalendarPage() {
  return (
    <div>
      <h2 className='text-center text-[50px] mb-3 text-orange-600'>DAMOA Calendar</h2>
      <Calendar />
    </div>
  )
}