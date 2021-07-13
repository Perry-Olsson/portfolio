import * as THREE from "three";
import { CameraController } from "./utils";
export const initThree = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const cameraController = new CameraController(camera);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector<HTMLCanvasElement>("#scene")!,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setClearColor(0xffffff);

  //lighting
  const pointLight1 = new THREE.PointLight(0xffffff);
  pointLight1.position.set(20, 20, 10);
  const pointLight2 = new THREE.PointLight(0xffffff);
  pointLight2.position.set(-20, 20, -10);
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(pointLight1, pointLight2, ambientLight);

  const spaceTexture = new THREE.TextureLoader().load("space.jpg");
  scene.background = spaceTexture;

  // const lightHelper1 = new THREE.PointLightHelper(pointLight1);
  // const lightHelper2 = new THREE.PointLightHelper(pointLight2);
  // const gridHelper = new THREE.GridHelper(500, 50);
  // scene.add(lightHelper1, lightHelper2, gridHelper);

  return { scene, camera, renderer, cameraController };
};
