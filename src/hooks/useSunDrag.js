import { useDrag } from "react-use-gesture";
import { useThree } from "@react-three/fiber";

const useSunDrag = (
  sunRef,
  setCurrentStage,
  setSunDragging,
  sunDragging,
  hasBeenDragged,
  setHasBeenDragged,
  setVelocity
) => {
  const { size } = useThree();

  return useDrag(
    ({ xy: [x, y], down, movement: [mx, my], event }) => {
      const isTouch = event.touches && event.touches.length > 0;
      const scaleFactor = isTouch ? 400 : 800;
      const xPosition = (x - size.width / 2) / 60;
      const yPosition = (size.height / 2 - y) / 60;

      if (down) {
        sunRef.current.position.x = xPosition;
        sunRef.current.position.y = yPosition;
        setCurrentStage(null);

        if (!sunDragging) {
          setSunDragging(true);
        }
        if (!hasBeenDragged) {
          setHasBeenDragged(true);
        }
      } else {
        setVelocity({
          x: mx / scaleFactor,
          y: -my / scaleFactor,
        });
        setSunDragging(false);
      }
    },
    { pointerEvents: true }
  );
};

export default useSunDrag;
