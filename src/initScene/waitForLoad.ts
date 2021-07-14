import { DefaultLoadingManager } from "three";

export const waitForLoad = () => {
  const canvas = document.querySelector("canvas")!;
  canvas.style.height = "0px";
  canvas.style.width = "0px";

  DefaultLoadingManager.onLoad = () => {
    setTimeout(() => {
      canvas.style.height = "100%";
      canvas.style.width = "100%";
      document.querySelector<HTMLDivElement>(".lds-roller")!.style.display =
        "none";
    }, 400);
  };
};
