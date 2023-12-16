import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';


import Sky from '../models/Sky';
import Rocket from '../models/Rocket';
import HomeInfo from '../components/HomeInfo';
import BlackHole from '../models/BlackHole';
import Sun from '../models/Sun';

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustRocketForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [0.007, 0.007, 0.007];
      screenPosition = [0, -4, -3];
    } else {
      screenScale = [0.007, 0.007, 0.007];
      screenPosition = [0, -4, -2];
    }

    return [screenScale, screenPosition];
  };

  const adjustBlackHoleForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -1, -5];
    } else {
      screenScale = [3.5, 3.5, 3.5];
      screenPosition = [0, -1, -20];
    }

    return [screenScale, screenPosition];
  };

  const [rocketScale, rocketPosition] = adjustRocketForScreenSize();
  const [blackHoleScale, blackHolePosition] = adjustBlackHoleForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Sun />
          <Sky 
            isRotating={isRotating}
          />
          <BlackHole
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={blackHolePosition}
            rotation={[0.1, 4.7077, 0]}
            scale={blackHoleScale}
          />
          <Rocket
            isRotating={isRotating}
            position={rocketPosition}
            rotation={[0, 6.5, 0.2]}
            scale={rocketScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;