import { ChangeEvent, useMemo, useState } from 'react';

import { db } from '@/firebase/firebaseInstance';
import useMemoStore from '@/store/memo-store';
import useUserStore from '@/store/user-store';
import { ref, set } from 'firebase/database';

const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import dynamic from 'next/dynamic';

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

export default function TextEditor() {
  const { userInfo } = useUserStore()
  const { memoData } = useMemoStore();

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [values, setValues] = useState('');

  const writeData = () => {
    const confirmMessage = confirm("등록하시겠습니까?")
    if (confirmMessage) {
      let last = memoData.length !== 0 ? memoData[memoData.length - 1].id + 1 : 0;

      const date = new Date()
      const nowDate = moment(date).format("YYYY년 MM월 DD일")
      const nowTime = moment(date).format("HH시 mm분")

      const memo = {
        id: last,
        text: values,
        title: title,
        date: nowDate,
        time: nowTime
      };
      set(ref(db, `${userInfo.uid}/memo/${last}`), memo);
      router.push('/memo')
    }
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

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

  return (
    <div>
      <Input type="text"
        value={title}
        onChange={handleTitle}
        required
        placeholder='제목을 입력해주세요'
      />

      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={setValues}
        placeholder='내용을 입력해주세요'
        className='min-h-80'
      />

      <div className='flex justify-end mt-5'>
        <Button
          onClick={writeData}
        >등록</Button>
      </div>

    </div>
  )
}