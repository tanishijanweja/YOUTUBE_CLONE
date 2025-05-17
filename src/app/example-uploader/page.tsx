"use client";

import { UploadButton } from "@/lib/uploadthing";

export default function Home() {
  const videoId = "439c86ba-6ee4-4649-a5d8-4778fb8df9a2";
  console.log(videoId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="thumbnailUploader"
        input={{ videoId }}
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
