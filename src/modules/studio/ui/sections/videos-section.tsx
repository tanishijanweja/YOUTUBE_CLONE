"use client";

import { Infinitescroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const VideosSection = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <VideosSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

export const VideosSectionSuspense = () => {
  const [data, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return (
    <div>
      {JSON.stringify(data)}
      <Infinitescroll
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchNextPageError}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
