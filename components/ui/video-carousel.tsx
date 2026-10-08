"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  MapPin,
  Film,
  Sparkles,
  Info
} from "lucide-react";
import type { GalleryVideo } from "@/content/homepage";

interface VideoCarouselProps {
  videos: readonly GalleryVideo[];
  className?: string;
  autoPlayOnSlide?: boolean;
}

export function VideoCarousel({
  videos,
  className = "",
  autoPlayOnSlide = true
}: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentVideo = videos[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  // Handle slide change
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setProgress(0);
    setCurrentTime(0);
    setIsLoading(true);

    video.pause();
    video.currentTime = 0;
    video.src = currentVideo.src;
    video.load();

    if (autoPlayOnSlide) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            // Autoplay prevented by browser (e.g. user hasn't interacted yet)
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    } else {
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, [currentIndex, currentVideo.src, autoPlayOnSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if video container is in viewport
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    setCurrentTime(video.currentTime);
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      void container.requestFullscreen?.().catch(() => {});
    } else {
      void document.exitFullscreen?.().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (!currentVideo) return null;

  return (
    <div
      ref={containerRef}
      className={`video-carousel-root ${className}`}
      aria-label="Sports project videos carousel"
    >
      {/* Main Single-Video Stage */}
      <div className="video-stage-wrapper">
        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={handlePrev}
          className="video-carousel-arrow video-carousel-arrow-prev"
          aria-label="Previous video"
          title="Previous video (Left Arrow)"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          onClick={handleNext}
          className="video-carousel-arrow video-carousel-arrow-next"
          aria-label="Next video"
          title="Next video (Right Arrow)"
        >
          <ChevronRight size={28} />
        </button>

        {/* Video Player Card */}
        <div className="video-player-card">
          <div className="video-screen-container" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={currentVideo.src}
              playsInline
              muted={isMuted}
              loop
              preload="metadata"
              className="video-element"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => {
                setIsLoading(false);
                setIsPlaying(true);
              }}
              onPause={() => setIsPlaying(false)}
            />

            {/* Ambient subtle vignette overlay */}
            <div className="video-vignette-overlay" />

            {/* Top Badges overlay */}
            <div className="video-top-badges">
              <span className="video-counter-badge">
                <Film size={13} className="text-red-400" />
                {String(currentIndex + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
              </span>
              <span className="video-category-badge">{currentVideo.category}</span>
              {currentVideo.badge && (
                <span className="video-special-badge">
                  <Sparkles size={12} />
                  {currentVideo.badge}
                </span>
              )}
            </div>

            {/* Center Play/Pause button on pause or hover */}
            {(!isPlaying || isLoading) && (
              <div className="video-center-action-overlay">
                <button
                  type="button"
                  className="video-big-play-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isLoading ? (
                    <div className="video-loader-spinner" />
                  ) : (
                    <Play size={32} className="translate-x-0.5 fill-current" />
                  )}
                </button>
              </div>
            )}

            {/* Interactive Player Controls Bar */}
            <div
              className="video-controls-overlay"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Seek track progress */}
              <div
                className="video-progress-track"
                onClick={handleSeek}
                role="slider"
                aria-label="Video timeline"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="video-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="video-controls-bar">
                <div className="video-controls-left">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="video-ctl-btn"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="video-ctl-btn"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    title={isMuted ? "Click to unmute" : "Mute audio"}
                  >
                    {isMuted ? (
                      <VolumeX size={18} className="text-red-400" />
                    ) : (
                      <Volume2 size={18} />
                    )}
                  </button>

                  <span className="video-time-display">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </span>
                </div>

                <div className="video-controls-right">
                  {isMuted && (
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="video-unmute-pill"
                    >
                      <VolumeX size={14} />
                      <span>Unmute Sound</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="video-ctl-btn"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Metadata Panel below video */}
          <div className="video-details-panel">
            <div className="video-details-header">
              <div className="video-title-area">
                <div className="video-location-pill">
                  <MapPin size={13} className="text-red-500" />
                  <span>{currentVideo.location}</span>
                </div>
                <h3 className="video-title-heading">{currentVideo.title}</h3>
                {currentVideo.subtitle && (
                  <p className="video-subtitle-copy">{currentVideo.subtitle}</p>
                )}
              </div>

              <div className="video-nav-summary">
                <span className="video-nav-fraction">
                  <span className="fraction-current">0{currentIndex + 1}</span>
                  <span className="fraction-slash">/</span>
                  <span className="fraction-total">0{videos.length}</span>
                </span>
                <div className="video-arrow-pair">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="video-mini-arrow"
                    aria-label="Previous video"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="video-mini-arrow"
                    aria-label="Next video"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <p className="video-description-text">{currentVideo.description}</p>
          </div>
        </div>
      </div>

      {/* Video Playlist Selector Console */}
      <div className="video-playlist-console">
        <div className="video-playlist-header">
          <div className="playlist-header-left">
            <Film size={14} className="text-red-500" />
            <span className="playlist-title">Select Installation Video</span>
          </div>
          <span className="playlist-counter-label">
            {videos.length} Project Reels
          </span>
        </div>

        <div className="video-playlist-strip" role="tablist" aria-label="Select video">
          {videos.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setCurrentIndex(idx)}
                className={`video-playlist-pill ${isActive ? "is-active" : ""}`}
              >
                <span className="pill-index">0{idx + 1}</span>
                <div className="pill-meta">
                  <span className="pill-title">{item.title}</span>
                  <span className="pill-loc">{item.location}</span>
                </div>
                {isActive && <span className="pill-indicator-dot" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
