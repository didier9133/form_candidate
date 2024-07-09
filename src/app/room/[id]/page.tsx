import { ViewRommMeeting } from "@/meeting-create/screen";

interface IPgaeRoomProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: IPgaeRoomProps) {
  const { id } = params;
  return {
    title: `Video chatroom ${id}`,
  };
}

export default function RoomPage({ params }: IPgaeRoomProps) {
  const { id } = params;
  return <ViewRommMeeting id={id} />;
}
