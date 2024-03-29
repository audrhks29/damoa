"use client"
import TextEditor from "@/components/memo/TextEditor";

export default function AddMemo() {
  return (
    <main className="inner">
      <h2 className='text-center text-[50px] mb-5 text-primary'>Add Memo</h2>
      <TextEditor />
    </main>
  )
}