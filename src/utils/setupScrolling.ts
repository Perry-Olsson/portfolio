import { PerspectiveCamera } from "three";

let scrollPos = 0;
export const setupScrolling = (camera: PerspectiveCamera) => {
  document.addEventListener("scroll", () => {
    const newScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    camera.position.z -=
      newScrollPos / scrollSpeedFactor - scrollPos / scrollSpeedFactor;
    scrollPos = newScrollPos;
  });
};

const scrollSpeedFactor = 100;
