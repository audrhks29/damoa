import create from 'zustand';

interface UserStoreType {
  userInfo: any;
  getUserInfo: (user: any) => void;
  deleteUserInfo: () => void;
}

const useUserStore = create<UserStoreType>(set => ({
  userInfo: null,

  getUserInfo: (user: any) => {
    set({ userInfo: user })
  },

  deleteUserInfo: () => {
    set({ userInfo: null })
  }
}));

export default useUserStore;