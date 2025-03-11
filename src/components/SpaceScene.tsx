import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Planet({ 
  position, 
  size, 
  rotationSpeed = 0.005,
  textureUrl,
  orbitRadius = 0,
  orbitSpeed = 0.001,
  name = ''
}: { 
  position: [number, number, number]; 
  size: number; 
  rotationSpeed?: number;
  textureUrl: string;
  orbitRadius?: number;
  orbitSpeed?: number;
  name?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(textureUrl);
  const time = useRef(Math.random() * 100);

  useFrame((state) => {
    if (meshRef.current) {
      // Self rotation
      meshRef.current.rotation.y += rotationSpeed;

      // Orbital motion
      if (orbitRadius > 0) {
        time.current += orbitSpeed;
        meshRef.current.position.x = Math.cos(time.current) * orbitRadius;
        meshRef.current.position.z = Math.sin(time.current) * orbitRadius;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function OrbitRing({ radius }: { radius: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.1, radius + 0.1, 128]} />
      <meshBasicMaterial color="#ffffff" opacity={0.1} transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
}

export function SpaceScene() {
  return (
    <Canvas camera={{ position: [0, 30, 80], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ffd700" />
      <Stars radius={300} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      
      {/* Orbit Rings */}
      <OrbitRing radius={10} />
      <OrbitRing radius={15} />
      <OrbitRing radius={20} />
      <OrbitRing radius={25} />
      <OrbitRing radius={35} />
      <OrbitRing radius={45} />
      
      {/* Sun */}
      <Planet 
        position={[0, 0, 0]} 
        size={5} 
        textureUrl="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=1024&q=80"
        rotationSpeed={0.002}
        name="Sun"
      />
      
      {/* Mercury */}
      <Planet 
        position={[10, 0, 0]} 
        size={0.8} 
        textureUrl="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=1024&q=80"
        orbitRadius={10}
        orbitSpeed={0.008}
        name="Mercury"
      />
      
      {/* Venus */}
      <Planet 
        position={[15, 0, 0]} 
        size={1.2} 
        textureUrl="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1024&q=80"
        orbitRadius={15}
        orbitSpeed={0.006}
        name="Venus"
      />
      
      {/* Earth */}
      <Planet 
        position={[20, 0, 0]} 
        size={1.5} 
        textureUrl="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1024&q=80"
        orbitRadius={20}
        orbitSpeed={0.004}
        name="Earth"
      />
      
      {/* Mars */}
      <Planet 
        position={[25, 0, 0]} 
        size={1} 
        textureUrl="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1024&q=80"
        orbitRadius={25}
        orbitSpeed={0.003}
        name="Mars"
      />

      {/* Jupiter */}
      <Planet 
        position={[35, 0, 0]} 
        size={3.5} 
        textureUrl="https://images.unsplash.com/photo-1630839437035-dac17da580d0?auto=format&fit=crop&w=1024&q=80"
        orbitRadius={35}
        orbitSpeed={0.002}
        name="Jupiter"
      />

      {/* Saturn */}
      <Planet 
        position={[45, 0, 0]} 
        size={3} 
        textureUrl="https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&w=1024&q=80"
        orbitRadius={45}
        orbitSpeed={0.001}
        name="Saturn"
      />
      
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true}
        maxDistance={200}
        minDistance={20}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}