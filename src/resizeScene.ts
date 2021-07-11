import { WebGLRenderer, PerspectiveCamera } from "three";

let timeoutId: number = 0;

export const handleResize = (
  renderer: WebGLRenderer,
  camera: PerspectiveCamera
): void => {
  window.addEventListener("resize", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.log("hello");
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
    }, 200);
  });
  camera.updateProjectionMatrix();
};
