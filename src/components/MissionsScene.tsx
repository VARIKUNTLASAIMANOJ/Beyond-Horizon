import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function PastMissionScene() {
  const group = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  const shuttleParticles = useRef<THREE.Points>(null);

  // Create shuttle trail effect
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    const radius = 3 + Math.random() * 0.2;
    const angle = (i / particlesCount) * Math.PI * 2;
    
    positions[i3] = Math.cos(angle) * radius;
    positions[i3 + 1] = Math.sin(angle) * radius;
    positions[i3 + 2] = (Math.random() - 0.5) * 0.5;
    
    const color = new THREE.Color();
    color.setHSL(0.6, 0.8, 0.5 + Math.random() * 0.2);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002;
    }
    if (shuttleParticles.current) {
      shuttleParticles.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={moonRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#888888" roughness={1} />
      </mesh>
      <points ref={shuttleParticles}>
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
          size={0.05}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
          transparent={true}
          opacity={0.8}
        />
      </points>
    </group>
  );
}

function PresentMissionScene() {
  const group = useRef<THREE.Group>(null);
  const telescopeRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    const radius = Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.5);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
    if (telescopeRef.current) {
      telescopeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={telescopeRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 3, 1]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.2} />
      </mesh>
      <points ref={particlesRef}>
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
          size={0.05}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
          transparent={true}
          opacity={0.6}
        />
      </points>
    </group>
  );
}

function FutureMissionScene() {
  const group = useRef<THREE.Group>(null);
  const marsRef = useRef<THREE.Mesh>(null);
  const baseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
    if (marsRef.current) {
      marsRef.current.rotation.y += 0.002;
    }
    if (baseRef.current) {
      baseRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={marsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#c1440e" roughness={0.8} />
      </mesh>
      <mesh ref={baseRef} position={[2.5, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.8, 0.5, 6]} />
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function MissionsScene({ era }) {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {era === 'past' && <PastMissionScene />}
      {era === 'present' && <PresentMissionScene />}
      {era === 'future' && <FutureMissionScene />}
      
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