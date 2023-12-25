import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className="flex justify-center items-center flex-col"
    >
      <span className='loader'></span>
      <p
        className="text-lg text-gray-800 font-bold mt-80 whitespace-nowrap"
      >
        Loading 3D models ( {progress.toFixed(2)}% )
      </p>
    </Html>
  );
};

export default Loader;