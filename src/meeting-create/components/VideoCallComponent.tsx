"use client";

import { Button, Skeleton } from "@mui/material";
import { notFound, useRouter } from "next/navigation";
import { StreamCall, StreamTheme, Call, CallControls, SpeakerLayout } from "@stream-io/video-react-sdk";
import { CallNotStartedOrEnded } from "../components";
import { ChatComponent } from ".";
import { memo } from "react";
import { Modal } from "@/components";
import { useMeeting, useVideoCall } from "../hooks";

interface IVideoCallComponentProps {
  call: Call | undefined;
  id: string;
  callNotFounded: boolean;
}

const MeetingUI = () => {
  const router = useRouter();
  const { isParticipantOwnerCall, handleEndedCall } = useMeeting();

  return (
    <>
      <SpeakerLayout />
      <CallControls
        onLeave={() => {
          router.push(`/`);
        }}
      />
      {isParticipantOwnerCall && (
        <Button variant="text" onClick={() => handleEndedCall()}>
          Finalizar llamada
        </Button>
      )}
    </>
  );
};

const MemoizedMeetingUI = memo(MeetingUI);

export const VideoCallComponent = ({ call, id, callNotFounded }: IVideoCallComponentProps) => {
  const { callIsInFuture, timeReamingFormatted } = useVideoCall({ call });
  if (callNotFounded) return notFound();
  if (callIsInFuture) return <CallNotStartedOrEnded timeReaming={timeReamingFormatted} />;

  return (
    <div
      className="flex w-full bg-white gap-3"
      style={{
        height: "calc(100vh - 8.5rem)",
      }}>
      <div className="flex w-3/4">
        {call ? (
          <StreamCall call={call}>
            <StreamTheme>
              <MemoizedMeetingUI />
            </StreamTheme>
          </StreamCall>
        ) : (
          <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
        )}
      </div>
      <ChatComponent id={id} />

      <Modal
        title="¡Atencion!"
        content="Esta llamada está siendo grabada de acuerdo con nuestras políticas internas."
      />
    </div>
  );
};
