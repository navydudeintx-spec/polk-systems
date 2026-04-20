import { execSync } from "node:child_process";

export function getLastUpdated(paths: string[]): string | null {
  try {
    const quotedPaths = paths
      .map((p) => `"${p.replace(/"/g, '\\"')}"`)
      .join(" ");

    const result = execSync(`git log -1 --format=%cs -- ${quotedPaths}`, {
      encoding: "utf8",
    }).trim();

    return result || null;
  } catch {
    return null;
  }
}