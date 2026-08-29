/**
 * Safe accessor for Lovable `.asset.json` pointers.
 *
 * Pointer files are plain JSON imported at build time. If a pointer is ever
 * missing, malformed, or stripped from an exported/self-hosted build, reading
 * `.url` off `undefined` would throw during render and blank the whole page.
 * This helper always returns a string, so a broken asset degrades to a missing
 * image instead of a runtime crash.
 */
export type AssetPointer = { url?: string } | null | undefined;

/** 1x1 transparent PNG — renders as nothing, never triggers a network error. */
export const BLANK_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export function assetUrl(pointer: AssetPointer, fallback: string = BLANK_IMAGE): string {
  const url = pointer && typeof pointer === "object" ? pointer.url : undefined;
  return typeof url === "string" && url.length > 0 ? url : fallback;
}

/**
 * `onError` handler for <img>: swaps in the fallback once if the asset 404s
 * (e.g. CDN pointers on a self-hosted export) without looping.
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  fallback: string = BLANK_IMAGE,
): void {
  const img = event.currentTarget;
  if (img.dataset["fallbackApplied"] === "true") return;
  img.dataset["fallbackApplied"] = "true";
  img.src = fallback;
}
