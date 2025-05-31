'use client';

import { useState } from 'react';

type TypingHoverTextProps = {
  text: string;
  speed?: number; 
  className?: string;
};

export default function TypingHoverText({ text, speed = 115, className }: TypingHoverTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [isTyping, setIsTyping] = useState(false);

  const handleMouseEnter = () => {
    if (isTyping) return;

    setIsTyping(true);
    const chars = text.split('');
    setDisplayedText('');
    let i = 0;

    const interval = setInterval(() => {
        if (i===0){
            setDisplayedText(chars[0]);
        }
        setDisplayedText((prev) => prev + chars[i]);
        i++;
        if (i >= chars.length) {
            clearInterval(interval);
            setIsTyping(false);
            setDisplayedText(text);
        }
    }, speed);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={className}
    >
      {displayedText}
    </span>
  );
}
