"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const START_TIME = 295; // 4:55
const END_TIME = 383;   // 6:23
const VIDEO_ID = "rX2HLkH58OU";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function AboutVideoPlayer({ className = "about-bg-video-iframe" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isLoopingRef = useRef<boolean>(false);
  const [origin, setOrigin] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const sendPostMessageCommand = useCallback((func: string, args: any[] = []) => {
    const iframeEl = document.getElementById("about-yt-player-iframe") as HTMLIFrameElement | null;
    if (!iframeEl || !iframeEl.contentWindow) return;
    try {
      iframeEl.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func,
          args,
        }),
        "*"
      );
    } catch (_) {}
  }, []);

  const triggerLoop = useCallback(() => {
    if (isLoopingRef.current) return;
    isLoopingRef.current = true;

    try {
      // 1. YouTube Iframe API method
      if (playerRef.current) {
        if (typeof playerRef.current.seekTo === "function") {
          playerRef.current.seekTo(START_TIME, true);
        }
        if (typeof playerRef.current.playVideo === "function") {
          playerRef.current.playVideo();
        }
      }

      // 2. Direct postMessage fallback
      sendPostMessageCommand("seekTo", [START_TIME, true]);
      sendPostMessageCommand("playVideo", []);
    } catch (_) {}

    setTimeout(() => {
      isLoopingRef.current = false;
    }, 400);
  }, [sendPostMessageCommand]);

  useEffect(() => {
    let isMounted = true;

    // Listen to direct postMessages from the YouTube iframe
    const handleWindowMessage = (e: MessageEvent) => {
      if (!isMounted) return;
      try {
        let data = e.data;
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (_) {
            return;
          }
        }
        if (!data) return;

        // Check player state: 0 = ENDED, 2 = PAUSED
        const state = data.info?.playerState ?? (data.event === "onStateChange" ? data.info : null);
        if (state === 0) {
          triggerLoop();
        }

        // Check playback current time from infoDelivery
        const currentTime = data.info?.currentTime;
        if (typeof currentTime === "number") {
          if (currentTime >= END_TIME || (currentTime > 1 && currentTime < START_TIME - 1.5)) {
            triggerLoop();
          }
        }
      } catch (_) {}
    };

    window.addEventListener("message", handleWindowMessage);

    function initPlayer() {
      if (!isMounted || playerRef.current) return;
      if (!window.YT || !window.YT.Player) return;
      const iframeEl = document.getElementById("about-yt-player-iframe");
      if (!iframeEl) return;

      try {
        playerRef.current = new window.YT.Player("about-yt-player-iframe", {
          events: {
            onReady: (event: any) => {
              if (!isMounted) return;
              try {
                event.target.mute();
                if (typeof event.target.unloadModule === "function") {
                  event.target.unloadModule("captions");
                  event.target.unloadModule("cc");
                }
                if (typeof event.target.setOption === "function") {
                  event.target.setOption("captions", "track", {});
                  event.target.setOption("cc", "track", {});
                }
                event.target.playVideo();
              } catch (_) {}
            },
            onStateChange: (event: any) => {
              if (!isMounted) return;
              try {
                if (typeof event.target.unloadModule === "function") {
                  event.target.unloadModule("captions");
                  event.target.unloadModule("cc");
                }
                if (typeof event.target.setOption === "function") {
                  event.target.setOption("captions", "track", {});
                  event.target.setOption("cc", "track", {});
                }
              } catch (_) {}

              // 0 = ENDED -> loop immediately
              if (event.data === 0 || event.data === window.YT.PlayerState?.ENDED) {
                triggerLoop();
              }
              // 2 = PAUSED
              else if (event.data === 2 || event.data === window.YT.PlayerState?.PAUSED) {
                try {
                  const current = typeof event.target.getCurrentTime === "function" ? event.target.getCurrentTime() : 0;
                  if (current >= END_TIME - 1 || current < START_TIME) {
                    triggerLoop();
                  } else {
                    event.target.playVideo();
                  }
                } catch (_) {
                  triggerLoop();
                }
              }
            },
          },
        });
      } catch (err) {
        console.warn("YouTube player init error:", err);
      }
    }

    // Active polling interval: strictly monitor 4:55 to 6:23 loop
    timerRef.current = setInterval(() => {
      if (!isMounted) return;

      // Ping iframe to request current status info
      sendPostMessageCommand("listening", []);

      if (playerRef.current) {
        try {
          if (typeof playerRef.current.unloadModule === "function") {
            playerRef.current.unloadModule("captions");
            playerRef.current.unloadModule("cc");
          }
          if (typeof playerRef.current.getCurrentTime === "function") {
            const current = playerRef.current.getCurrentTime();
            const state = typeof playerRef.current.getPlayerState === "function" ? playerRef.current.getPlayerState() : -1;

            if (state === 0 || current >= END_TIME) {
              triggerLoop();
            } else if (state === 2 && (current >= END_TIME - 1 || current < START_TIME)) {
              triggerLoop();
            } else if (current > 1 && current < START_TIME - 1.5) {
              triggerLoop();
            }
          }
        } catch (_) {}
      }
    }, 250);

    // Load YouTube IFrame API script if not present
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.getElementById("yt-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScript = document.getElementsByTagName("script")[0];
        firstScript?.parentNode?.insertBefore(tag, firstScript);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        if (isMounted) initPlayer();
      };
    }

    return () => {
      isMounted = false;
      window.removeEventListener("message", handleWindowMessage);
      if (timerRef.current) clearInterval(timerRef.current);
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (_) {}
        playerRef.current = null;
      }
    };
  }, [triggerLoop, sendPostMessageCommand]);

  const originParam = origin ? `&origin=${encodeURIComponent(origin)}` : "";

  return (
    <>
      <div className={className} style={{ pointerEvents: "none" }}>
        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
          <iframe
            id="about-yt-player-iframe"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&playsinline=1&start=${START_TIME}&end=${END_TIME}&cc_load_policy=0&loop=1&playlist=${VIDEO_ID}${originParam}`}
            title="Advanced Sports Technologies World-Class Sports Infrastructure"
            style={{ width: "100%", height: "100%", border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            tabIndex={-1}
          />
        </div>
      </div>
      <div className="about-video-watermark-cover" aria-hidden="true">
        <Image
          src="/brand/ast-logo-cover.png"
          alt="AST"
          width={132}
          height={35}
          className="about-video-watermark-logo"
          priority
        />
      </div>
    </>
  );
}
