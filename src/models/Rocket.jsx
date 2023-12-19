import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import rocketScene from '../assets/3d/rocket.glb';
import { useFrame } from '@react-three/fiber';

const Rocket = ({ isRotating, ...props }) => {
    const rocketRef = useRef();

    // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(rocketScene);
  
    // Get access to the animations for the rocket
    const { actions } = useAnimations(animations, rocketRef);
  
    // Play the "Take 001" animation when the component mounts
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    useEffect(() => {
      actions["Take 001"].play();
    }, []);
  
    useFrame(({ clock, camera }) => {
      // Update the Y position to simulate rocket-like motion using a sine wave
      rocketRef.current.position.y = Math.sin(clock.elapsedTime) * 0.3 - 3;
  
      // Check if the rocket reached a certain endpoint relative to the camera
      if (rocketRef.current.position.x > camera.position.x + 1) {
        // Change direction to backward and rotate the rocket 180 degrees on the y-axis
        rocketRef.current.rotation.y = Math.PI;
      } else if (rocketRef.current.position.x < camera.position.x - 1) {
        // Change direction to forward and reset the rocket's rotation
        rocketRef.current.rotation.y = 0;
      }
  
      // Update the X and Z positions based on the direction
      if (rocketRef.current.rotation.y === 0) {
        // Moving forward
        rocketRef.current.position.x += 0.009;
        rocketRef.current.position.z -= 0.08;
      } else {
        // Moving backward
        rocketRef.current.position.x -= 0.009;
        rocketRef.current.position.z += 0.08;
      }
    });
  
    return (
      // to create and display 3D objects
      <mesh ref={rocketRef} position={[-1, 0, 0]} scale={[0.007, 0.007, 0.007]} rotation={[0, -1, 0]}>
        <primitive object={scene} />
      </mesh>
    );
}

export default Rocket;