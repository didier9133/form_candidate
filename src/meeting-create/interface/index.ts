import dayjs from "dayjs";

export interface IFormCreate {
  whenStartMeeting: string | null;
  dateTimePicker: dayjs.Dayjs | null;
}
