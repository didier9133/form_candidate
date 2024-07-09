import dayjs from "dayjs";
import { videoCallHelpers } from "../helpers";
import { Call } from "@stream-io/video-react-sdk";

interface IUseVideoCall {
  call: Call | undefined;
}
export const useVideoCall = ({ call }: IUseVideoCall) => {
  const callStartedAt = call?.state.startsAt;
  const callIsInFuture = callStartedAt && dayjs(callStartedAt).isAfter(dayjs());
  const { timeReamingFn } = videoCallHelpers;
  const timeReamingFormatted = timeReamingFn(callStartedAt);

  return {
    callIsInFuture,
    timeReamingFormatted,
  };
};
