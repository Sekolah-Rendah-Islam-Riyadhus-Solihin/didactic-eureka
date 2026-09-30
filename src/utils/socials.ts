import { schoolConfig } from "../config/school.config";

export interface SocialPlatformInfo {
  id: string;
  name: string;
  emoji: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  hoverColorClass: string;
  svgPath: string;
}

export interface ResolvedSocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  emoji: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  hoverColorClass: string;
  svgPath: string;
}

export const PLATFORM_REGISTRY: Record<string, SocialPlatformInfo> = {
  facebook: {
    id: "facebook",
    name: "Facebook",
    emoji: "📘",
    colorClass: "text-blue-500",
    hoverColorClass: "hover:text-blue-400",
    bgClass: "bg-blue-500/10 hover:bg-blue-500/20",
    borderClass: "border-blue-500/20",
    svgPath:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    emoji: "🎵",
    colorClass: "text-rose-400",
    hoverColorClass: "hover:text-rose-300",
    bgClass: "bg-rose-500/10 hover:bg-rose-500/20",
    borderClass: "border-rose-500/20",
    svgPath:
      "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  instagram: {
    id: "instagram",
    name: "Instagram",
    emoji: "📸",
    colorClass: "text-pink-400",
    hoverColorClass: "hover:text-pink-300",
    bgClass: "bg-pink-500/10 hover:bg-pink-500/20",
    borderClass: "border-pink-500/20",
    svgPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  youtube: {
    id: "youtube",
    name: "YouTube",
    emoji: "📺",
    colorClass: "text-red-500",
    hoverColorClass: "hover:text-red-400",
    bgClass: "bg-red-500/10 hover:bg-red-500/20",
    borderClass: "border-red-500/20",
    svgPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  twitter: {
    id: "twitter",
    name: "X (Twitter)",
    emoji: "𝕏",
    colorClass: "text-slate-300",
    hoverColorClass: "hover:text-white",
    bgClass: "bg-slate-500/10 hover:bg-slate-500/20",
    borderClass: "border-slate-500/20",
    svgPath:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  x: {
    id: "x",
    name: "X (Twitter)",
    emoji: "𝕏",
    colorClass: "text-slate-300",
    hoverColorClass: "hover:text-white",
    bgClass: "bg-slate-500/10 hover:bg-slate-500/20",
    borderClass: "border-slate-500/20",
    svgPath:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  telegram: {
    id: "telegram",
    name: "Telegram",
    emoji: "✈️",
    colorClass: "text-sky-400",
    hoverColorClass: "hover:text-sky-300",
    bgClass: "bg-sky-500/10 hover:bg-sky-500/20",
    borderClass: "border-sky-500/20",
    svgPath:
      "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  },
  whatsapp: {
    id: "whatsapp",
    name: "WhatsApp",
    emoji: "💬",
    colorClass: "text-emerald-400",
    hoverColorClass: "hover:text-emerald-300",
    bgClass: "bg-emerald-500/10 hover:bg-emerald-500/20",
    borderClass: "border-emerald-500/20",
    svgPath:
      "M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.58C8.84 7.58 8.65 7.65 8.5 7.84C8.25 8.09 7.5 8.84 7.5 10.36C7.5 11.88 8.61 13.34 8.77 13.54C8.93 13.74 10.96 16.88 14.07 18.22C14.81 18.54 15.39 18.73 15.84 18.87C16.58 19.11 17.26 19.07 17.8 18.99C18.4 18.9 19.64 18.24 19.9 17.5C20.16 16.76 20.16 16.13 20.08 16C20 15.87 19.86 15.8 19.6 15.67C19.34 15.54 18.06 14.91 17.82 14.82C17.58 14.73 17.41 14.69 17.24 14.94C17.07 15.19 16.59 15.75 16.44 15.93C16.29 16.11 16.14 16.13 15.88 16C15.62 15.87 14.78 15.6 13.79 14.71C13.02 14.02 12.5 13.17 12.35 12.92C12.2 12.67 12.33 12.53 12.46 12.4C12.58 12.29 12.72 12.11 12.86 11.95C13 11.79 13.05 11.67 13.14 11.49C13.23 11.31 13.18 11.16 13.12 11.03C13.06 10.9 12.58 9.72 12.38 9.24C12.19 8.77 11.99 8.83 11.83 8.83C11.68 8.83 11.51 8.83 11.34 8.83C11.17 8.83 10.9 8.89 10.67 9.14C10.44 9.39 9.8 10 9.8 11.23C9.8 12.46 10.7 13.65 10.83 13.82L9.04 7.58Z",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    emoji: "💼",
    colorClass: "text-blue-600",
    hoverColorClass: "hover:text-blue-500",
    bgClass: "bg-blue-600/10 hover:bg-blue-600/20",
    borderClass: "border-blue-600/20",
    svgPath:
      "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  },
};

/**
 * Fallback platform info for any unrecognized social key or URL
 */
export function getFallbackPlatform(key: string): SocialPlatformInfo {
  const formattedName = key
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    id: key.toLowerCase(),
    name: formattedName || "Social Link",
    emoji: "🌐",
    colorClass: "text-slate-300",
    hoverColorClass: "hover:text-amber-400",
    bgClass: "bg-slate-500/10 hover:bg-slate-500/20",
    borderClass: "border-slate-500/20",
    svgPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  };
}

/**
 * Extracts a neat @handle or display name from a social profile URL.
 * e.g. "https://tiktok.com/@mysrirs" -> "@mysrirs"
 *      "https://facebook.com/mysrirs" -> "@mysrirs"
 */
export function extractSocialHandle(url: string, platformId?: string): string {
  if (!url) return "";
  try {
    const trimmed = url.trim();
    const parsed = new URL(
      trimmed.startsWith("http") ? trimmed : `https://${trimmed}`,
    );
    const pathname = parsed.pathname.replace(/\/$/, "");

    if (pathname) {
      const parts = pathname.split("/").filter(Boolean);
      const lastPart = parts[parts.length - 1];
      if (lastPart) {
        if (lastPart.startsWith("@")) return lastPart;
        // If not starting with @, prefix @ for user handle appearance
        return `@${lastPart}`;
      }
    }
    return parsed.hostname.replace("www.", "");
  } catch {
    return url;
  }
}

/**
 * Resolves all active social links from schoolConfig.contact.socials
 * and customSocials, with automatic fallback for any platform.
 */
export function getActiveSocialLinks(): ResolvedSocialLink[] {
  const result: ResolvedSocialLink[] = [];
  const socials = schoolConfig.contact?.socials;

  if (socials && typeof socials === "object") {
    for (const [key, rawUrl] of Object.entries(socials)) {
      if (!rawUrl || typeof rawUrl !== "string" || !rawUrl.trim()) continue;

      const normKey = key.toLowerCase().trim();
      const platformInfo =
        PLATFORM_REGISTRY[normKey] || getFallbackPlatform(normKey);
      const handle = extractSocialHandle(rawUrl, platformInfo.id);

      result.push({
        ...platformInfo,
        url: rawUrl.trim(),
        handle,
      });
    }
  }

  // Also support customSocials if provided
  const custom = schoolConfig.contact?.customSocials;
  if (Array.isArray(custom)) {
    for (const item of custom) {
      if (!item.url) continue;
      const normKey = (item.platform || "social").toLowerCase().trim();
      const baseInfo =
        PLATFORM_REGISTRY[normKey] || getFallbackPlatform(normKey);
      result.push({
        ...baseInfo,
        name: item.label || baseInfo.name,
        url: item.url.trim(),
        handle: item.handle || extractSocialHandle(item.url, baseInfo.id),
        emoji: item.icon || baseInfo.emoji,
      });
    }
  }

  return result;
}
