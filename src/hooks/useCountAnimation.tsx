import { useEffect, useRef, useState } from "react";

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
  decimals?: number;
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000, 
  startOnView = true,
  decimals = 0 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!startOnView) {
      animateCount();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [startOnView, isVisible]);

  useEffect(() => {
    if (isVisible || !startOnView) {
      animateCount();
    }
  }, [isVisible, startOnView, end]);

  const animateCount = () => {
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (end - startValue) * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const formatCount = (value: number) => {
    return decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
  };

  return {
    count: formatCount(count),
    ref: elementRef
  };
};