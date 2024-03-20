export default function Loading() {
  return (
    <section className="h-[350px] sm:w-4/5 md:w-4/6 xl:w-3/4 border border-orange-600 p-6 rounded-3xl text-center flex flex-col justify-around">
      <h2 className="m-0 text-[20px] font-semibold">날씨 정보를 받아오는 중입니다.</h2>
      <div className="flex justify-center items-center">
        <div className="relative w-28 h-28 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white">

          </div>
        </div>
      </div>
      <h3>Loading</h3>
    </section>
  )
}