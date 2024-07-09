"use client";

import { getTokenStream } from "@/actions/actions-offers";
import { useUser } from "@clerk/nextjs";
import { StreamVideoClient, User } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useInitializedStreamVideo = () => {
  const { user, isLoaded } = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);

  const handleCreateClientStreamVideo = async ({ userStream }: { userStream: User }) => {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
    if (!apiKey) throw new Error("Stream Video API Key is not set.");

    const client = new StreamVideoClient({
      apiKey,
      user: userStream,
      tokenProvider: userStream.id ? getTokenStream : undefined,
    });

    setVideoClient(client);
  };

  useEffect(() => {
    if (!isLoaded) return;
    let userStream: User;

    if (user?.id) {
      userStream = {
        id: user.id,
        name: user?.fullName || user.id,
        image: user.imageUrl,
      };
    } else {
      userStream = {
        id: uuidv4(),
        name: `Guest-${uuidv4()} `,
        type: "guest",
      };
    }

    handleCreateClientStreamVideo({ userStream });

    return () => {
      videoClient?.disconnectUser();
      setVideoClient(null);
    };
  }, [isLoaded, user?.id, user?.imageUrl, user?.fullName]);

  return {
    videoClient,
  };
};
