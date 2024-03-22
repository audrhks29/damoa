"use client"

import { authService } from "@/firebase/firebaseInstance";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
      <div className="flex flex-col items-center py-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sign_input"
          placeholder="이메일"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="sign_input"
          placeholder="패스워드"
          required
          autoComplete="off"
        />
      </div>

      <div>
        <Link href={'/signup'}
          className="w-[130px] h-10 rounded-2xl hover:text-white hover:bg-orange-400 mr-5 block">
          회원가입</Link>
        <button
          type="submit"
          className="w-[130px] h-10 rounded-2xl bg-orange-600 text-white hover:bg-orange-400"
        >로그인</button>
      </div>
    </form>
  )
}