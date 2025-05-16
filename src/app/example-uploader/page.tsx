"use client";

import { UploadButton } from "@/lib/uploadthing";

export default function Home() {
  const videoId = "7d375737-8f4f-47ca-a966-8ebd5c45f9c2";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        console.log(videoId)
      <UploadButton
        endpoint="thumbnailUploader"
        input={{ videoId: "7d375737-8f4f-47ca-a966-8ebd5c45f9c2" }}
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
