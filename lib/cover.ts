import fs from "node:fs";
import path from "node:path";

/**
 * Resolve a cover image path. Returns the path only if the file actually
 * exists under /public — otherwise undefined, so the UI falls back to an
 * elegant placeholder. This lets us assign cover paths in advance; the
 * moment a correctly-named file is dropped into /public/images, it goes live.
 */
export function resolveCover(src?: string): string | undefined {
  if (!src) return undefined;
  if (!src.startsWith("/")) return src; // remote/absolute — trust it
  const filePath = path.join(process.cwd(), "public", src);
  return fs.existsSync(filePath) ? src : undefined;
}
