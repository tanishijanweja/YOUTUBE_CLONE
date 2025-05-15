// import { createRouteHandler } from "uploadthing/next";

// import { ourFileRouter } from "./core";

// // Export routes for Next App Router
// export const { GET, POST } = createRouteHandler({
//   router: ourFileRouter,

//   // Apply an (optional) custom config:
//   // config: { ... },
// });

import { NextRequest } from "next/server";
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

const handler = createRouteHandler({
  router: ourFileRouter,
});

// Wrap POST handler with error logging
export async function POST(request: NextRequest) {
  try {
    return await handler.POST(request);
  } catch (error) {
    console.error("Uploadthing POST error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Wrap GET handler with error logging (if needed)
export async function GET(request: NextRequest) {
  try {
    return await handler.GET(request);
  } catch (error) {
    console.error("Uploadthing GET error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
