import { WebGLRenderer } from "three";
import { Cube } from "../cube";
import { Camera } from "../camera";
import { repositionLights } from "../initScene/setLighting";

let timeoutId: number = 0;

export const handleResize = (
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
      cube.redraw();
      repositionLights();
    }, 200);
  });
};
