"use client";

import { useInitializedStreamVideo } from "@/meeting-create/hooks";
import { CircularProgress } from "@mui/material";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { Suspense, useEffect, useState } from "react";

interface IStreamVideoClientProps {
  children: React.ReactNode;
}

export const StreamVideoClientProvider = ({ children }: IStreamVideoClientProps) => {
  const [isClient, setIsClient] = useState(false);
  const { videoClient } = useInitializedStreamVideo();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
              }}
              className="flex w-full items-center justify-center">
              <CircularProgress />
            </div>
          }>
          <StreamVideo client={videoClient as StreamVideoClient}>{children}</StreamVideo>
        </Suspense>
      ) : (
        <div
          style={{
            height: "100vh",
          }}
          className="flex w-full items-center justify-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
};
