import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Tanishi" });
  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
