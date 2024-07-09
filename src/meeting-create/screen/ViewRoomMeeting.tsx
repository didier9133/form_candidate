"use client";

import { Button } from "@mui/material";
import { useViewRoomMeeting } from "../hooks";
import { VideoCallComponent } from "../components";
import { ModalProvider } from "@/meeting-create/context/ModalProvider";

interface IRoomPageProps {
  id: string;
}

export const ViewRommMeeting = ({ id }: IRoomPageProps) => {
  const { call, isLoadingCall, callNotFounded, handleClickJoinMeeting } = useViewRoomMeeting({ id });

  return (
    <>
      {!isLoadingCall ? (
        <Button sx={{ maxWidth: "300px" }} variant="contained" onClick={handleClickJoinMeeting}>
          Unirse a la llamada
        </Button>
      ) : (
        <div className="flex w-full bg-white">
          <ModalProvider>
            <VideoCallComponent call={call} id={id} callNotFounded={callNotFounded} />
          </ModalProvider>
        </div>
      )}
    </>
  );
};
