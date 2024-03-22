"use client"

import { authService } from "@/firebase/firebaseInstance";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

import { useState } from "react";

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
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="sign_input"
          placeholder="이름"
          required
        />

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

      <button
        type="submit"
        className="w-[300px] h-10 mt-3 rounded-2xl bg-orange-600 text-white hover:bg-orange-400"
      >
        회원가입</button>
    </form>
  )
}