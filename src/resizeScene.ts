import { WebGLRenderer, PerspectiveCamera, Scene } from "three";
import { Cube } from "./cube";
import { getDistanceFromCube } from "./utils";

let timeoutId: number = 0;

export const handleResize = (
  scene: Scene,
  renderer: WebGLRenderer,
  camera: PerspectiveCamera,
  cube: Cube
): void => {
  window.addEventListener("resize", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.position.z = getDistanceFromCube();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.remove(cube.cube);
      cube.redraw();
      scene.add(cube.cube);
    }, 200);
  });
  camera.updateProjectionMatrix();
};
