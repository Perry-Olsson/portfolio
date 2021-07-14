import { DefaultLoadingManager } from "three";

export const waitForLoad = () => {
  const canvas = document.querySelector("canvas")!;
  canvas.style.height = "0px";
  canvas.style.width = "0px";
  const introPage = document.querySelector<HTMLDivElement>("#intro-page")!;

  DefaultLoadingManager.onLoad = () => {
    setTimeout(() => {
      canvas.style.height = "100%";
      canvas.style.width = "100%";
      document.querySelector<HTMLDivElement>(".lds-roller")!.style.display =
        "none";

      setTimeout(() => {
        introPage.classList.add("transition-opacity", "duration-700");
        introPage.style.opacity = "1";
        setTimeout(() => {
          introPage.classList.remove("duration-700");
        }, 500);
        canvas.style.transition = "none";
      }, 800);
    }, 400);
  };
};
