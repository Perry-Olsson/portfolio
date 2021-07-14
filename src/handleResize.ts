import { WebGLRenderer, Scene } from "three";
import { Cube } from "./cube";
import { Camera } from "./camera";

let timeoutId: number = 0;

export const handleResize = (
  scene: Scene,
  renderer: WebGLRenderer,
  cameraController: Camera,
  cube: Cube
): void => {
  window.addEventListener("resize", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cameraController.aspect = window.innerWidth / window.innerHeight;
      cameraController.updateProjectionMatrix();
      cameraController.setDistanceFromCube();
      cameraController.position.z = cameraController.getDistanceFromCube();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.remove(cube.cube);
      cube.redraw();
      scene.add(cube.cube);
    }, 200);
  });
};
