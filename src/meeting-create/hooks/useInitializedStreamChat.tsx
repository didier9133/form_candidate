"use client";

import { getTokenStream } from "@/actions/actions-offers";
import { useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Channel, DefaultGenerics, StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import { videoCallHelpers } from "../helpers";

const time = dayjs().format("DD/MM/YYYY");

export const useInitializedStreamChat = ({ id }: { id: string }) => {
  const { sleep } = videoCallHelpers;
  const { user, isLoaded } = useUser();
  const [chatClient, setChatClient] = useState<StreamChat<DefaultGenerics> | null>(null);
  const [channelChat, setChannelChat] = useState<Channel<DefaultGenerics> | undefined>();

  const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;

  const watchChannel = async () => {
    const channel = chatClient?.channel("livestream", id, {
      name: `Livestream-${time}`,
    });

    await channel?.watch();
    setChannelChat(channel);
  };

  const handleCreateChatStream = async () => {
    if (!apiKey) throw new Error("Stream Video API Key is not set.");

    const client = new StreamChat<DefaultGenerics>(apiKey);

    if (!user) {
      const id = uuidv4();
      await client.connectUser({ id, name: `Guest-${time}`, role: "guest" }, () => getTokenStream(id));
    } else {
      await client.connectUser({ id: user.id, name: user.fullName || user.id }, getTokenStream);
    }

    await sleep(1000);
    setChatClient(client);
  };

  useEffect(() => {
    if (!isLoaded) return;
    handleCreateChatStream();

    return () => {
      chatClient?.disconnectUser();
      setChatClient(null);
      setChatClient(null);
    };
  }, [isLoaded, user?.id]);

  useEffect(() => {
    chatClient && watchChannel();
  }, [chatClient, watchChannel]);

  return {
    chatClient,
    channelChat,
  };
};
