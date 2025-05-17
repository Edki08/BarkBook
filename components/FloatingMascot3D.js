import React, { useEffect, useRef } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function FloatingMascot3D() {
  const rotateRef = useRef(0);

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 2).normalize();
    scene.add(light);

    // Load .glb model
    const loader = new GLTFLoader();
    const asset = Asset.fromModule(require('../assets/mascots/beagle.glb')); // Replace with your mascot
    await asset.downloadAsync();

    loader.load(
      asset.uri,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.2, 1.2, 1.2);
        scene.add(model);

        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01;
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading GLB:', error);
      }
    );
  };

  return <GLView style={{ flex: 1, height: 200 }} onContextCreate={onContextCreate} />;
}
