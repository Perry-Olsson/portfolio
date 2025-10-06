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

  addKeyListeners(camera)
  function animate() {
    requestAnimationFrame(animate);
    update();
    renderer.render(scene, camera);
  }
  return { scene, renderer, camera, animate };
};

const movementDistance = 0.1;
const addKeyListeners = (camera: Camera) => {
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case "ArrowRight":
                if (event.ctrlKey) {
                    camera.rotateY(-0.01)
                } else {
                    camera.position.setX(camera.position.x + movementDistance)
                }
                break;
            case "ArrowLeft":
                if (event.ctrlKey) {
                    camera.rotateY(0.01)
                } else {
                    camera.position.setX(camera.position.x - movementDistance)
                }
                break;
            case "ArrowUp":
                if (event.ctrlKey) {
                    camera.rotateX(0.01)
                } else if (event.shiftKey) {
                    camera.position.setY(camera.position.y + movementDistance)
                } else {
                    camera.position.setZ(camera.position.z - movementDistance)
                }
                break;
            case "ArrowDown":
                if (event.ctrlKey) {
                    camera.rotateX(-0.01)
                } else if (event.shiftKey) {
                    camera.position.setY(camera.position.y - movementDistance)
                } else {
                    camera.position.setZ(camera.position.z + movementDistance)
                }
                break;
        }
        /* if (event.ctrlKey && event.key === 's') {
            console.log('Ctrl + S pressed!');
            event.preventDefault(); // Prevent default browser save action
        } */
    });
}
