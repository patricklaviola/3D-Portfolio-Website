import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import rocketScene from '../assets/3d/rocket.glb';
import { useFrame } from '@react-three/fiber';

const Rocket = ({ isRotating, ...props }) => {
    const rocketRef = useRef();
    const { scene, animations } = useGLTF(rocketScene);
    const { actions } = useAnimations(animations, rocketRef);


    useEffect(() => {
      actions["Take 001"].play();
    }, []);


    useFrame(({ clock, camera }) => {
      rocketRef.current.position.y = Math.sin(clock.elapsedTime) * 0.3 - 0.9;

      if (rocketRef.current.position.x > camera.position.x + 0.1) {
        rocketRef.current.rotation.y = Math.PI;
      } else if (rocketRef.current.position.x < camera.position.x - 0.8) {
        rocketRef.current.rotation.y = 0;
      }

      if (rocketRef.current.rotation.y === 0) {
        rocketRef.current.position.x += 0.002;
        rocketRef.current.position.z -= 0.04;
      } else {
        rocketRef.current.position.x -= 0.002;
        rocketRef.current.position.z += 0.04;
      }
    });
  
    return (
      <mesh ref={rocketRef} position={[-0.5, 0, 0]} scale={[0.002, 0.002, 0.002]}>
        <primitive 
          object={scene}
          rotation={[0, 1.4, 0]}
        />
      </mesh>
    );
}

export default Rocket;