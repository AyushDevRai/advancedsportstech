"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { createAvatar, type AvatarController } from "@bible-strong/avatar-react";
import "@bible-strong/avatar-react/styles.css";
import definition from "@/mascot/avatar.avatar.json";
import { AST_MASCOT_EVENT, type MascotEventDetail } from "@/lib/mascot-events";

const MascotAvatar = createAvatar(definition);

type AnimationName = keyof typeof definition.animations;
type ExpressionName = keyof typeof definition.expressions;

// Section tips mapping for speech bubble voice feature
const SECTION_TIPS: Record<string, string> = {
  home: "Welcome to AST! Asia's leader in sports infrastructure. 🏟️",
  hero: "Championship-grade tracks, turf & arenas built to global standards! ⚡",
  about: "AST brings over 40+ years of sports engineering expertise! 🌟",
  milestones: "Check out our proven installation milestones across Asia! 📈",
  "nationwide-map": "Explore verified project coordinates across India! 📍",
  products: "IAAF, FIH & BWF certified tracks, turf & indoor sports floors! 🏆",
  sports: "Explore bespoke surfaces for football, tennis, athletics & hockey! ⚽",
  lighting: "Panasonic broadcast-ready LED sports lighting optics! 💡",
  services: "Comprehensive turnkey planning, sub-base works & installation! 🛠️",
  projects: "Explore landmark athletic stadiums and sports arenas nationwide! 🌐",
  testimonials: "See why federation heads & stadium directors choose AST! 💬",
  brochures: "Download certified testing data sheets and official brochures! 📄",
  contact: "Ready to build your sports venue? Send us your specs! ✉️",
};

