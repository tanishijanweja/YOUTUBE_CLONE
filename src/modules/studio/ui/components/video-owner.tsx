import { UserAvatar } from "@/components/user-avatar";
import { VideoGetOneOutput } from "@/modules/videos/types";
import Link from "next/link";

interface VideoOwnerProps {
  user: VideoGetOneOutput["users"];
  videoId: string;
}

export const VideoOwner = ({ user, videoId }: VideoOwnerProps) => {
  return (
    <div className="flex items-center sm:items-start justify-between sm:justify-start gap-3 min-w-0">
      <Link href={`/users/${user.id}`}>
        <div className="flex items-center gap-3 min-w-0">
            <UserAvatar size="lg" imageUrl={user.imageUrl} name={user.name} />
        </div>
      </Link>
    </div>
  );
};
