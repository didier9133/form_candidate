"use client";

import { Chat, ChannelHeader, VirtualizedMessageList, MessageInput, Window, Channel } from "stream-chat-react";
import { useInitializedStreamChat } from "../hooks/useInitializedStreamChat";
import { Skeleton } from "@mui/material";

export const ChatComponent = ({ id }: { id: string }) => {
  const { chatClient, channelChat } = useInitializedStreamChat({ id });

  return (
    <>
      {chatClient && channelChat ? (
        <Chat client={chatClient}>
          <Channel channel={channelChat}>
            <Window>
              <ChannelHeader />
              <VirtualizedMessageList />
              <MessageInput />
            </Window>
          </Channel>
        </Chat>
      ) : (
        <Skeleton variant="rectangular" width="25%" height="100%" />
      )}
    </>
  );
};
