import { Camera } from "../camera";
import { update } from "@tweenjs/tween.js";
import { setLights } from "./setLighting";
import { waitForLoad } from "./waitForLoad";
import { Scene, WebGLRenderer, Color, Fog } from "three";

const color = 0xbfbfbf

export const initScene = () => {
  const scene = new Scene();
  scene.background = new Color( color );
  scene.fog = new Fog( color, 2, 30 );
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
