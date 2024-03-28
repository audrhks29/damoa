import { create } from 'zustand';

interface ScheduleStoreType {
  scheduleData: ScheduleListType[],
  setScheduleData: (data: ScheduleListType[]) => void
}

const useScheduleStore = create<ScheduleStoreType>(set => ({
  scheduleData: [],

  setScheduleData: (data) => {
    set({ scheduleData: data })
  }
}));

export default useScheduleStore;