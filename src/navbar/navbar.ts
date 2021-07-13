import { Router } from "../router";

export class Navbar {
  router: Router;
  constructor(router: Router) {
    this.router = router;
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
}
