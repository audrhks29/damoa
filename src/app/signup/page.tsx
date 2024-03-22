import Link from "next/link"

import SignUpForm from "@/components/signUp/SignUpForm"


export default function SignUpPage() {
  return (
    <main className="inner text-center">
      <div className="w-[500px] m-auto mt-14 p-24 rounded-2xl shadow-xl">
        <Link href='/'>
          <h2 className="text-[50px] text-orange-600 mb-7">DAMOA</h2>
        </Link>
        <SignUpForm />
      </div>
    </main>
  )
}