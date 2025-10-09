import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const element = ref.current;
    if (element) {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return ref;
};

export const useScrollRevealMultiple = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const container = containerRef.current;
    if (container) {
      const elements = container.querySelectorAll('.scroll-reveal-item');
      elements.forEach((el, index) => {
        el.classList.add("scroll-reveal");
        (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
      });
    }

    return () => {
      if (container) {
        const elements = container.querySelectorAll('.scroll-reveal-item');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return containerRef;
};