import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeDCanvasProps {
  interactive?: boolean;
  meshType?: 'torusKnot' | 'icosahedron' | 'octahedron' | 'torus';
  colorTheme?: 'gold' | 'lavender' | 'pure';
  speedMultiplier?: number;
  wireframe?: boolean;
  className?: string;
}

export const ThreeDCanvas: React.FC<ThreeDCanvasProps> = ({
  interactive = true,
  meshType = 'torusKnot',
  colorTheme = 'gold',
  speedMultiplier = 1,
  wireframe = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x101828, 1.5);
    scene.add(ambientLight);

    const goldLight = new THREE.DirectionalLight(0xd8ba83, 3.5);
    goldLight.position.set(5, 5, 4);
    scene.add(goldLight);

    const lavenderLight = new THREE.PointLight(0xb9a7f5, 4, 15);
    lavenderLight.position.set(-4, -3, 3);
    scene.add(lavenderLight);

    const topWhiteLight = new THREE.SpotLight(0xffffff, 3);
    topWhiteLight.position.set(0, 8, 2);
    topWhiteLight.angle = Math.PI / 4;
    scene.add(topWhiteLight);

    // Color theme definition
    let primaryColor = 0xd8ba83;
    let secondaryColor = 0xb9a7f5;
    if (colorTheme === 'lavender') {
      primaryColor = 0xb9a7f5;
      secondaryColor = 0xd8ba83;
    } else if (colorTheme === 'pure') {
      primaryColor = 0xf8f5ef;
      secondaryColor = 0xb9a7f5;
    }

    // Geometry selection
    let geometry: THREE.BufferGeometry;
    switch (meshType) {
      case 'icosahedron':
        geometry = new THREE.IcosahedronGeometry(1.6, 2);
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(1.8, 1);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(1.4, 0.5, 32, 100);
        break;
      case 'torusKnot':
      default:
        geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32, 2, 3);
        break;
    }

    // Material
    const material = new THREE.MeshPhysicalMaterial({
      color: primaryColor,
      metalness: 0.85,
      roughness: 0.15,
      transmission: 0.25,
      ior: 1.5,
      thickness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: wireframe,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    // Particle field around mesh
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.5 + Math.random() * 3.5;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      particleScales[i] = Math.random() * 0.04 + 0.01;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: secondaryColor,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particlesRef.current = particles;
    scene.add(particles);

    setIsLoaded(true);

    // Mouse Handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const { innerWidth, innerHeight } = window;
      mousePos.current.targetX = (e.clientX / innerWidth - 0.5) * 1.5;
      mousePos.current.targetY = (e.clientY / innerHeight - 0.5) * 1.5;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = Math.max(1, containerRef.current.clientWidth);
      const h = Math.max(1, containerRef.current.clientHeight);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      if (meshRef.current) {
        meshRef.current.rotation.x = elapsedTime * 0.3 * speedMultiplier + mousePos.current.y * 0.8;
        meshRef.current.rotation.y = elapsedTime * 0.4 * speedMultiplier + mousePos.current.x * 0.8;
        meshRef.current.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y = -elapsedTime * 0.08 * speedMultiplier;
        particlesRef.current.rotation.x = elapsedTime * 0.05 * speedMultiplier;
      }

      // Light orbit
      lavenderLight.position.x = Math.sin(elapsedTime * 0.8) * 4;
      lavenderLight.position.z = Math.cos(elapsedTime * 0.8) * 4;

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      geometry.dispose();
      material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [meshType, colorTheme, speedMultiplier, wireframe, interactive]);

  return (
    <div className={`relative w-full h-full min-h-[300px] overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F19]/40 backdrop-blur-md z-10">
          <div className="w-8 h-8 border-2 border-[#D8BA83] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
