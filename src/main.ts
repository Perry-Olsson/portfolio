import { initScene } from "./initScene";
import { handleResize } from "./handleResize";
import { setupDrag } from "./setupDrag";
import { Cube } from "./cube";
import * as TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Router } from "./router";
import { Navbar } from "./navigation";

const { scene, renderer, camera: cameraController } = initScene();

const cube = new Cube();
scene.add(cube.cube);

const router = new Router({ camera: cameraController, cube: cube });
const navbar = new Navbar(router);
navbar.addListeners();

const orbitControls = new OrbitControls(cameraController, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  orbitControls.update();
  TWEEN.update();
  renderer.render(scene, cameraController);
}

handleResize(scene, renderer, cameraController, cube);

setupDrag();

animate();

document
  .querySelector<HTMLButtonElement>("#burger")!
  .addEventListener("click", () => {
    if (navbar.overlayOpen) navbar.hideOverlay();
    else navbar.showOverlay();
  });
