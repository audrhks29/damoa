import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignUpForm from "@/components/signUp/SignUpForm"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "DAMOA 계정을 만들어보세요"
};

export default function SignUpPage() {
  return (
    <main className="inner text-center">
      <Card className="w-[500px] m-auto mt-14 p-24">
        <CardHeader>
          <CardTitle>DAMOA</CardTitle>
          <CardDescription>DAMOA 계정 회원가입</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </main>
  )
}