import * as THREE from "three";
import { Scene } from "three";
import { BackgroundTexture } from "./textures";
import { Camera } from "./utils";

export const initScene = () => {
  const scene = new THREE.Scene();
  scene.background = BackgroundTexture;
  const camera = new Camera();
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector<HTMLCanvasElement>("#scene")!,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setClearColor(0xffffff);

  setLights(scene);

  const canvas = document.querySelector("canvas")!;
  canvas.style.height = "0px";
  canvas.style.width = "0px";

  THREE.DefaultLoadingManager.onLoad = () => {
    setTimeout(() => {
      canvas.style.height = "100%";
      canvas.style.width = "100%";
      document.querySelector<HTMLDivElement>(".dot-flashing")!.style.display =
        "none";
    }, 400);
  };
  return { scene, renderer, camera };
};

const setLights = (scene: Scene) => {
  const pointLight1 = new THREE.PointLight(0xffffff);
  pointLight1.position.set(0, 10, 20);

  const pointLight2 = new THREE.PointLight(0xffffff);
  pointLight2.position.set(20, 10, 0);

  const pointLight3 = new THREE.PointLight(0xffffff);
  pointLight3.position.set(-20, 10, 0);

  const pointLight4 = new THREE.PointLight(0xffffff);
  pointLight4.position.set(0, 10, -20);

  const ambientLight = new THREE.AmbientLight(0x404040);

  scene.add(pointLight1, pointLight2, pointLight3, pointLight4, ambientLight);

  if (import.meta.env.DEV) {
    const lightHelper1 = new THREE.PointLightHelper(pointLight1);
    const lightHelper2 = new THREE.PointLightHelper(pointLight2);
    const lightHelper3 = new THREE.PointLightHelper(pointLight3);
    const lightHelper4 = new THREE.PointLightHelper(pointLight4);
    scene.add(lightHelper1, lightHelper2, lightHelper3, lightHelper4);
  }
};
