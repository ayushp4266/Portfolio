import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function CinemaCameraModel({ mode = 'video', onShutter }) {
  const groupRef = useRef();
  const lensRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Mouse tracking parallax
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Smooth lerp towards pointer position
    const targetRotX = (state.pointer.y * -0.25);
    const targetRotY = (state.pointer.x * 0.45);
    
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);

    // Subtle breathing lens breathing in video mode
    if (lensRef.current && mode === 'video') {
      lensRef.current.position.z = 0.95 + Math.sin(state.clock.elapsedTime * 2) * 0.015;
    }
  });

  const bodyMat = new THREE.MeshStandardMaterial({
    color: '#121215',
    roughness: 0.35,
    metalness: 0.6,
  });

  const gripMat = new THREE.MeshStandardMaterial({
    color: '#08080A',
    roughness: 0.85,
    metalness: 0.1,
  });

  const metalRingMat = new THREE.MeshStandardMaterial({
    color: '#D4AF37', // Gold/Brass Cinema lens ring
    roughness: 0.25,
    metalness: 0.9,
  });

  const lensGlassMat = new THREE.MeshPhysicalMaterial({
    color: '#0A1128',
    transmission: 0.7,
    opacity: 1,
    transparent: true,
    roughness: 0.05,
    ior: 1.52,
    reflectivity: 0.9,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  const recDotMat = new THREE.MeshStandardMaterial({
    color: mode === 'video' ? '#E5383B' : '#333333',
    emissive: mode === 'video' ? '#E5383B' : '#000000',
    emissiveIntensity: mode === 'video' ? 2.5 : 0,
    roughness: 0.2,
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        if (onShutter) onShutter();
      }}
      scale={hovered ? 1.05 : 1}
      position={[0, 0, 0]}
    >
      {/* Main Camera Body */}
      <mesh material={bodyMat} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 1.4, 1.1]} />
      </mesh>

      {/* Right Ergonomic Grip */}
      <mesh material={gripMat} position={[1.15, -0.05, 0.2]} castShadow>
        <boxGeometry args={[0.5, 1.3, 0.8]} />
      </mesh>

      {/* Top Viewfinder / Prism Hump */}
      <mesh material={bodyMat} position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.45, 0.7, 0.4, 4]} />
      </mesh>

      {/* Hot Shoe Mount */}
      <mesh material={metalRingMat} position={[0, 1.08, 0]}>
        <boxGeometry args={[0.35, 0.06, 0.4]} />
      </mesh>

      {/* Top Shutter Button */}
      <mesh
        material={metalRingMat}
        position={[1.15, 0.65, 0.3]}
        onClick={(e) => {
          e.stopPropagation();
          if (onShutter) onShutter();
        }}
      >
        <cylinderGeometry args={[0.14, 0.14, 0.1, 16]} />
      </mesh>

      {/* Top Mode Dial */}
      <mesh material={bodyMat} position={[-0.8, 0.75, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.15, 24]} />
      </mesh>

      {/* Lens Mount Base */}
      <mesh material={metalRingMat} position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.82, 0.15, 32]} />
      </mesh>

      {/* Lens Barrel Main */}
      <mesh material={bodyMat} position={[0, 0, 0.85]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.4, 32]} />
      </mesh>

      {/* Cinema Cine-Ring Focus Teeth */}
      <mesh material={metalRingMat} position={[0, 0, 1.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.77, 0.77, 0.08, 32]} />
      </mesh>

      {/* Extended Front Lens Element */}
      <group ref={lensRef} position={[0, 0, 0.95]}>
        <mesh material={bodyMat} position={[0, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.72, 0.72, 0.35, 32]} />
        </mesh>

        {/* Front Glass Curvature */}
        <mesh material={lensGlassMat} position={[0, 0, 0.43]} rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[0.66, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35]} />
        </mesh>
      </group>

      {/* Front Tally / REC Indicator Light */}
      <mesh material={recDotMat} position={[-0.85, 0.5, 0.56]}>
        <sphereGeometry args={[0.07, 16, 16]} />
      </mesh>

      {/* Rear LCD Screen Frame */}
      <mesh material={gripMat} position={[0, 0, -0.56]}>
        <boxGeometry args={[1.7, 1.05, 0.04]} />
      </mesh>

      {/* Rear Screen Glass */}
      <mesh position={[0, 0, -0.58]}>
        <planeGeometry args={[1.5, 0.9]} />
        <meshStandardMaterial
          color={mode === 'video' ? '#080E1A' : '#141416'}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

export default function Camera3D({ mode = 'video', onShutter }) {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[540px] relative">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0.3, 4.6]} fov={36} />

        {/* Studio Cinematic Lighting */}
        <ambientLight intensity={0.6} />
        
        {/* Key Light */}
        <directionalLight
          position={[4, 5, 4]}
          intensity={1.8}
          color="#FFFDF7"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Cinema Red Rim / Fill Light */}
        <directionalLight
          position={[-4, -2, -2]}
          intensity={mode === 'video' ? 1.5 : 0.6}
          color="#E5383B"
        />

        {/* Top Rim Light */}
        <pointLight position={[0, 4, -2]} intensity={0.8} color="#EDE8DF" />

        <Float
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.05, 0.05]}
        >
          <CinemaCameraModel mode={mode} onShutter={onShutter} />
        </Float>

        {/* Ambient Contact Shadow */}
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.65}
          scale={5}
          blur={2.4}
          far={3}
          color="#000000"
        />
      </Canvas>

      {/* Floating Interactive Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="bg-[#141418]/80 backdrop-blur-md border border-[#26262E] px-3 py-1 rounded-full flex items-center space-x-2">
          <div className={`w-1.5 h-1.5 rounded-full ${mode === 'video' ? 'bg-[#E5383B] animate-pulse' : 'bg-[#EDE8DF]'}`} />
          <span className="text-[10px] font-mono tracking-widest text-[#8E8A83] uppercase">
            3D RIG · DRAG TO ROTATE · CLICK TO SNAP
          </span>
        </div>
      </div>
    </div>
  );
}
