import { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { getCurrentResolution } from "../constants/resolutions";

const useSunMovementBounds = () => {
  const { size } = useThree();
  const [bounds, setBounds] = useState({ x: 5, y: 5 });
  const currentResolution = getCurrentResolution();

  useEffect(() => {
    const updatedSunMovementBounds = {
      x: size.width / currentResolution.ratio,
      y: size.height / currentResolution.ratio,
    };
    setBounds(updatedSunMovementBounds);
  }, [window]);

  return bounds;
};

export default useSunMovementBounds;
