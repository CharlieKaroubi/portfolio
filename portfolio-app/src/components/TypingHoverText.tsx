'use client';

import { useState, useRef } from 'react';

type TypingHoverTextProps = {
  text: string;
  speed?: number; 
  className?: string;
};

export default function TypingHoverText({ text, speed = 115, className }: TypingHoverTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isTyping) return;

    setIsTyping(true);
    const chars = text.split('');
    setDisplayedText(chars[0]);
    let i = 0;

    intervalRef.current = setInterval(() => {
        setDisplayedText((prev) => prev + chars[i]);
        i++;
        if (i >= chars.length) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            setIsTyping(false);
            setDisplayedText(text); 
        }
    }, speed);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); 
      intervalRef.current = null; 
    }
    setIsTyping(false); 
    setDisplayedText(text); 
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave = {handleMouseLeave}
      className={className}
    >
      {displayedText}
    </span>
  );
}
