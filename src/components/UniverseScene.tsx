import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Multiverse() {
  const group = useRef<THREE.Group>(null);
  const universeCount = 5;
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: universeCount }).map((_, index) => (
        <Universe 
          key={index} 
          position={[
            Math.cos(index * (Math.PI * 2) / universeCount) * 15,
            Math.sin(index * Math.PI) * 5,
            Math.sin(index * (Math.PI * 2) / universeCount) * 15
          ]}
          scale={2 + Math.sin(index) * 0.5}
          color={new THREE.Color().setHSL(index * 0.1 + 0.5, 0.8, 0.5)}
        />
      ))}
    </group>
  );
}

function Universe({ position, scale, color }) {
  const mesh = useRef<THREE.Mesh>(null);
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    const radius = Math.random() * scale;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
      mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <points ref={mesh} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

export function UniverseScene() {
  return (
    <Canvas camera={{ position: [0, 15, 40], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />
      <Multiverse />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}