"use clinet";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../context/ModalContext";
import { useRouter } from "next/navigation";

export const useMeeting = () => {
  const router = useRouter();
  const { toggleModal } = useContext(ModalContext);
  const call = useCall();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const isMounted = useRef(false);
  const isParticipantOwnerCall = localParticipant && localParticipant.userId === call?.state.createdBy?.id;

  const handleStartRecording = async () => {
    try {
      await call?.startRecording();
    } catch (error) {
      console.log("Error starting recording", error);
    }
  };

  const handleEndedCall = async () => {
    try {
      await call?.endCall();
      router.push("/meeting/finalizar");
    } catch (error) {
      console.log("Error ending call", error);
    }
  };

  useEffect(() => {
    toggleModal();
    if (isParticipantOwnerCall && isMounted.current && call?.state.recording === false) handleStartRecording();
    return () => {
      isMounted.current = true;
    };
  }, []);

  return {
    isParticipantOwnerCall,
    handleEndedCall,
  };
};
