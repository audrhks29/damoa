"use client"

import { authService } from "@/firebase/firebaseInstance";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import { useState } from "react";
import Link from "next/link";

export default function SignUpForm() {
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(authService, email, password)
      if (authService.currentUser) {
        await updateProfile(authService.currentUser, {
          displayName: name,
        })
      }
      alert("회원가입에 성공하였습니다. \n메인화면에서 로그인해주세요.")
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
        required
        className="mb-3"
      />

      <Label htmlFor="email">이메일</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        required
        className="mb-3"
      />

      <Label htmlFor="email">패스워드</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="패스워드"
        required
        autoComplete="off"
        className="mb-3"
      />

      <div className="flex mt-5 justify-center">
        <Button type="submit">
          <Link href='/signup' className="w-[88px]">회원가입</Link>
        </Button>
      </div>
    </form>
  )
}