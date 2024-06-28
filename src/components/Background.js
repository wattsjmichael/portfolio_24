// src/components/Background.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Create geometries
    const geometryTriangle = new THREE.TetrahedronGeometry(3);
    const geometryCube = new THREE.BoxGeometry(4, 4, 4);
    const geometryCircle = new THREE.CircleGeometry(3, 32);

    // Create materials
    const materialTeal = new THREE.LineBasicMaterial({ color: 0x008080 }); // Teal
    const materialBlack = new THREE.LineBasicMaterial({ color: 0x000000 }); // Black
    const materialPurple = new THREE.LineBasicMaterial({ color: 0x800080 }); // Purple

    // Create edges for wireframe
    const triangleEdges = new THREE.EdgesGeometry(geometryTriangle);
    const cubeEdges = new THREE.EdgesGeometry(geometryCube);
    const circleEdges = new THREE.EdgesGeometry(geometryCircle);

    // Create mesh objects
    const triangle = new THREE.LineSegments(triangleEdges, materialTeal);
    const cube = new THREE.LineSegments(cubeEdges, materialBlack);
    const circle = new THREE.LineSegments(circleEdges, materialPurple);

    // Position objects
    triangle.position.set(-2, 0, 0);
    cube.position.set(2, 0, 0);
    circle.position.set(0, 2, 0);

    // Add objects to scene
    scene.add(triangle);
    scene.add(cube);
    scene.add(circle);

    camera.position.z = 10;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      triangle.rotation.x += 0.01;
      triangle.rotation.y += 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      circle.rotation.x += 0.01;
      circle.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="header-background"></div>;
};

export default Background;





