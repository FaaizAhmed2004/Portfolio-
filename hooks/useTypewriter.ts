"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 100, pause = 1600) {
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const activeWord = words[currentWord];
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (text.length < activeWord.length) {
        timeout = setTimeout(() => setText(activeWord.slice(0, text.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(activeWord.slice(0, text.length - 1)), speed / 2);
      } else {
        setPhase("typing");
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, currentWord, pause, speed, words]);

  return text;
}
