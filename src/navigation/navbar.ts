import { Router } from "../router";

const x1 = document.querySelector<HTMLDivElement>("#x-1")!;
const x2 = document.querySelector<HTMLDivElement>("#x-2")!;
const xNone = document.querySelector<HTMLDivElement>("#x-none")!;

export class Navbar {
  router: Router;
  overlayOpen: boolean;
  navtabContainer: HTMLDivElement;
  contentContainer: HTMLDivElement;
  constructor(router: Router) {
    this.router = router;
    this.overlayOpen = false;
    this.navtabContainer =
      document.querySelector<HTMLDivElement>("#navtab-container")!;
    this.contentContainer = document.querySelector("#content-container")!;
    this.addListeners();
  }

  addListeners() {
    document
      .querySelector<HTMLButtonElement>("#intro")!
      .addEventListener("click", () => this.goTo("/intro"));
    document
      .querySelector<HTMLButtonElement>("#work")!
      .addEventListener("click", () => this.goTo("/work"));
    document
      .querySelector<HTMLButtonElement>("#about")!
      .addEventListener("click", () => this.goTo("/about"));
    document
      .querySelector<HTMLButtonElement>("#contact")!
      .addEventListener("click", () => this.goTo("/contact"));
    document
      .querySelector<HTMLButtonElement>("#burger")!
      .addEventListener("click", () => {
        if (this.overlayOpen) this.hideOverlay();
        else this.showOverlay();
      });
    document
      .querySelector<HTMLButtonElement>("#arrow-circle")!
      .addEventListener("click", () => {
        this.goTo("/about");
      });
  }

  hideOverlay() {
    this.contentContainer.style.opacity = "1";
    this.navtabContainer.classList.replace("top-0", "-top-full");
    this.navtabContainer.classList.replace("bottom-0", "bottom-full");
    x1.style.transform = "";
    x2.style.transform = "";
    xNone.style.opacity = "1";
    this.overlayOpen = false;
  }

  showOverlay() {
    this.contentContainer.style.opacity = "0";
    this.navtabContainer.classList.replace("-top-full", "top-0");
    this.navtabContainer.classList.replace("bottom-full", "bottom-0");
    x1.style.transform = "rotate(45deg) translate(7px, 8px)";
    x2.style.transform = "rotate(-45deg)";
    xNone.style.opacity = "0";
    this.overlayOpen = true;
  }

  goTo(route: string) {
    this.hideOverlay();
    this.router.goTo(route);
  }
}
