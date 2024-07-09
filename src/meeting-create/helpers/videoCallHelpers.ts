import dayjs from "dayjs";

const sleep = (m: number): Promise<void> => new Promise(r => setTimeout(r, m));

const timeReamingFn = (callStartedAt: Date | undefined) => {
  if (!callStartedAt) return "0 dia(s) 0 hora(s) 0 minuto(s)";

  const currentTime = dayjs();
  const timeRemaining = callStartedAt ? dayjs(callStartedAt).diff(currentTime, "minute") : 0;
  const daysRemaining = Math.floor(timeRemaining / (24 * 60));
  const hoursRemaining = Math.floor((timeRemaining % (24 * 60)) / 60);
  const minutesRemaining = timeRemaining % 60;
  return `${daysRemaining} dia(s) ${hoursRemaining} hora(s) ${minutesRemaining} minuto(s)`;
};

export default {
  timeReamingFn,
  sleep,
};
