"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: "Tanishi" });
  return(
     <div>
      Client component says: { data?.greeting }
      </div>
    )
}
