import React, { useRef, useEffect } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function AnimatedDog({ behavior = 'idle' }) {
  const glRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, clock;

    async function initGL(gl) {
      const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 2;

      renderer = new Renderer({ gl });
      renderer.setSize(width, height);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 1, 2).normalize();
      scene.add(light);

      const asset = Asset.fromModule(require('../assets/models/dog.glb'));
      await asset.downloadAsync();
      const loader = new GLTFLoader();
      const model = await new Promise((resolve, reject) => {
        loader.load(asset.localUri || '', resolve, undefined, reject);
      });

      scene.add(model.scene);
      const mixer = new THREE.AnimationMixer(model.scene);
      mixerRef.current = mixer;
      clock = new THREE.Clock();

      // Choose animation by behavior (e.g., idle, dance)
      let action;
      if (model.animations.length > 0) {
        const selectedAnim = behavior === 'dance' && model.animations[1]
          ? model.animations[1]
          : model.animations[0];
        action = mixer.clipAction(selectedAnim);
        action.play();
      }

      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };

      animate();
    }

    if (glRef.current) {
      initGL(glRef.current);
    }
  }, [behavior]);

  return <GLView style={{ flex: 1, height: 300 }} ref={glRef} />;
}
