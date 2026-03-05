export const ssr = false;

export function load({ params }) {
  return { pathId: params.pathId };
}
