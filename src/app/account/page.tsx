import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AccountForm from "@/components/account/AccountForm";
export const metadata: Metadata = {
  title: "Account",
  description: "DAMOA 계정 설정"
};

export default function Account() {
  return (
    <main className="inner text-center">
      <Card className="w-[500px] m-auto mt-14 p-24">
        <CardHeader>
          <CardTitle>DAMOA</CardTitle>
          <CardDescription>DAMOA 계정 설정</CardDescription>
        </CardHeader>
        <CardContent>
          <AccountForm />
        </CardContent>
      </Card>
    </main>
  )
}