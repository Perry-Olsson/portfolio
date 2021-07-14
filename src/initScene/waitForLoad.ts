import { DefaultLoadingManager } from "three";

export const waitForLoad = () => {
  const canvas = document.querySelector("canvas")!;
  canvas.style.height = "0px";
  canvas.style.width = "0px";
  const introNodes = document.querySelector<any>("#text-container")!;

  DefaultLoadingManager.onLoad = () => {
    setTimeout(() => {
      canvas.style.height = "100%";
      canvas.style.width = "100%";
      document.querySelector<HTMLDivElement>(".lds-roller")!.style.display =
        "none";
      document
        .querySelector<HTMLDivElement>("main")!
        .classList.replace("hidden", "block");

      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            introNodes.children[i].style.opacity = "1";
          }, i * 400);
        }
        canvas.style.transition = "none";
      }, 800);
    }, 1000);
  };
};
