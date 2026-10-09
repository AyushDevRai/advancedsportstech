"use client";

import { useEffect, useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";

interface TypewriterAuroraProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  colors?: string[];
  className?: string;
}

export function TypewriterAurora({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2200,
  colors = ["#d32628", "#e63538", "#d32628", "#bd1d20"],
  className = "hero-aurora hero-aurora-excellence",
}: TypewriterAuroraProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0] || "ELITE SURFACES.");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="typewriter-heading-wrapper inline-flex items-center">
      <AuroraText className={className} colors={colors} speed={1.2}>
        {currentText || "\u00A0"}
      </AuroraText>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
