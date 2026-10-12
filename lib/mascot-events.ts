export type MascotReaction =
  | "waking"
  | "idle"
  | "excited"
  | "celebrate"
  | "confused"
  | "drowsy"
  | "sleeping"
  | "laughing";

export interface MascotEventDetail {
  action: MascotReaction;
  tip?: string;
  durationMs?: number;
}

export const AST_MASCOT_EVENT = "ast:mascot-reaction";

/**
 * Triggers a mascot reaction and optional speech bubble tip from anywhere in the application.
 */
export function triggerMascotReaction(action: MascotReaction, tip?: string, durationMs?: number) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<MascotEventDetail>(AST_MASCOT_EVENT, {
      detail: { action, tip, durationMs },
    })
  );
}
