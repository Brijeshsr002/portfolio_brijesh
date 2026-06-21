import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        // Stop observing once animated in to keep it visible
        observer.unobserve(currentElement);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement && !isIntersecting) {
        observer.unobserve(currentElement);
      }
    };
  }, [options, isIntersecting]);

  return [elementRef, isIntersecting] as const;
};

export default useIntersectionObserver;
