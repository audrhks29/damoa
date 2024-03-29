"use client"

import { Key, useCallback, useEffect, useState } from "react";

import { Button } from "../ui/button";
import { child, get, ref } from "firebase/database";
import { db } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store";
import MemoContent from "./MemoContent";
import useMemoStore from "@/store/memo-store";
import Link from "next/link";

export default function MemoList() {
  const { userInfo } = useUserStore();
  const { memoData, setMemoData } = useMemoStore();

  const readOne = useCallback(() => {
    const dbRef = ref(db);

    if (userInfo !== null) {
      get(child(dbRef, `/${userInfo.uid}/memo`))
        .then(snapshot => {
          const data = snapshot.val();
          if (data) {
            const memoArray: MemoType[] = Object.values(data).map((item: any) => ({
              id: item.id,
              text: item.text,
              date: item.date,
              time: item.time,
              title: item.title
            }));
            setMemoData(memoArray);
          } else {
            setMemoData([]);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [setMemoData, userInfo]);

  useEffect(() => {
    // db read
    readOne()
  }, [userInfo, readOne])

  return (
    <div>
      <div className="flex justify-end mb-6">
        <Link href='memo/add' className="block">
          <Button>추가</Button>
        </Link>
      </div>

      {memoData.length > 0 ? <div className="grid grid-cols-3 gap-4">
        {memoData.map((item: MemoType, index: Key | null | undefined) => {
          return (
            <MemoContent key={index} data={item} readOne={readOne} />
          )
        })}
      </div> : <div className="text-center text-[20px]">메모가 없습니다.</div>}
    </div>
  )
}