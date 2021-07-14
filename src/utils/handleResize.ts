import { WebGLRenderer, Scene } from "three";
import { Cube } from "../cube";
import { Camera } from "../camera";

let timeoutId: number = 0;

export const handleResize = (
  scene: Scene,
  renderer: WebGLRenderer,
  camera: Camera,
  cube: Cube
): void => {
  window.addEventListener("resize", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.setDistanceFromCube();
      camera.position.z = camera.getDistanceFromCube();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.remove(cube);
      cube.redraw();
      scene.add(cube);
    }, 200);
  });
};
