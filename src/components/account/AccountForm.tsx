"use client"

import { authService, db } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store";
import { deleteUser, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { ref, remove } from "firebase/database";

export default function AccountForm() {
  const [settingState, setSettingState] = useState("");

  const [email, setEmail] = useState('');
  const { userInfo, deleteUserInfo } = useUserStore();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(authService, email);
      alert("가입하신 이메일로 비밀번호 재설정 메일을 전송하였습니다.");
      deleteUserInfo();
      router.push("/");
    } catch (error) {
      alert("아이디와 비밀번호가 일치하지 않습니다.")
    }
  }

  const deleteAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const confirmMessage = confirm("계정을 탈퇴하시겠습니까?")
    const auth = getAuth()
    const user = auth.currentUser
    if (confirmMessage && user) {
      try {
        deleteUser(user);
        const removeData = () => {
          remove(ref(db, `/${userInfo.uid}`))
        }
        removeData()
        alert("삭제되었습니다.");
        deleteUserInfo()
        router.push('/')
      } catch (error) {
        alert("error");
      }
    }
  }

  return (
    <React.Fragment>
      {settingState === "" && <Button variant="outline"
        className='w-24 h-24 mr-3'
        onClick={() => setSettingState("password")}>
        비밀번호<br />재설정
      </Button>}

      {settingState === "" && userInfo
        && <Button
          className="w-24 h-24"
          onClick={(e) => deleteAuth(e)}>
          회원<br />탈퇴
        </Button>}

      {settingState === "password" && <form onSubmit={onSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
          className="mb-3"
        />

        <div className="flex mt-5 justify-center">
          <Button type="submit" className="w-[88px]">이메일 전송</Button>
        </div>
      </form>}

    </React.Fragment>
  )
};
