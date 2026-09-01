import React, { useState, useEffect, Suspense, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Center, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Immediately start fetching 3D model into Three.js cache
useGLTF.preload('/yamaha-yzf-2021/source/1117111.glb');

// 3D Yamaha Model for Preloader
function SmallRidingYamaha({ onLoad }) {
  const { scene } = useGLTF('/yamaha-yzf-2021/source/1117111.glb');

  useEffect(() => {
    if (!scene) return;

    // Apply dark metallic materials
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#1c1d21'),
            metalness: 0.85,
            roughness: 0.25,
          });
        }
      }
    });

    if (onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  return (
    <Center top>
      <primitive
        object={scene}
        scale={0.8}
        rotation={[0, Math.PI / 2, 0]} // Profile facing right
      />
    </Center>
  );
}

// React Error Boundary to prevent WebGL/GLTF crashes
class PreloaderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Preloader 3D Canvas Error Handled:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center text-[#FF3D00]">
          <span className="text-[10px] font-mono tracking-widest">🏍️ 3D RIDER</span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);       // 0 to 100%
  const [speed, setSpeed] = useState(0);             // 0 to 300 km/h
  const [modelLoaded, setModelLoaded] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Callback when 3D model finishes downloading & parsing
  const handleModelLoaded = () => {
    setModelLoaded(true);
  };

  useEffect(() => {
    // Progress Loop
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Speedometer Loop (0 to 300 KM/H)
    const speedInterval = setInterval(() => {
      setSpeed((prev) => {
        if (prev >= 300) {
          clearInterval(speedInterval);
          return 300;
        }
        return Math.min(300, Math.floor(prev + 6));
      });
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(speedInterval);
    };
  }, []);

  // Check if BOTH progress === 100 AND modelLoaded === true (with safety 4s max cap)
  useEffect(() => {
    let dismissTimer;

    const checkAndFinish = () => {
      if (isDone) return;

      setIsDone(true);
      dismissTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    };

    if (progress >= 100 && modelLoaded) {
      checkAndFinish();
    }

    // Safety timeout in case GLTF asset takes longer on slow networks
    const maxSafetyTimeout = setTimeout(() => {
      if (!isDone) {
        checkAndFinish();
      }
    }, 4500);

    return () => {
      clearTimeout(dismissTimer);
      clearTimeout(maxSafetyTimeout);
    };
  }, [progress, modelLoaded, isDone, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050507] text-white flex flex-col justify-between p-6 sm:p-12 transition-all duration-700 ease-in-out font-tech select-none ${
        isDone ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Carbon Backdrop & Ambient Glow */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-40 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#FF3D00]/15 blur-[160px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Top Header Tagline */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF3D00] animate-ping" />
          <span className="font-display text-xl font-black uppercase text-white">
            GARAGE<span className="text-[#FF3D00]">WORK IN</span>
          </span>
        </div>
        <div className="text-xs font-mono text-[#8E9296] uppercase tracking-widest hidden sm:block">
          PUNE DOORSTEP BIKE CARE • PRELOADING 3D ENGINE
        </div>
      </div>

      {/* Center Digital Speedometer Counter (0 to 300 KM/H) */}
      <div className="relative z-10 text-center my-auto">
        <div className="text-xs font-mono text-[#8E9296] uppercase tracking-widest mb-2">
          SYSTEM TELEMETRY SPEED
        </div>

        <div className="flex items-baseline justify-center gap-3">
          <span className="font-display text-7xl sm:text-9xl font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            {speed}
          </span>
          <span className="font-editorial text-2xl sm:text-4xl font-black text-[#FF3D00] uppercase tracking-wider">
            KM/H
          </span>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-white/80 uppercase tracking-widest">
            {modelLoaded ? '3D ASSETS READY' : 'PRELOADING 3D MOTORCYCLE MODEL...'} ({Math.floor(progress)}%)
          </span>
        </div>
      </div>

      {/* Bottom Track Stage: Riding 3D Bike + Electric Orange Horizontal Line */}
      <div className="relative z-10 w-full mb-4">
        {/* 3D Riding Bike Container (Moves Left to Right) */}
        <div
          className="absolute -top-32 w-48 h-32 transition-all duration-75 pointer-events-none"
          style={{ left: `calc(${progress}% - 96px)` }}
        >
          <PreloaderErrorBoundary>
            <Canvas
              camera={{ position: [0, 0.8, 3.2], fov: 40 }}
              className="w-full h-full"
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />
              <directionalLight position={[-5, 5, -5]} intensity={2} color="#FF3D00" />
              <Environment preset="city" />
              <Suspense fallback={null}>
                <SmallRidingYamaha onLoad={handleModelLoaded} />
              </Suspense>
            </Canvas>
          </PreloaderErrorBoundary>
        </div>

        {/* Base Track Line */}
        <div className="w-full h-[2px] bg-white/10 rounded-full relative overflow-hidden">
          {/* Glowing Electric Orange Progress Trail */}
          <div
            className="h-full bg-[#FF3D00] shadow-[0_0_15px_#FF3D00] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Track Footer Indicators */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#8E9296] mt-2">
          <span>0 KM/H</span>
          <span className="text-[#FF3D00] font-bold">GARAGE WORK IN TRACK</span>
          <span>300 KM/H</span>
        </div>
      </div>
    </div>
  );
}
