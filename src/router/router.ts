import { Cube } from "../cube";
import { Camera } from "../camera";
import { Animator } from "../animations";

export class Router {
  teardownFunctions: Array<() => void>;
  controllers: Controllers;
  route: keyof Pages;
  static pos1 = 0;
  static pos2 = -Math.PI / 2;
  static pos3 = -Math.PI;
  static pos4 = -Math.PI * 1.5;
  navbar = document.querySelector<HTMLDivElement>("#navbar")!;
  pages = {
    "/intro": document.querySelector<HTMLDivElement>("#intro-page")!,
    "/work": document.querySelector<HTMLDivElement>("#work-page")!,
    "/about": document.querySelector<HTMLDivElement>("#about-page")!,
    "/contact": document.querySelector<HTMLDivElement>("#contact-page")!,
  };
  static instance: Router;
  constructor(controllers: Controllers) {
    this.controllers = controllers;
    this.route = "/intro";
    this.teardownFunctions = [Animator.getInstance().removeIntroArrowAnimation];
  }

  goTo(route: string) {
    this.runTeardowns();
    switch (route) {
      case "/intro":
        this.intro();
        break;
      case "/work":
        this.work();
        break;
      case "/about":
        this.about();
        break;
      case "/contact":
        this.contact();
        break;
    }
  }

  runTeardowns() {
    this.teardownFunctions.forEach((func) => func());
    this.teardownFunctions = [];
  }

  intro() {
    if (this.route !== "/intro") {
      this.navbar.style.color = "white";
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/intro";

      const duration = this.getAnimationDuration(Router.pos1);
      const cameraDuration = duration / 2;

      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos1().duration(duration).start();

      this.fadeInNextPage(this.pages["/intro"], duration);
    }
  }

  about() {
    if (this.route !== "/about") {
      this.navbar.style.color = "#353535";
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/about";
      const duration = this.getAnimationDuration(Router.pos2);
      const cameraDuration = duration / 2;
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos2().duration(duration).start();
      this.fadeInNextPage(this.pages["/about"], duration);
    }
  }
  work() {
    if (this.route !== "/work") {
      this.navbar.style.color = "white";
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/work";

      const duration = this.getAnimationDuration(Router.pos3);
      const cameraDuration = duration / 2;
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos3().duration(duration).start();
      this.fadeInNextPage(this.pages["/work"], duration);
    }
  }

  contact() {
    if (this.route !== "/contact") {
      this.navbar.style.color = "white";
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/contact";
      const duration = this.getAnimationDuration(Router.pos4);
      const cameraDuration = duration / 2;
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos4().duration(duration).start();
      this.fadeInNextPage(this.pages["/contact"], duration);
    }
  }

  fadeInNextPage(element: HTMLDivElement, duration: number) {
    element.classList.remove("hidden");
    setTimeout(() => {
      element.style.opacity = "1";
    }, duration);
  }

  fadeOutCurrentPage(element: HTMLDivElement) {
    element.style.opacity = "0";
    setTimeout(() => {
      element.classList.add("hidden");
    }, 150);
  }

  getAnimationDuration(pos: number) {
    const amountToRotate = Math.abs(this.controllers.cube.rotation.y - pos);
    return amountToRotate === Math.PI
      ? 750
      : amountToRotate > Math.PI
      ? 1000
      : 650;
  }
}

interface Controllers {
  camera: Camera;
  cube: Cube;
}

interface Pages {
  "/intro": HTMLDivElement;
  "/work": HTMLDivElement;
  "/about": HTMLDivElement;
  "/contact": HTMLDivElement;
}
