"use client"

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function CoinMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01));
  return (
    <>
      <mesh ref={mesh} scale={3}>
        <ambientLight intensity={1} />
        <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
        <meshLambertMaterial color="red" attach="material" />
      </mesh>
    </>

  );
}

export default function Main() {
  return (
    <>
      <Canvas>

        <CoinMesh />
      </Canvas>
    </>
  );
}