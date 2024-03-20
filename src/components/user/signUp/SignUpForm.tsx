"use client"

import { authService } from "@/firebase/firebaseInstance";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let data;
    try {
      data = await createUserWithEmailAndPassword(authService, email, password)
      alert("회원가입에 성공하였습니다.")
    } catch (error) {
      console.log(error);
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
        회원가입</button>
    </form>
  )
}