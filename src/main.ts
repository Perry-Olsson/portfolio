import { initThree } from "./initThree";
import { handleResize } from "./resizeScene";
import { setupDrag } from "./setupDrag";
import { Cube } from "./cube";
import * as TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Router } from "./router";
import { Navbar } from "./navbar";

const { scene, camera, renderer, cameraController } = initThree();

const cube = new Cube();
scene.add(cube.cube);

const router = new Router({ camera: cameraController, cube: cube });
const navbar = new Navbar(router);
navbar.addListeners();

const orbitControls = new OrbitControls(camera, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  orbitControls.update();
  TWEEN.update();
  renderer.render(scene, camera);
}

handleResize(scene, renderer, camera, cube);

setupDrag();

animate();
