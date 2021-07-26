import { Cube } from "../cube";
import { Camera } from "../camera";
import { Animator } from "../animations";
import { TeardownFunction } from "../types";

export class Router {
  static teardownFunctions: Array<TeardownFunction>;
  controllers: Controllers;
  route: keyof Pages;
  static pos1 = 0;
  static pos2 = -Math.PI / 2;
  static pos3 = -Math.PI;
  static pos4 = -Math.PI * 1.5;
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
    Router.teardownFunctions = [
      Animator.getInstance().removeIntroArrowAnimation,
    ];
  }

  goTo(route: string) {
    this.runTeardowns();
    setTimeout(() => {
      document.getElementById("content-container")!.scrollTo({ top: 0 });
    }, 160);
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
    Router.teardownFunctions = Router.teardownFunctions.filter((func) =>
      func()
    );
  }

  intro() {
    if (this.route !== "/intro") {
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
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/about";
      const duration = this.getAnimationDuration(Router.pos2);
      const cameraDuration = duration / 2;
      const animator = Animator.getInstance();
      animator.aboutPage.start(duration);
      Router.teardownFunctions.push(() => {
        animator.aboutPage.stopTechSlide();
        return false;
      });
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
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/work";

      const duration = this.getAnimationDuration(Router.pos3);
      const cameraDuration = duration / 2;
      Animator.getInstance().workPage.drawTodoSvg(duration);
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos3().duration(duration).start();
      this.fadeInNextPage(this.pages["/work"], duration + 50);
    }
  }

  contact() {
    if (this.route !== "/contact") {
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/contact";
      const duration = this.getAnimationDuration(Router.pos4);
      const cameraDuration = duration / 2;
      Animator.getInstance().contactPage.showNavBox(duration);
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
    element.classList.remove("none");
    setTimeout(() => {
      element.style.opacity = "1";
    }, duration);
  }

  fadeOutCurrentPage(element: HTMLDivElement) {
    element.style.opacity = "0";
    setTimeout(() => {
      element.classList.add("none");
    }, 150);
  }

  getAnimationDuration(pos: number) {
    const amountToRotate = Math.abs(this.controllers.cube.rotation.y - pos);
    return amountToRotate === Math.PI
      ? 800
      : amountToRotate > Math.PI
      ? 1000
      : 600;
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
