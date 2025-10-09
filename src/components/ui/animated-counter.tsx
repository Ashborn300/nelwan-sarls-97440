import { useCountAnimation } from "@/hooks/useCountAnimation";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  decimals = 0, 
  suffix = "", 
  prefix = "",
  className 
}: AnimatedCounterProps) => {
  const { count, ref } = useCountAnimation({ 
    end, 
    duration, 
    decimals, 
    startOnView: true 
  });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}{count}{suffix}
    </span>
  );
};