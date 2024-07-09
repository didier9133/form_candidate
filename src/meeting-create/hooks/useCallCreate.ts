import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useCallCreate = () => {
  const [call, setCall] = useState<Call>();
  const [isLoading, setIsLoading] = useState(false);
  const client = useStreamVideoClient();

  const handleCreateMeeting = async ({ startAt }: { startAt: string | undefined }) => {
    setIsLoading(true);
    setCall(undefined);
    try {
      const id = uuidv4();
      const call = client?.call("default", id);
      const confiObj = startAt ? { starts_at: startAt } : {};

      await call?.getOrCreate({
        data: confiObj,
      });
      setCall(call);
    } catch (error) {
      setCall(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    call,
    isLoading,
    handleCreateMeeting,
  };
};
