// import { Canvas } from "@react-three/fiber"
import FooterServer from "./FooterServer";
import { Suspense, useEffect, useRef, useState } from "react"



export default function FooterServerModel() {
    const mountRef = useRef(null);
  const [isModelVisible, setIsModelVisible] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsModelVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mount) {
      observer.observe(mount);
    }

    return () => {
      if (mount) {
        observer.unobserve(mount);
      }
    };
  }, []);
    return (
        <>
      <div ref={mountRef} style={{position:"absolute", top: 0, width: "100%", height: "25vw", opacity:1,zIndex:0}} className="" id="topesction-server">
      {isModelVisible &&
      <Canvas  camera={{position: [9,1.99,1.5],scale: [1.5,1.5,1.8],  zoom: 1.25}}  scene={{position: [-0.2,2.5,-0.1], AmbientLight:[0,0,0] ,rotation: [0,0,0]}} >

      <directionalLight  color={"#4C7DBD"} position={[4,1,12]} rotation={[0,0,1]}  intensity={10}  />
      <directionalLight  color={"#4C7DBD"} position={[0,10,-2]} rotation={[0,0,0]}  intensity={0}  />
      <directionalLight color={"#C2D9FF"} position={[5,10,-5]} rotation={[0,0,0]}  intensity={0}  />
      <spotLight  color={"white"} position={[2,22,12]} intensity={1000} />
     <pointLight color={"white"} position={[-10,6,0]} intensity={2000}  />
     <pointLight  color={"white"} position={[0,0,28]}  intensity={2000}  />
     <pointLight color={"#ffffff"} position={[0,0,4]} intensity={0}  />
     <directionalLight color={"#ffffff"} position={[0,10,-2]} rotation={[0,0,0]}  intensity={0}  />

<Suspense fallback={<h1>loading</h1>}>
<FooterServer  />
</Suspense>
</Canvas>}

        </div>
        </>
    )
}