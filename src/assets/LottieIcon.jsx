import { useRef } from "react";
import Lottie from "lottie-react";

export default function LottieIcon({ animation , className }) {
  const lottieRef = useRef(null); // Create a ref for the animation

  return (
    <div
      onMouseEnter={() => lottieRef.current?.play()}  // Play on hover
      onMouseLeave={() => lottieRef.current?.stop()}  // Stop on hover out
      className={`hover:scale-105 transform transition-all ${className}`} // Apply dynamic className
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animation}
        autoplay={false}
        loop={false}
      />
    </div>
  );
}
