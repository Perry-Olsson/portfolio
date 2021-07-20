import { BackgroundTexture } from "../textures";
import { Camera } from "../camera";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { update } from "@tweenjs/tween.js";
import { setLights } from "./setLighting";
import { waitForLoad } from "./waitForLoad";
import { Scene, WebGLRenderer } from "three";
import { Cube } from "../cube";

export const initScene = (cube: Cube) => {
  const scene = new Scene();
  scene.background = BackgroundTexture;
  const camera = new Camera();
  const renderer = new WebGLRenderer({
    canvas: document.querySelector<HTMLCanvasElement>("#scene")!,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setClearColor(0xffffff);

  setLights(scene);

  waitForLoad(cube);

  const orbitControls = new OrbitControls(camera, renderer.domElement);
  function animate() {
    requestAnimationFrame(animate);
    orbitControls.update();
    update();
    renderer.render(scene, camera);
  }
  return { scene, renderer, camera, animate };
};
