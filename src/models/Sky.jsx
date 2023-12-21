import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/night_sky.glb'

const Sky = ({ isRotatingRight, isRotatingLeft }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
        // skyRef.current.rotation.y += 0.1 * delta
        if(isRotatingRight) {
            skyRef.current.rotation.y += 0.8 * delta
        }
        if(isRotatingLeft) {
            skyRef.current.rotation.y -= 0.8 * delta
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    )
}

export default Sky;