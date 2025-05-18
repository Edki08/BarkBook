import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useRef } from 'react';

export default function FloatingMascot() {
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

    // Load the GLB file manually
    const modelAsset = Asset.fromModule(require('../../assets/models/dog.glb'));
    await modelAsset.downloadAsync();

    const loader = new GLTFLoader();
    loader.load(
      modelAsset.localUri || modelAsset.uri,
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
        console.error('GLB Load Error:', error);
      }
    );
  };

  return <GLView style={{ width: 150, height: 150 }} onContextCreate={onContextCreate} />;
}
