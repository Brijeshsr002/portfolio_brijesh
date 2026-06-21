import React, { useEffect, useState } from 'react';

export const InteractiveCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover (not touch-only)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile]);

  // Smooth trailing effect
  useEffect(() => {
    if (isMobile || isHidden) return;

    let animationFrameId: number;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease factor (0.15 for smooth follow)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile, isHidden]);

  // Handle link/button hover state
  useEffect(() => {
    if (isMobile) return;

    const addHover = () => setIsHovered(true);
    const removeHover = () => setIsHovered(false);

    const updateInteractiveElements = () => {
      const elements = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .interactive-card');
      elements.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
      return elements;
    };

    const elements = updateInteractiveElements();

    // Create an observer to handle dynamic elements
    const observer = new MutationObserver(() => {
      const currentElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .interactive-card');
      currentElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Outer Trailing Ring */}
      <div
        className="custom-cursor"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: isHovered ? '50px' : '24px',
          height: isHovered ? '50px' : '24px',
          borderColor: isHovered ? '#06B6D4' : '#6366F1',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(6, 182, 212, 0.4)' : 'none',
        }}
      />
      {/* Inner Pinpoint Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          backgroundColor: isHovered ? '#8B5CF6' : '#06B6D4',
        }}
      />
    </>
  );
};
export default InteractiveCursor;
