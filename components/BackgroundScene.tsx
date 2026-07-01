"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

function FloatingSystem() {
  const group = useRef<Group>(null);
  const elapsedTimeRef = useRef(0);

  useFrame((_, delta) => {
    if (group.current) {
      elapsedTimeRef.current += delta;
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(elapsedTimeRef.current * 0.15) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <Float floatIntensity={2} rotationIntensity={0.6} speed={2}>
        <mesh position={[-1.4, 0.35, 0]}>
          <torusKnotGeometry args={[1.05, 0.27, 128, 32]} />
          <meshStandardMaterial emissive="#3b82f6" emissiveIntensity={0.9} metalness={0.4} roughness={0.15} color="#151923" />
        </mesh>
      </Float>

      <Float floatIntensity={1.4} rotationIntensity={0.4} speed={1.2}>
        <mesh position={[1.8, -0.4, -0.3]} scale={[1.3, 1.3, 1.3]}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial emissive="#8b5cf6" emissiveIntensity={0.8} metalness={0.35} roughness={0.12} color="#0f172a" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export function BackgroundScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 11], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#020209"]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 5, 6]} intensity={1.2} />
        <Stars radius={90} depth={40} count={1800} factor={4} saturation={0.2} fade speed={0.18} />
        <FloatingSystem />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={1.1} maxPolarAngle={1.9} />
      </Canvas>
    </div>
  );
}
