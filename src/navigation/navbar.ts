import { Router } from "../router";

const x1 = document.querySelector<HTMLDivElement>("#x-1")!;
const x2 = document.querySelector<HTMLDivElement>("#x-2")!;
const xNone = document.querySelector<HTMLDivElement>("#x-none")!;

export class Navbar {
  router: Router;
  overlayOpen: boolean;
  navtabContainer: HTMLDivElement;
  constructor(router: Router) {
    this.router = router;
    this.overlayOpen = false;
    this.navtabContainer =
      document.querySelector<HTMLDivElement>("#navtab-container")!;
    this.addListeners();
  }

  addListeners() {
    document
      .querySelector<HTMLButtonElement>("#intro")!
      .addEventListener("click", () => this.go("/intro"));
    document
      .querySelector<HTMLButtonElement>("#work")!
      .addEventListener("click", () => this.go("/work"));
    document
      .querySelector<HTMLButtonElement>("#about")!
      .addEventListener("click", () => this.go("/about"));
    document
      .querySelector<HTMLButtonElement>("#contact")!
      .addEventListener("click", () => this.go("/contact"));
    document
      .querySelector<HTMLButtonElement>("#burger")!
      .addEventListener("click", () => {
        if (this.overlayOpen) this.hideOverlay();
        else this.showOverlay();
      });
  }

  hideOverlay() {
    this.navtabContainer.classList.replace("top-0", "-top-full");
    this.navtabContainer.classList.replace("bottom-0", "bottom-full");
    x1.style.transform = "";
    x2.style.transform = "";
    xNone.style.opacity = "1";
    this.overlayOpen = false;
  }

  showOverlay() {
    this.navtabContainer.classList.replace("-top-full", "top-0");
    this.navtabContainer.classList.replace("bottom-full", "bottom-0");
    x1.style.transform = "rotate(45deg) translate(7px, 8px)";
    x2.style.transform = "rotate(-45deg)";
    xNone.style.opacity = "0";
    this.overlayOpen = true;
  }

  go(route: string) {
    this.hideOverlay();
    this.router.goTo(route);
  }
}
