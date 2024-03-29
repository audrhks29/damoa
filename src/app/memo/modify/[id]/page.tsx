"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store";
import { child, get, ref, update } from "firebase/database";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];

export default function ModifyMemo(props: { params: { id: number } }) {
  const [values, setValues] = useState("");
  const [title, setTitle] = useState("");
  const { userInfo } = useUserStore()

  const router = useRouter()

  const readOne = useCallback(() => {
    const dbRef = ref(db);

    if (userInfo !== null) {
      get(child(dbRef, `/${userInfo.uid}/memo/${props.params.id}`))
        .then(snapshot => {
          const data = snapshot.val();
          if (data) {
            setValues(data.text);
            setTitle(data.title)
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [props.params.id, userInfo]);

  const updateData = () => {
    const confirmMessage = confirm('수정하시겠습니까?');
    if (confirmMessage) {
      const schedule = {
        title,
        text: values
      };
      update(ref(db, `/${userInfo.uid}/memo/${props.params.id}`), schedule);
      router.push('/memo')
    }
  };

  useEffect(() => {
    readOne()
  }, [readOne])

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  return (
    <main className="inner">
      <h2 className='text-center text-[50px] mb-5 text-primary'>Modify Memo</h2>
      <Input type="text"
        value={title}
        onChange={handleTitle}
        required
      />

      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={values}
        onChange={setValues}
        className='min-h-80'
      />

      <div className='flex justify-end mt-5'>
        <Button
          onClick={updateData}
        >완료</Button>
      </div>
    </main>
  )
}