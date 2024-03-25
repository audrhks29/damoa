interface ScheduleListType {
  id: number;
  todo: string;
  isChecked: boolean;
  startTime: {
    hour: string;
    minute: string;
  }
  endTime: {
    hour: string;
    minute: string;
  }
}