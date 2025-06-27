"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // Trigger when 30% of the element is visible
  });

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ?? 1,
          delay: stagger(0.05),
        }
      );
    } else {
      // Reset animation when out of view
      animate(
        "span",
        {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        },
        {
          duration: 0,
        }
      );
    }
  }, [inView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-white opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-white text-inherit leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