export function AnimatedMascot() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [speechText, setSpeechText] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  // References
  const containerRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<AvatarController | null>(null);

  // Active animation state tracker for cursor-follow logic
  const currentAnimationRef = useRef<AnimationName>("waking");

  // Timers
  const speechTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wakingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resetAnimTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const drowsyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const activeHeadingElRef = useRef<HTMLElement | null>(null);

  // Helper to show speech bubble tip with auto-dismiss
  const showSpeech = useCallback((text: string, durationMs: number = 4800) => {
    setSpeechText(text);
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => {
      setSpeechText(null);
    }, durationMs);
  }, []);

  // Safe animation player using controller.play()
  const safePlay = useCallback(
    (anim: AnimationName) => {
      currentAnimationRef.current = anim;

      // When playing non-idle animation, reset eye follow and stage orientation
      if (anim !== "idle" && stageRef.current) {
        stageRef.current.style.transform = "none";
        const eyePath = stageRef.current.querySelector(".bs-avatar svg g path:first-child");
        const eyesGroup = (eyePath?.parentElement as unknown as SVGGElement | null) || (stageRef.current.querySelector("svg g[clip-path]") as SVGGElement | null);
        if (eyesGroup) {
          eyesGroup.style.transform = "translate(0px, 0px)";
        }
      }

      if (prefersReducedMotion) return;
      if (!controllerRef.current) return;
      try {
        controllerRef.current.play(anim);
      } catch (err) {
        console.error(`[AnimatedMascot] play("${anim}") error:`, err);
      }
    },
    [prefersReducedMotion]
  );

  // Wake-up sequence: play "waking", then switch to "idle" when ended or after 2s
  const startWakingSequence = useCallback(() => {
    if (prefersReducedMotion) return;
    safePlay("waking");
    if (wakingTimeoutRef.current) clearTimeout(wakingTimeoutRef.current);
    wakingTimeoutRef.current = setTimeout(() => {
      const state = controllerRef.current?.getState();
      if (state?.activeAnimation === "waking") {
        safePlay("idle");
      }
    }, 2000);
  }, [prefersReducedMotion, safePlay]);

  // Handle onAnimationEnd callback from Avatar
  const handleAnimationEnd = useCallback(
    (endedAnim: string) => {
      if (prefersReducedMotion) return;

      if (endedAnim === "waking") {
        safePlay("idle");
      } else if (endedAnim === "drowsy") {
        // When drowsy finishes, transition into sleeping
        safePlay("sleeping");
      } else if (
        endedAnim === "excited" ||
        endedAnim === "celebrate" ||
        endedAnim === "confused" ||
        endedAnim === "laughing"
      ) {
        safePlay("idle");
      }
    },
    [prefersReducedMotion, safePlay]
  );

  // Reset 30s inactivity timer; any movement wakes up mascot if drowsy or sleeping
  const resetInactivityTimer = useCallback(() => {
    if (prefersReducedMotion) return;

    // Check if mascot is currently drowsy or sleeping, and wake it up!
    const currentState = controllerRef.current?.getState()?.activeAnimation;
    if (currentState === "sleeping" || currentState === "drowsy") {
      startWakingSequence();
      showSpeech("I'm awake! Ready to explore! ⚡", 2600);
    }

    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    if (drowsyTimerRef.current) clearTimeout(drowsyTimerRef.current);

    inactivityTimerRef.current = setTimeout(() => {
      // 30 seconds of inactivity reached: play "drowsy" then "sleeping"
      safePlay("drowsy");
      drowsyTimerRef.current = setTimeout(() => {
        const state = controllerRef.current?.getState();
        if (state?.activeAnimation === "drowsy") {
          safePlay("sleeping");
        }
      }, 2800);
    }, 30000);
  }, [prefersReducedMotion, startWakingSequence, safePlay, showSpeech]);

  // Click on mascot -> "laughing"
  const handleMascotClick = useCallback(() => {
    if (isMinimized) {
      setIsMinimized(false);
      return;
    }

    if (prefersReducedMotion) {
      showSpeech("Welcome to AST! Need any help? 🏆", 3200);
      return;
    }

    safePlay("laughing");
    const laughs = [
      "Hehe! That tickles! 😄",
      "Ready to build sports excellence! 🏆",
      "Got a vision? Send us an enquiry below! 💬",
      "We install IAAF, FIH & BWF certified facilities! ⚡",
      "Haha! Glad you're visiting AST today! 🤖",
    ];
    const picked = laughs[Math.floor(Math.random() * laughs.length)];
    showSpeech(picked, 3000);

    if (resetAnimTimeoutRef.current) clearTimeout(resetAnimTimeoutRef.current);
    resetAnimTimeoutRef.current = setTimeout(() => {
      const state = controllerRef.current?.getState();
      if (state?.activeAnimation === "laughing") {
        safePlay("idle");
      }
    }, 2500);
  }, [isMinimized, prefersReducedMotion, safePlay, showSpeech]);

  // Initialize mount, motion preferences & reactions
  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
      if (event.matches && controllerRef.current) {
        controllerRef.current.stop();
        controllerRef.current.setExpression("neutral" as ExpressionName);
        if (containerRef.current) {
          containerRef.current.style.transform = "translate3d(0, 0, 0)";
          containerRef.current.setAttribute("data-at-heading", "false");
        }
      }
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Initial page open: play "waking" then switch to "idle" (or after 2s if loop)
    if (!mediaQuery.matches) {
      startWakingSequence();
      showSpeech("Welcome to AST! Scroll to discover our sports venues! 👋", 3800);
      resetInactivityTimer();
    }

    // Tab visibility handling: pause/resume controller
    const handleVisibilityChange = () => {
      if (document.hidden) {
        controllerRef.current?.pause();
      } else if (!mediaQuery.matches) {
        const state = controllerRef.current?.getState();
        if (state?.status === "paused") {
          safePlay((state.activeAnimation as AnimationName) || "idle");
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      if (wakingTimeoutRef.current) clearTimeout(wakingTimeoutRef.current);
      if (resetAnimTimeoutRef.current) clearTimeout(resetAnimTimeoutRef.current);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (drowsyTimerRef.current) clearTimeout(drowsyTimerRef.current);
    };
  }, [safePlay, showSpeech, startWakingSequence, resetInactivityTimer]);

  // FEATURE: Mascot face & eyes track visitor cursor towards website (into the page)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let mouseFrame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (
        document.documentElement.hasAttribute("data-mega-open") ||
        currentAnimationRef.current !== "idle" ||
        mouseFrame
      ) return;

      mouseFrame = requestAnimationFrame(() => {
        mouseFrame = 0;
        const stage = stageRef.current;
        if (!stage) return;

        const eyePath = stage.querySelector(".bs-avatar svg g path:first-child");
        const eyesGroup = (eyePath?.parentElement as unknown as SVGGElement | null) || (stage.querySelector("svg g[clip-path]") as SVGGElement | null);

        // Position is known from fixed placement: bottom-right (24px right, 84px bottom, center is radius 34)
        const centerX = window.innerWidth - 24 - 34;
        const centerY = window.innerHeight - 84 - 34;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Max travel of eyes within procedural head
        const maxShift = 12;
        const angle = Math.atan2(dy, dx);
        const intensity = Math.min(dist / 300, 1);
        const eyeX = Math.cos(angle) * maxShift * intensity;
        const eyeY = Math.sin(angle) * maxShift * intensity;

        if (eyesGroup) {
          eyesGroup.style.transform = `translate(${eyeX.toFixed(1)}px, ${eyeY.toFixed(1)}px)`;
        }

        // Tilt mascot head 3D towards visitor's cursor across the website
        const rotY = Math.max(Math.min((dx / (window.innerWidth * 0.7)) * 16, 8), -18);
        const rotX = Math.max(Math.min((-dy / (window.innerHeight * 0.7)) * 14, 16), -8);
        stage.style.transform = `perspective(360px) rotateY(${rotY.toFixed(1)}deg) rotateX(${rotX.toFixed(1)}deg)`;
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(mouseFrame);
      mouseFrame = 0;
      if (stageRef.current) {
        stageRef.current.style.transform = "none";
        const eyePath = stageRef.current.querySelector(".bs-avatar svg g path:first-child");
        const eyesGroup = (eyePath?.parentElement as unknown as SVGGElement | null) || (stageRef.current.querySelector("svg g[clip-path]") as SVGGElement | null);
        if (eyesGroup) {
          eyesGroup.style.transform = "translate(0px, 0px)";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(mouseFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  // Activity listeners for 30s inactivity tracking
  useEffect(() => {
    if (prefersReducedMotion) return;

    let lastInteraction = 0;
    const handleActivity = () => {
      const now = Date.now();
      if (now - lastInteraction > 300) {
        lastInteraction = now;
        resetInactivityTimer();
      }
    };

    window.addEventListener("mousemove", handleActivity, { passive: true });
    window.addEventListener("scroll", handleActivity, { passive: true });
    window.addEventListener("keydown", handleActivity, { passive: true });
    window.addEventListener("touchstart", handleActivity, { passive: true });
    window.addEventListener("mousedown", handleActivity, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      window.removeEventListener("mousedown", handleActivity);
    };
  }, [prefersReducedMotion, resetInactivityTimer]);

  // Button hover (desktop) & tap (phone) trigger for "excited":
  // "build your vision", "get a quote", "send enquiry"
  useEffect(() => {
    if (prefersReducedMotion) return;

    const isTouchOnly = () =>
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window;

    const isCtaTarget = (element: Element | null): boolean => {
      if (!element) return false;
      const btn = element.closest("button, a, [role='button'], input[type='submit']");
      if (!btn) return false;
      if (btn.hasAttribute("data-mascot-cta")) return true;
      const text = (btn.textContent || "").trim().toLowerCase();
      return (
        text.includes("build your vision") ||
        text.includes("nuild your vision") ||
        text.includes("get a quote") ||
        text.includes("send enquiry")
      );
    };

    // Desktop hover
    const handlePointerOver = (e: PointerEvent) => {
      if (isTouchOnly() || e.pointerType === "touch") return;
      if (isCtaTarget(e.target as Element)) {
        safePlay("excited");
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      if (isTouchOnly() || e.pointerType === "touch") return;
      if (isCtaTarget(e.target as Element)) {
        const state = controllerRef.current?.getState();
        if (state?.activeAnimation === "excited") {
          safePlay("idle");
        }
      }
    };

    // Mobile tap
    const handlePointerDown = (e: PointerEvent) => {
      if (!isTouchOnly() && e.pointerType !== "touch") return;
      if (isCtaTarget(e.target as Element)) {
        safePlay("excited");
        if (resetAnimTimeoutRef.current) clearTimeout(resetAnimTimeoutRef.current);
        resetAnimTimeoutRef.current = setTimeout(() => {
          const state = controllerRef.current?.getState();
          if (state?.activeAnimation === "excited") {
            safePlay("idle");
          }
        }, 2400);
      }
    };

    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [prefersReducedMotion, safePlay]);

  // Custom mascot events listener ([enquiry form] sent -> celebrate, form error -> confused)
  useEffect(() => {
    const handleCustomMascotEvent = (e: Event) => {
      const evt = e as CustomEvent<MascotEventDetail>;
      const action = evt.detail?.action as AnimationName | undefined;
      const tip = evt.detail?.tip;
      const durationMs = evt.detail?.durationMs ?? 3500;

      if (!action) return;

      if (tip) {
        showSpeech(tip, durationMs);
      }

      if (prefersReducedMotion) return;

      safePlay(action);

      if (action === "celebrate" || action === "confused") {
        if (resetAnimTimeoutRef.current) clearTimeout(resetAnimTimeoutRef.current);
        resetAnimTimeoutRef.current = setTimeout(() => {
          const state = controllerRef.current?.getState();
          if (state?.activeAnimation === action) {
            safePlay("idle");
          }
        }, durationMs);
      }
    };

    // Native form validation error listener fallback
    const handleNativeFormInvalid = () => {
      if (prefersReducedMotion) return;
      safePlay("confused");
      showSpeech("Please check the required form fields! 🤔", 3200);
    };

    window.addEventListener(AST_MASCOT_EVENT, handleCustomMascotEvent);
    document.addEventListener("invalid", handleNativeFormInvalid, true);

    return () => {
      window.removeEventListener(AST_MASCOT_EVENT, handleCustomMascotEvent);
      document.removeEventListener("invalid", handleNativeFormInvalid, true);
    };
  }, [prefersReducedMotion, safePlay, showSpeech]);

  // FEATURE: Section Arrival Voice Tips - 100% IntersectionObserver with zero layout thrashing
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section[id], section[data-section-id], .homepage-milestones-section, main section"
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const activeSection = entry.target as HTMLElement;
            const secId = (
              activeSection.id ||
              activeSection.getAttribute("data-section-id") ||
              ""
            ).toLowerCase();

            if (activeHeadingElRef.current !== activeSection) {
              activeHeadingElRef.current = activeSection;

              const customTip = activeSection.getAttribute("data-mascot-tip");
              let tip = customTip || SECTION_TIPS[secId];
              if (!tip) {
                const matchedKey = Object.keys(SECTION_TIPS).find(
                  (k) =>
                    secId.includes(k) ||
                    (activeSection?.className &&
                      activeSection.className.toLowerCase().includes(k))
                );
                if (matchedKey) {
                  tip = SECTION_TIPS[matchedKey];
                }
              }

              if (tip) {
                showSpeech(tip, 5000);
              }
            }
          }
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, [showSpeech]);

  // Current mascot size: 68px (compact, sleek), 30px when minimized
  const currentSize = isMinimized ? 30 : 68;

  return (
    <aside
      ref={containerRef}
      aria-label="Interactive AST site mascot"
      className="ast-mascot-container"
      data-minimized={isMinimized}
    >
      {/* Speech bubble voice tip */}
      {speechText && !isMinimized && (
        <div
          className="ast-mascot-bubble"
          role="status"
          aria-live="polite"
          onClick={() => setSpeechText(null)}
          title="Click to dismiss"
        >
          <div className="ast-mascot-bubble-header">
            <span className="ast-mascot-bubble-badge">Sportyy bot</span>
            <button
              type="button"
              className="ast-mascot-bubble-close"
              onClick={(e) => {
                e.stopPropagation();
                setSpeechText(null);
              }}
              aria-label="Dismiss tip"
            >
              ×
            </button>
          </div>
          <span className="ast-mascot-bubble-tip">{speechText}</span>
          <div className="ast-mascot-bubble-tail" />
        </div>
      )}

      {/* Minimize / Expand Toggle */}
      <button
        type="button"
        className="ast-mascot-toggle-btn"
        onClick={() => setIsMinimized((prev) => !prev)}
        aria-label={isMinimized ? "Expand mascot" : "Minimize mascot"}
        title={isMinimized ? "Expand mascot" : "Minimize mascot"}
      >
        {isMinimized ? "🤖" : "×"}
      </button>

      {/* Mascot Stage: 68px */}
      <div
        ref={stageRef}
        className="ast-mascot-stage"
        onClick={handleMascotClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleMascotClick();
          }
        }}
        aria-label="Interactive AST mascot bot. Click to interact."
      >
        {mounted && (
          <MascotAvatar
            ref={controllerRef}
            defaultAnimation="waking"
            size={currentSize}
            onAnimationEnd={handleAnimationEnd}
            ariaLabel="Interactive AST mascot avatar"
          />
        )}
      </div>
    </aside>
  );
}
