import { PerspectiveCamera } from "three";

let scrollPos = 0;
export const setupScrolling = (camera: PerspectiveCamera) => {
  document.addEventListener("scroll", () => {
    const newScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    if (newScrollPos > scrollPos) camera.position.z -= newScrollPos - scrollPos;
    else camera.position.z -= newScrollPos - scrollPos;
    scrollPos = newScrollPos;
    console.log(camera.position.z);
  });
};
