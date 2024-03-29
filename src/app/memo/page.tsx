import MemoList from "@/components/memo/MemoList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memo",
  description: "메모를 만들어보세요"
};

export default function MemoPage() {
  return (
    <main className="inner">
      <h2 className='text-center text-[50px] mb-5 text-primary'>DAMOA Memo</h2>
      <MemoList />
    </main>
  )
}