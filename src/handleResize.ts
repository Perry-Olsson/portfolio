import { WebGLRenderer, Scene } from "three";
import { Cube } from "./cube";
import { CameraController } from "./utils";

let timeoutId: number = 0;

export const handleResize = (
  scene: Scene,
  renderer: WebGLRenderer,
  cameraController: CameraController,
  cube: Cube
): void => {
  window.addEventListener("resize", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cameraController.camera.aspect = window.innerWidth / window.innerHeight;
      cameraController.camera.updateProjectionMatrix();
      cameraController.setDistanceFromCube();
      cameraController.camera.position.z =
        cameraController.getDistanceFromCube();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.remove(cube.cube);
      cube.redraw();
      scene.add(cube.cube);
    }, 200);
  });
};
