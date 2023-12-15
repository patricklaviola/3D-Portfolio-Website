import { useEffect, useRef } from 'react'

import rocketScene from '../assets/3d/rocket.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Rocket = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(rocketScene);
    const { actions } = useAnimations(animations, ref);
    
    useEffect(() => {
        actions['Take 001'].play();
    }, [actions])

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Rocket;