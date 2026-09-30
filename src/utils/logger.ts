import { schoolConfig } from "../config/school.config";

type LogLevel = "debug" | "info" | "warn" | "error";

const LEVEL_WEIGHT: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

function shouldLog(level: LogLevel): boolean {
  if (!schoolConfig.system?.logging?.enabled) return false;
  const configLevel = schoolConfig.system.logging.level || "info";
  return LEVEL_WEIGHT[level] >= LEVEL_WEIGHT[configLevel];
}

const BADGE_STYLE =
  "background: #0f172a; color: #10b981; font-weight: bold; padding: 2px 6px; border-radius: 4px;";
const TIME_STYLE = "color: #94a3b8; font-size: 10px;";

export const logger = {
  debug(...args: any[]) {
    if (!shouldLog("debug")) return;
    if (typeof window !== "undefined") {
      console.debug(
        "%c[SRIRS:DEBUG]%c " + new Date().toLocaleTimeString(),
        BADGE_STYLE,
        TIME_STYLE,
        ...args,
      );
    } else {
      console.debug("[SRIRS:DEBUG]", ...args);
    }
  },

  info(...args: any[]) {
    if (!shouldLog("info")) return;
    if (typeof window !== "undefined") {
      console.info(
        "%c[SRIRS:SYSTEM]%c " + new Date().toLocaleTimeString(),
        BADGE_STYLE,
        TIME_STYLE,
        ...args,
      );
    } else {
      console.info("[SRIRS:SYSTEM]", ...args);
    }
  },

  warn(...args: any[]) {
    if (!shouldLog("warn")) return;
    if (typeof window !== "undefined") {
      console.warn(
        "%c[SRIRS:WARN]%c " + new Date().toLocaleTimeString(),
        "background: #78350f; color: #f59e0b; font-weight: bold; padding: 2px 6px; border-radius: 4px;",
        TIME_STYLE,
        ...args,
      );
    } else {
      console.warn("[SRIRS:WARN]", ...args);
    }
  },

  error(...args: any[]) {
    if (!shouldLog("error")) return;
    if (typeof window !== "undefined") {
      console.error(
        "%c[SRIRS:ERROR]%c " + new Date().toLocaleTimeString(),
        "background: #881337; color: #f43f5e; font-weight: bold; padding: 2px 6px; border-radius: 4px;",
        TIME_STYLE,
        ...args,
      );
    } else {
      console.error("[SRIRS:ERROR]", ...args);
    }
  },
};
