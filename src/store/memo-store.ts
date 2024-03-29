import { create } from 'zustand';

interface MemoStoreType {
  memoData: MemoType[],
  setMemoData: (data: MemoType[]) => void
}

const useMemoStore = create<MemoStoreType>(set => ({
  memoData: [],

  setMemoData: (data) => {
    set({ memoData: data })
  }
}));

export default useMemoStore;