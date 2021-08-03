import { DefaultLoadingManager } from "three";

const canvas = document.querySelector("canvas")!;
const titleNodes = document.querySelector<any>("#intro-text-container")!;
const arrow = document.querySelector<HTMLDivElement>("#arrow-container")!;
const arrowCircle = document.querySelector<HTMLDivElement>("#arrow-circle")!;
const name = document.querySelector<HTMLHeadElement>("#name")!;

export const waitForLoad = () => {
  DefaultLoadingManager.onLoad = () => {
    setTimeout(() => {
      document.getElementById("initial-loader")!.style.display = "none";
      canvas.style.transform = "scale(1)";
      document
        .querySelector<HTMLDivElement>("main")!
        .classList.replace("hidden", "block");
      waitForCanvasAnimation();
    }, 0);
  };
};

const waitForCanvasAnimation = () => {
  setTimeout(() => {
    fadeInIntroPage();
    import("../components/renderComponents").then((result) => {
      result.renderDynamicComponents();
    });
  }, 800);
};

const fadeInIntroPage = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      titleNodes.children[i].style.opacity = "1";
    }, i * 500);
  }
  arrow.classList.remove("opacity-0");
  setTimeout(async () => {
    setTimeout(() => {
      arrowCircle.classList.add("circle-bounce");
    }, 1400);
    for (let i = 0; i < name.children.length; i++) {
      if (i === 0) {
        name.children.item(i)!.classList.add("theme-color");
        await delayColorChange();
        name.children.item(i + 1)!.classList.add("theme-color");
        await delayColorChange();
        name.children.item(i + 2)!.classList.add("theme-color");
        await delayColorChange();
      } else {
        name.children.item(i)!.classList.add("theme-color");
        if (i < name.children.length - 1)
          name.children.item(i + 1)!.classList.add("theme-color");
        if (i < name.children.length - 2)
          name.children.item(i + 2)!.classList.add("theme-color");
      }
      await delayColorChange();
      name.children.item(i)!.classList.remove("theme-color");
    }
  }, 2000);
};

const delayColorChange = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(true), 33);
  });
};
