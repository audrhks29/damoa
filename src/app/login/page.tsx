import LoginForm from "@/components/login/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "DAMOA 계정으로 로그인 하세요"
};

export default function LoginPage() {

  return (
    <main className="inner text-center">
      <Card className="w-[500px] m-auto mt-14 p-24">
        <CardHeader>
          <CardTitle>DAMOA</CardTitle>
          <CardDescription>DAMOA 계정 로그인</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  )
}