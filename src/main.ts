import { initThree } from "./initThree";
import { handleResize } from "./resizeScene";
import { setupDrag } from "./setupDrag";
import { Cube } from "./cube";
import * as TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const { scene, camera, renderer, cameraController } = initThree();

const cube = new Cube();
scene.add(cube.cube);

const orbitControls = new OrbitControls(camera, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  orbitControls.update();
  TWEEN.update();
  renderer.render(scene, camera);
}

handleResize(scene, renderer, camera, cube);

document
  .querySelector<HTMLButtonElement>("#position1")!
  .addEventListener("click", () => {
    cameraController
      .tweenOut()
      .start()
      .chain(cube.rotateToPos1().chain(cameraController.tweenIn()));
  });
document
  .querySelector<HTMLButtonElement>("#position2")!
  .addEventListener("click", () => {
    cameraController
      .tweenOut()
      .start()
      .chain(cube.rotateToPos2().chain(cameraController.tweenIn()));
  });
document
  .querySelector<HTMLButtonElement>("#position3")!
  .addEventListener("click", () => {
    cameraController
      .tweenOut()
      .start()
      .chain(cube.rotateToPos3().chain(cameraController.tweenIn()));
  });
document
  .querySelector<HTMLButtonElement>("#position4")!
  .addEventListener("click", () => {
    cameraController
      .tweenOut()
      .start()
      .chain(cube.rotateToPos4().chain(cameraController.tweenIn()));
  });

setupDrag();

animate();
