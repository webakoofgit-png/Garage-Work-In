import React, { Suspense, useState, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, ContactShadows, Environment, Html } from '@react-three/drei';
import { Shield, Star, ArrowRight, Play, CheckCircle2, Zap, RotateCcw, Box, Eye } from 'lucide-react';
import * as THREE from 'three';

// Yamaha YZF 3D Model Loader Component with Material Color & Texture Enhancement
useGLTF.preload('/yamaha-yzf-2021/source/1117111.glb');

function YamahaModel() {
  const { scene } = useGLTF('/yamaha-yzf-2021/source/1117111.glb');
  
  useLayoutEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const nodeName = (child.name || '').toLowerCase();
        const matName = (child.material && child.material.name || '').toLowerCase();

        // Style every part with sleek dark metallic automotive finishes
        if (nodeName.includes('wheel') || nodeName.includes('tire') || nodeName.includes('tyre') || matName.includes('tyre') || matName.includes('tire') || nodeName.includes('rim')) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#111113'),
            roughness: 0.85,
            metalness: 0.2,
          });
        } else if (nodeName.includes('disc') || nodeName.includes('brake') || nodeName.includes('caliper')) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#FF3D00'),
            emissive: new THREE.Color('#FF3D00'),
            emissiveIntensity: 0.6,
            metalness: 0.8,
            roughness: 0.2,
          });
        } else if (nodeName.includes('frame') || nodeName.includes('engine') || nodeName.includes('swingarm') || nodeName.includes('fork') || nodeName.includes('sprocket') || nodeName.includes('chain')) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#1c1d21'),
            metalness: 0.9,
            roughness: 0.25,
          });
        } else {
          // Bodywork, Tank, Seat & Fairings default to sleek metallic graphite black
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#121316'),
            metalness: 0.9,
            roughness: 0.18,
          });
        }
      }
    });
  }, [scene]);

  return (
    <Center top position={[0, -0.75, 0]}>
      <primitive 
        object={scene} 
        scale={1.6} 
        rotation={[0, Math.PI / 3.5, 0]} 
      />
    </Center>
  );
}

// 3D Canvas Loader Component
function Loader() {
  return (
    <Html center>
      <div className="glass-panel px-6 py-3 rounded-xl border border-[#FF3D00] shadow-2xl flex items-center gap-3 whitespace-nowrap">
        <div className="w-5 h-5 rounded-full border-2 border-[#FF3D00] border-t-transparent animate-spin" />
        <span className="font-tech text-xs font-bold text-white uppercase tracking-widest">
          LOADING YAMAHA YZF 3D ASSETS...
        </span>
      </div>
    </Html>
  );
}

// 3D Scene Wrapper
function Motorcycle3DCanvas({ isAutoRotate }) {
  return (
    <Canvas
      camera={{ position: [2.7, 0.9, 3.4], fov: 42 }}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.25 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 15, 10]} intensity={3} color="#ffffff" castShadow />
      <directionalLight position={[-10, 10, -10]} intensity={2} color="#FF3D00" />
      <pointLight position={[0, 4, 0]} intensity={2.5} color="#ffffff" />
      <spotLight position={[5, 10, 5]} intensity={3} angle={0.6} penumbra={0.8} color="#ffffff" />

      {/* Realistic Environment Studio Reflection */}
      <Environment preset="city" />

      <Suspense fallback={<Loader />}>
        <YamahaModel />
      </Suspense>

      {/* Contact Shadow on Floor */}
      <ContactShadows 
        position={[0, -0.65, 0]} 
        opacity={0.85} 
        scale={8} 
        blur={1.8} 
        far={4} 
        color="#000000" 
      />

      {/* 360 Degree Orbit Controls - Scroll Zoom Disabled */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.05}
        minPolarAngle={Math.PI / 8}
        autoRotate={isAutoRotate}
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}

export default function Hero3D({ onOpenBooking }) {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-carbon-pattern border-b border-white/10">
      {/* Background Lighting & Particles Glow */}
      <div className="absolute inset-0 bg-radial from-[#FF3D00]/15 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* Speed Streaks Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF3D00]/40 to-transparent animate-pulse" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Headlines, Copy & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 pt-4">
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech tracking-widest uppercase text-[#FF3D00]">
            <Zap className="w-3.5 h-3.5 animate-bounce text-[#FF3D00]" />
            <span>PUNE & PCMC DOORSTEP SERVICE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D00]" />
            <span className="text-[#8E9296]">FREE PICKUP & DROP</span>
          </div>

          {/* Editorial Headline Layering */}
          <div className="space-y-1">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] drop-shadow-2xl">
              PUNE'S BIKE CARE <br />
              <span className="metallic-text">RE-ENGINEERED.</span>
            </h1>

            <div className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#FF3D00] uppercase tracking-wide pt-2">
              YOUR BIKE. OUR RESPONSIBILITY.
            </div>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#8E9296] font-sans max-w-xl leading-relaxed">
            Expert mechanics, 100% transparent pricing, and a luxury doorstep bike servicing experience delivered across Pune & PCMC. 
            <strong className="text-white font-medium"> Pay after delivery and test ride.</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-sm tracking-widest uppercase rounded-lg shadow-xl shadow-[#FF3D00]/30 transition-all transform hover:-translate-y-1 flex items-center gap-3 group"
              data-cursor="BOOK"
            >
              <span>BOOK YOUR SERVICE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#how-it-works"
              className="px-6 py-4 bg-[#111] hover:bg-[#1f2124] text-[#F4F2ED] border border-white/15 font-tech font-medium text-sm tracking-widest uppercase rounded-lg transition-all flex items-center gap-2"
              data-cursor="EXPLORE"
            >
              <Play className="w-4 h-4 text-[#FF3D00]" />
              <span>SEE HOW IT WORKS</span>
            </a>
          </div>

          {/* Floating Trust Pills */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl">
            <div className="glass-card px-3.5 py-2.5 rounded-lg flex items-center gap-2.5">
              <Star className="w-4 h-4 text-[#FF3D00] fill-[#FF3D00]" />
              <div>
                <div className="font-tech text-xs font-bold text-[#F4F2ED]">4.8 / 5 RATING</div>
                <div className="text-[10px] text-[#8E9296]">2,500+ Pune Riders</div>
              </div>
            </div>

            <div className="glass-card px-3.5 py-2.5 rounded-lg flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="font-tech text-xs font-bold text-[#F4F2ED]">PARTS AT MRP</div>
                <div className="text-[10px] text-[#8E9296]">100% Genuine Sealed</div>
              </div>
            </div>

            <div className="glass-card px-3.5 py-2.5 rounded-lg flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#FF3D00]" />
              <div>
                <div className="font-tech text-xs font-bold text-[#F4F2ED]">PAY AFTER</div>
                <div className="text-[10px] text-[#8E9296]">Inspect & Test Ride</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Transparent Floating 3D Canvas Showcase */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[340px] sm:min-h-[480px] lg:min-h-[540px]">
          {/* Subtle Ambient Red Backdrop Glow */}
          <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-[#FF3D00]/15 blur-[90px] sm:blur-[120px] pointer-events-none" />

          {/* Transparent Interactive 3D Canvas (Snug Container) */}
          <div className="w-full h-[340px] sm:h-[480px] lg:h-[540px] relative z-10" data-cursor="360 ROTATE">
            <Motorcycle3DCanvas isAutoRotate={autoRotate} />
          </div>
        </div>
      </div>
    </section>
  );
}
