import { Camera } from "../camera";
import { update } from "@tweenjs/tween.js";
import { setLights } from "./setLighting";
import { waitForLoad } from "./waitForLoad";
import { Scene, WebGLRenderer, Color, Fog } from "three";

export const initScene = () => {
  const scene = new Scene();
  scene.background = new Color( 0x5e5d5d );
  scene.fog = new Fog( 0x5e5d5d, 2, 30 );
  const camera = new Camera();
  const renderer = new WebGLRenderer({
    canvas: document.querySelector<HTMLCanvasElement>("#scene")!,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setClearColor(0xffffff);

  setLights(scene);

  waitForLoad();

  function animate() {
    requestAnimationFrame(animate);
    update();
    renderer.render(scene, camera);
  }
  return { scene, renderer, camera, animate };
};
