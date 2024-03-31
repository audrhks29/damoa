"use client"

import { authService } from "@/firebase/firebaseInstance";
import { signInWithEmailAndPassword } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data;
    try {
      data = await signInWithEmailAndPassword(authService, email, password)
      if (data) router.push('/')
    } catch (error) {
      alert("아이디와 비밀번호가 일치하지 않습니다.")
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        required
        className="mb-3"
      />

      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="패스워드"
        required
        autoComplete="off"
        className="mb-3"
      />

      <Link
        href='/account'
        className="text-[12px] hover:font-bold">비밀번호를 잃어버렸습니다.</Link>
      <div className="flex mt-5 justify-center">
        <Button asChild className="mr-5">
          <Link href='/signup' className="w-[88px]">회원가입</Link>
        </Button>
        <Button type="submit" className="w-[88px]">로그인</Button>
      </div>
    </form>
  )
}