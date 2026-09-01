import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    let animationFrame;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(updateTrailing);
    };
    animationFrame = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FF3D00] rounded-full pointer-events-none z-[9999] transition-transform duration-75 custom-cursor"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Trailing Outer Ring / Badge */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out custom-cursor flex items-center justify-center ${
          isHovered
            ? 'w-20 h-20 bg-[#FF3D00]/20 border border-[#FF3D00] backdrop-blur-sm rounded-full'
            : 'w-10 h-10 border border-white/20 rounded-full'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 40 : 20)}px, ${
            trailingPos.y - (isHovered ? 40 : 20)
          }px, 0)`,
        }}
      >
        {isHovered && cursorText && (
          <span className="text-[10px] font-tech font-bold text-[#FF3D00] tracking-widest uppercase animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
