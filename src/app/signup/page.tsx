import dynamic from "next/dynamic"

const SignUpForm = dynamic(() => import("@/components/signUp/SignUpForm"), {
  ssr: false
})

export default function SignUpPage() {
  return (
    <main className="inner text-center pt-32">
      <h2 className="text-[34px]">DAMOA</h2>
      <SignUpForm />
    </main>
  )
}