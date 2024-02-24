import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";

export const useBlackHoleEvents = (
  blackHoleRef,
  actions,
  isRotatingRight,
  isRotatingLeft,
  setIsRotatingRight,
  setIsRotatingLeft,
  sunDragging
) => {
  const rotationSpeed = useRef(0);
  const initialTouchYRef = useRef(0);
  const rotationEndTimeoutRef = useRef();
  const { gl } = useThree();

  const handleKeyDown = (event) => {
    const action = actions["Take 001"];

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      if (!isRotatingRight) setIsRotatingRight(true);

      blackHoleRef.current.rotation.y += 0.009 * Math.PI;
      rotationSpeed.current = 0.09;

      if (action) {
        action.timeScale = 2;
        action.play();
      }
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      if (!isRotatingLeft) setIsRotatingLeft(true);

      blackHoleRef.current.rotation.y -= 0.009 * Math.PI;
      rotationSpeed.current = -0.09;

      if (action) {
        action.timeScale = -2;
        action.play();
      }
    }
  };

  const handleKeyUp = (event) => {
    const action = actions["Take 001"];

    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      setIsRotatingRight(false);
      setIsRotatingLeft(false);
      if (action) {
        action.timeScale = 0.5;
      }
    }
  };

  const handleScroll = (event) => {
    event.stopPropagation();

    const scrollDelta = event.deltaY;
    setIsRotatingRight(scrollDelta > 0);
    setIsRotatingLeft(scrollDelta < 0);
    const rotationChange = scrollDelta * 0.0002 * Math.PI;
    blackHoleRef.current.rotation.y += rotationChange;
    rotationSpeed.current = rotationChange;

    const action = actions["Take 001"];
    if (action) {
      action.timeScale = scrollDelta > 0 ? 2 : -2;
      action.play();
    }

    clearTimeout(rotationEndTimeoutRef.current);

    rotationEndTimeoutRef.current = setTimeout(() => {
      setIsRotatingRight(false);
      setIsRotatingLeft(false);

      if (action) {
        action.timeScale = 0.5;
      }
    }, 100);
  };

  const handleTouchStart = (event) => {
    if (event.touches.length === 1) {
      initialTouchYRef.current = event.touches[0].clientY;
    }
  };

  const handleTouchMove = (event) => {
    if (event.touches.length === 1) {
      event.preventDefault();
      event.stopPropagation();

      const currentTouchY = event.touches[0].clientY;
      const deltaY = initialTouchYRef.current - currentTouchY;
      initialTouchYRef.current = currentTouchY;
      const scrollDelta = deltaY;

      if (!sunDragging) {
        setIsRotatingRight(scrollDelta > 0);
        setIsRotatingLeft(scrollDelta < 0);
        const rotationChange = scrollDelta * 0.001 * Math.PI;
        blackHoleRef.current.rotation.y += rotationChange;
        rotationSpeed.current = rotationChange;

        const action = actions["Take 001"];

        if (action) {
          action.timeScale = scrollDelta > 0 ? 2 : -2;
          action.play();
        }

        clearTimeout(rotationEndTimeoutRef.current);

        rotationEndTimeoutRef.current = setTimeout(() => {
          setIsRotatingRight(false);
          setIsRotatingLeft(false);
          if (action) {
            action.timeScale = 0.5;
          }
        }, 100);
      }
    }
  };

  useEffect(() => {
    const blackHole = blackHoleRef.current;

    if (blackHole) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      if (blackHole) {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [gl, handleScroll]);

  return {
    handleKeyDown,
    handleKeyUp,
    handleScroll,
    handleTouchStart,
    handleTouchMove,
  };
};
