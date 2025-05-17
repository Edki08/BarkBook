import React, { useEffect, useRef } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import dogAsset from '../../assets/models/dogAsset';

export default function FloatingMascot() {
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

    await dogAsset.downloadAsync();

    const loader = new GLTFLoader();
    loader.load(
      dogAsset.uri,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);
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
        console.error('Failed to load GLB:', error);
      }
    );
  };

  return <GLView style={{ width: 150, height: 150 }} onContextCreate={onContextCreate} />;
}
