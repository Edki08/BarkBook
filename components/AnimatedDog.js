import React, { useRef, useEffect } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function AnimatedDog({ behavior = 'idle' }) {
  const glRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, mixer, clock;

    async function initGL(gl) {
      const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 2;

      renderer = new Renderer({ gl });
      renderer.setSize(width, height);

      // Lighting
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 1, 2).normalize();
      scene.add(light);

      // Load dog model
      const asset = Asset.fromModule(require('../assets/models/dog.glb'));
      await asset.downloadAsync();
      const loader = new GLTFLoader();
      const model = await new Promise((resolve, reject) => {
        loader.load(asset.localUri || '', resolve, undefined, reject);
      });

      scene.add(model.scene);
      mixer = new THREE.AnimationMixer(model.scene);
      clock = new THREE.Clock();

      // Play first animation
      if (model.animations && model.animations.length) {
        const action = mixer.clipAction(model.animations[0]);
        action.play();
      }

      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) mixer.update(delta);
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };

      animate();
    }

    if (glRef.current) {
      initGL(glRef.current);
    }
  }, [behavior]);

  return <GLView style={{ flex: 1, height: 300 }} ref={glRef} onContextCreate={initGL} />;
}
