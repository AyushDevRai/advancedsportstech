"use client";

import React, { useEffect, useRef } from "react";

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

  useEffect(() => {
    let isMounted = true;

    function initPlayer() {
      if (!isMounted || !containerRef.current || playerRef.current) return;
      if (!window.YT || !window.YT.Player) return;

      try {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: VIDEO_ID,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            start: START_TIME,
            end: END_TIME,
            loop: 0,
            cc_load_policy: 0,
          },
          events: {
            onReady: (event: any) => {
              if (!isMounted) return;
              try {
                event.target.mute();
                // Disable captions explicitly
                if (typeof event.target.unloadModule === "function") {
                  event.target.unloadModule("captions");
                  event.target.unloadModule("cc");
                }
                if (typeof event.target.setOption === "function") {
                  event.target.setOption("captions", "track", {});
                  event.target.setOption("cc", "track", {});
                }
                event.target.seekTo(START_TIME, true);
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
              if (event.data === window.YT.PlayerState.ENDED) {
                try {
                  event.target.seekTo(START_TIME, true);
                  event.target.playVideo();
                } catch (_) {}
              }
            },
          },
        });

        // Active interval: strictly enforce 4:55 to 6:23 window
        timerRef.current = setInterval(() => {
          if (!isMounted || !playerRef.current) return;
          try {
            if (typeof playerRef.current.unloadModule === "function") {
              playerRef.current.unloadModule("captions");
              playerRef.current.unloadModule("cc");
            }
            if (typeof playerRef.current.getCurrentTime === "function") {
              const current = playerRef.current.getCurrentTime();
              // If YouTube ever drifts before 4:55 (e.g. starts from 0:00)
              if (current > 0 && current < START_TIME - 0.5) {
                playerRef.current.seekTo(START_TIME, true);
                playerRef.current.playVideo();
              }
              // If YouTube reaches or passes 6:23
              else if (current >= END_TIME) {
                playerRef.current.seekTo(START_TIME, true);
                playerRef.current.playVideo();
              }
            }
          } catch (_) {}
        }, 250);
      } catch (err) {
        console.warn("YouTube player init error:", err);
      }
    }

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
      if (timerRef.current) clearInterval(timerRef.current);
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (_) {}
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
        {/* Fallback iframe with cc_load_policy=0 */}
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&playsinline=1&start=${START_TIME}&end=${END_TIME}&cc_load_policy=0`}
          title="Advanced Sports Technologies World-Class Sports Infrastructure"
          style={{ width: "100%", height: "100%", border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
