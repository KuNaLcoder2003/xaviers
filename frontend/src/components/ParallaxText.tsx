
// import { useRef , useEffect } from "react";
// import { motion, useScroll, useTransform, useSpring , MotionValue , useVelocity} from "framer-motion";
// import { cn } from "@/lib/utils";

// interface ParallaxTextProps {
//   children: React.ReactNode;
//   className?: string;
//   baseVelocity?: number;
// }

// export default function ParallaxText({ 
//   children, 
//   className, 
//   baseVelocity = 100 
// }: ParallaxTextProps) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false
//   });

//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef<number>(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   /**
//    * The number of times to repeat the child text should be dynamically calculated
//    * based on the size of the text and viewport. Likewise, the x motion value is
//    * currently wrapped between -20 and -45% - this 25% is derived from the fact
//    * we have four children (100% / 4). This would also want deriving from the
//    * dynamically generated number of children.
//    */
//   return (
//     <div className={cn("overflow-hidden m-0 whitespace-nowrap flex flex-nowrap", className)}>
//       <motion.div className="flex whitespace-nowrap" style={{ x }}>
//         <span className="block mr-10">{children}</span>
//         <span className="block mr-10">{children}</span>
//         <span className="block mr-10">{children}</span>
//         <span className="block mr-10">{children}</span>
//       </motion.div>
//     </div>
//   );
// }

// function useMotionValue(initialValue: number) {
//   const ref = useRef<number>(initialValue);
//   const set = (v: number) => {
//     ref.current = v;
//   };
//   const get = () => ref.current;

//   return { set, get };
// }

// // function useVelocity(value: { get: () => number }) {
// //   const ref = useRef<number>(0);
// //   const lastValue = useRef<number>(value.get());
// //   const lastTime = useRef<number>(performance.now());

// //   useAnimationFrame(() => {
// //     const currentTime = performance.now();
// //     const currentValue = value.get();
// //     const delta = currentTime - lastTime.current;

// //     if (delta > 0) {
// //       ref.current = (currentValue - lastValue.current) / delta;
// //     }

// //     lastValue.current = currentValue;
// //     lastTime.current = currentTime;
// //   });

// //   return { get: () => ref.current };
// // }

// function wrap(min: number, max: number, v: number) {
//   const rangeSize = max - min;
//   return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
// }

// function useAnimationFrame(callback: (time: number, delta: number) => void) {
//   const callbackRef = useRef<(time: number, delta: number) => void>(callback);
//   const lastTimeRef = useRef<number>(0);

//   useRef<number | null>(null);

//   useEffect(() => {
//     callbackRef.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     const tick = (time: number) => {
//       if (lastTimeRef.current === 0) {
//         lastTimeRef.current = time;
//       }
//       const delta = time - lastTimeRef.current;
//       lastTimeRef.current = time;
//       callbackRef.current(time, delta);
//       requestAnimationFrame(tick);
//     };

//     const id = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(id);
//   }, []);
// }

import { useRef, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useVelocity 
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  baseVelocity?: number;
}

export default function ParallaxText({ 
  children, 
  className, 
  baseVelocity = 100 
}: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={cn("overflow-hidden m-0 whitespace-nowrap flex flex-nowrap", className)}>
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <span className="block mr-10">{children}</span>
        <span className="block mr-10">{children}</span>
        <span className="block mr-10">{children}</span>
        <span className="block mr-10">{children}</span>
      </motion.div>
    </div>
  );
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function useAnimationFrame(callback: (time: number, delta: number) => void) {
  const callbackRef = useRef(callback);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (time: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time;
      }
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      callbackRef.current(time, delta);
      requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
}

