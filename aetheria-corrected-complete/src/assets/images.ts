// Export high-resolution generated abstract 3D assets

import hero3d from './images/hero_abstract_3d_1792998521370.jpg';
import aboutMonolith from './images/about_monolith_1792998521412.jpg';
import showcaseFluid from './images/showcase_fluid_1792998534738.jpg';
import showcaseCore from './images/showcase_core_1792998534797.jpg';
import showcasePrism from './images/showcase_prism_1792998548032.jpg';
import showcaseSphere from './images/showcase_sphere_1792998548244.jpg';

export const ASSETS = {
  hero: hero3d,
  about: aboutMonolith,
  fluid: showcaseFluid,
  core: showcaseCore,
  prism: showcasePrism,
  sphere: showcaseSphere,
};

export const GALLERY_ITEMS = [
  {
    id: 'ethereal-loop',
    title: 'The Ethereal Loop',
    category: '3D WebGL',
    tag: 'Spatial Sculpture',
    image: hero3d,
    description: 'Iridescent fluid glass sculpture refracting soft champagne gold and lavender spectral light rays in midnight vacuum space.',
    dimensions: '3840 x 2160 • GPU Acceleration',
    materials: ['Frosted Silica Glass', 'Champagne Chrome', 'Quantum Dispersion Mesh'],
    year: '2026',
  },
  {
    id: 'monolithic-nexus',
    title: 'Monolithic Nexus',
    category: 'Monoliths',
    tag: 'Architectural Prism',
    image: aboutMonolith,
    description: 'Golden brass lattice hyper-structure encapsulating a luminous geometric energy crystal.',
    dimensions: '3200 x 2400 • Ray-Traced Lighting',
    materials: ['Anodized Brass', 'Optical Prism Glass', 'Volumetric Fog'],
    year: '2026',
  },
  {
    id: 'fluids-in-motion',
    title: 'Fluids in Motion',
    category: '3D WebGL',
    tag: 'Dynamic Mesh',
    image: showcaseFluid,
    description: 'Seamless liquid chrome and translucent lilac ribbon floating in continuous zero-gravity equilibrium.',
    dimensions: '3840 x 2160 • Sub-pixel Precision',
    materials: ['Liquid Silver', 'Polymer Crystal', 'Spectral Gradient Shader'],
    year: '2026',
  },
  {
    id: 'quantum-core',
    title: 'Quantum Core',
    category: 'Quantum Spheres',
    tag: 'Holographic Engine',
    image: showcaseCore,
    description: 'Concentric astrolabe brass rings encircling a high-density holographic quantum data sphere.',
    dimensions: '3200 x 2400 • Volumetric Emissive',
    materials: ['Etched Brass', 'Holographic Plasma', 'Sub-surface Glow'],
    year: '2026',
  },
  {
    id: 'prismatic-solitude',
    title: 'Prismatic Solitude',
    category: 'Prismatic',
    tag: 'Light Refraction',
    image: showcasePrism,
    description: 'Monolithic glass pyramid channeling raw laser illumination into a multi-chromatic spectrum cascade.',
    dimensions: '3200 x 2400 • Photoreal Caustics',
    materials: ['Flint Optical Glass', 'Polished Obsidian Base', 'Laser Coherence'],
    year: '2026',
  },
  {
    id: 'gravity-balance',
    title: 'Gravity Balance',
    category: 'Quantum Spheres',
    tag: 'Geometric Equilibrium',
    image: showcaseSphere,
    description: 'A polished champagne gold sphere suspended in static levitation amidst floating frosted glass cubes.',
    dimensions: '2000 x 2000 • Studio Lighting',
    materials: ['Mirror Gold Alloy', 'Sanded Glass Cubes', 'Ambient Occlusion Pass'],
    year: '2026',
  },
];
