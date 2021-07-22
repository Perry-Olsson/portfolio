import { WebGLRenderer } from "three";
import { Cube } from "../cube";
import { Camera } from "../camera";
import { repositionLights } from "../initScene/setLighting";
import { Components } from "../components";

let timeoutId: number = 0;

export const handleResize = (
  renderer: WebGLRenderer,
  camera: Camera,
  cube: Cube,
  components: Components
): void => {
  window.addEventListener("resize", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.setDistanceFromCube();
      camera.position.z = camera.getDistanceFromCube();
      cube.redraw();
      components.reRender();
      repositionLights();
    }, 200);
  });
};
