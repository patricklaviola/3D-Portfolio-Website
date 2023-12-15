import { useEffect, useRef } from 'react'

import blackholeScene from '../assets/3d/blackhole.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const BlackHole = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(blackholeScene);
    const { actions } = useAnimations(animations, ref);
    
    useEffect(() => {
        actions['Take 001'].play();
        // if(isRotating) {
        //     actions['Take 001'].play();
        // } else {
        //     actions['Take 001'].stop();
        // }
    }, [actions, isRotating])

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
}

export default BlackHole;