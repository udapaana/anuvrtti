import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";

// Redirect old URLs to new structure
const redirects: Record<string, string> = {
  "/passages": "/learn",
  "/read": "/learn",
  "/browse": "/ref",
  "/search": "/ref",
  "/prakriya": "/ref/prakriya",
  "/pratyahara": "/ref/pratyahara",
  "/reference": "/ref/tables",
  "/tour": "/",
  "/adhikara": "/ref",
  "/connected": "/ref",
  "/leaves": "/ref",
  "/roots": "/ref",
  "/types": "/ref",
  "/graph": "/ref",
};

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url;

  // Check static redirects
  if (pathname in redirects) {
    throw redirect(301, redirects[pathname]);
  }

  // Handle /sutra/[id] -> /ref/[id]
  if (pathname.startsWith("/sutra/")) {
    const id = pathname.replace("/sutra/", "");
    throw redirect(301, `/ref/${id}`);
  }

  return resolve(event);
};
