"use client";

import { useStreamVideoClient, Call } from "@stream-io/video-react-sdk";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useViewRoomMeeting = ({ id }: { id: string }) => {
  const [isLoadingCall, setIsLoadingCall] = useState<boolean>(false);
  const [callNotFounded, setCallNotFounded] = useState<boolean>(false);
  const [call, setCall] = useState<Call>();
  const client = useStreamVideoClient();
  const router = useRouter();

  const handleClickJoinMeeting = async () => {
    if (!client) return;
    setIsLoadingCall(true);
    setCallNotFounded(false);
    const { calls } = await client?.queryCalls({
      filter_conditions: {
        id,
      },
      watch: true,
    });

    if (calls[0] && calls[0].state.endedAt) {
      router.push("/meeting/finalizar");
      return;
    }

    if (calls.length > 0 && calls[0]) {
      const call = calls[0];
      await call.join();
      setCall(call);
      return;
    }
    setCallNotFounded(true);
  };

  useEffect(() => {
    if (!client) return;
    // Listen for call ended
    client.on("call.ended", event => {
      if (event.call.id === id) {
        router.push("/meeting/finalizar");
      }
    });
    // Clean up
    return () => {
      client.off("call.ended", _ => {});
    };
  }, [call]);

  return {
    call,
    isLoadingCall,
    callNotFounded,
    handleClickJoinMeeting,
  };
};
