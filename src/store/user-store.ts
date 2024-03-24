import { authService } from '@/firebase/firebaseInstance';
import { create } from 'zustand';

interface UserStoreType {
  userInfo: any;
  getUserInfo: () => void;
  deleteUserInfo: () => void;
}

const useUserStore = create<UserStoreType>(set => ({
  userInfo: null,

  getUserInfo: () => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        set({ userInfo: user })
      }
    });
  },

  deleteUserInfo: () => {
    set({ userInfo: null })
  }
}));

export default useUserStore;