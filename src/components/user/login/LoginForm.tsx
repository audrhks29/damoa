"use client"

import { authService } from "@/firebase/firebaseInstance";
import { signInWithEmailAndPassword } from "firebase/auth";
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
          className="border border-[#999] w-[300px] h-10 indent-3 focus:border-orange-600 focus:outline-none"
          placeholder="이메일"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-[#999] w-[300px] h-10 indent-3 focus:border-orange-600 focus:outline-none"
          placeholder="패스워드"
          required
        />
      </div>

      <button
        type="submit"
        className="w-[300px] h-10 rounded-2xl bg-orange-600 text-white hover:bg-orange-400"
      >
        로그인
      </button>
    </form>
  )
}