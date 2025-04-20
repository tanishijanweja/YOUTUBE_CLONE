"use-client";

import { trpc } from "@/trpc/client";

export default function Home() {
  console.log("trpc object: ", trpc);
  const { data } = trpc.hello.useQuery({ text: "Tanishi" });
  return <div>Client component says: {data?.greeting}</div>;
}
