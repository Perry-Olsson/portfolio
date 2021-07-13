import { Router } from "../router";

export class Navbar {
  router: Router;
  overlayOpen: boolean;
  navtabContainer: HTMLDivElement;
  constructor(router: Router) {
    this.router = router;
    this.overlayOpen = false;
    this.navtabContainer =
      document.querySelector<HTMLDivElement>("#navtab-container")!;
  }

  addListeners() {
    document
      .querySelector<HTMLButtonElement>("#intro")!
      .addEventListener("click", () => this.router.intro());
    document
      .querySelector<HTMLButtonElement>("#work")!
      .addEventListener("click", () => this.router.work());
    document
      .querySelector<HTMLButtonElement>("#about")!
      .addEventListener("click", () => this.router.about());
    document
      .querySelector<HTMLButtonElement>("#contact")!
      .addEventListener("click", () => this.router.contact());
  }

  hideOverlay() {
    this.navtabContainer.classList.replace("top-0", "-top-full");
    this.navtabContainer.classList.replace("bottom-0", "bottom-full");
    this.overlayOpen = false;
  }

  showOverlay() {
    this.navtabContainer.classList.replace("-top-full", "top-0");
    this.navtabContainer.classList.replace("bottom-full", "bottom-0");
    this.overlayOpen = true;
  }
}
