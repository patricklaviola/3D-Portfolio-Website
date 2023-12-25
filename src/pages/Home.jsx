import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';


import Sky from '../models/Sky';
import Rocket from '../models/Rocket';
import HomeInfo from '../components/HomeInfo';
import BlackHole from '../models/BlackHole';
import Sun from '../models/Sun';

import lofi from '../assets/lofi.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(lofi));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotatingRight, setIsRotatingRight] = useState(false);
  const [isRotatingLeft, setIsRotatingLeft] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [sunDragging, setSunDragging] = useState(false);


  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);


  const adjustBlackHoleForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.6, 1.6, 1.6];
      screenPosition = [0, -1, -10];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -1, -10];
    }

    return [screenScale, screenPosition];
  };


  const [blackHoleScale, blackHolePosition] = adjustBlackHoleForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent`}
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
          <Sky 
            isRotatingRight={isRotatingRight}
            isRotatingLeft={isRotatingLeft}
          />
          <BlackHole
            isRotatingRight={isRotatingRight}
            isRotatingLeft={isRotatingLeft}
            setIsRotatingRight={setIsRotatingRight}
            setIsRotatingLeft={setIsRotatingLeft}
            setCurrentStage={setCurrentStage}
            sunDragging={sunDragging}
            position={blackHolePosition}
            rotation={[0.1, 0, 0.1]}
            scale={blackHoleScale}
          />
          <Sun
            setCurrentStage={setCurrentStage}
            setSunDragging={setSunDragging}
          />
          <Rocket />
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