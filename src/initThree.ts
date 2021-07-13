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
  // const pointLight1 = new THREE.PointLight(0xffffff);
  // pointLight1.position.set(0, 20, 50);
  // const pointLight2 = new THREE.PointLight(0xffffff);
  // pointLight2.position.set(50, 20, 0);
  // const pointLight3 = new THREE.PointLight(0xffffff);
  // pointLight3.position.set(-50, 20, 0);
  // const pointLight4 = new THREE.PointLight(0xffffff);
  // pointLight4.position.set(0, 20, -50);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  // scene.add(pointLight1, pointLight2, pointLight3, pointLight4, ambientLight);
  scene.add(ambientLight);

  const spaceTexture = new THREE.TextureLoader().load("space.jpg");
  scene.background = spaceTexture;

  // const lightHelper1 = new THREE.PointLightHelper(pointLight1);
  // const lightHelper2 = new THREE.PointLightHelper(pointLight2);
  // const lightHelper3 = new THREE.PointLightHelper(pointLight3);
  // const lightHelper4 = new THREE.PointLightHelper(pointLight4);
  // const gridHelper = new THREE.GridHelper(500, 50);
  // scene.add(lightHelper1, lightHelper2, lightHelper3, lightHelper4, gridHelper);

  return { scene, camera, renderer, cameraController };
};
