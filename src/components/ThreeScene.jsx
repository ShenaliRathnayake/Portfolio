import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";


function ThreeScene() {


  return (

    <div className="absolute inset-0 -z-10">


      <Canvas>


        <ambientLight intensity={0.5} />



        <pointLight
          position={[10, 10, 10]}
          color="cyan"
        />



        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          fade
        />



        <OrbitControls
          enableZoom={false}
        />



      </Canvas>


    </div>

  );

}


export default ThreeScene;