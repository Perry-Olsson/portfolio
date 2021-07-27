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

  contentContainer = document.getElementById("content-container")!;
  goTo(route: string, animations: boolean) {
    this.runTeardowns();
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      this.contentContainer.scrollTo({ top: 0 });
    }, 500);
    switch (route) {
      case "/intro":
        this.intro();
        break;
      case "/work":
        this.work(animations);
        break;
      case "/about":
        this.about(animations);
        break;
      case "/contact":
        this.contact(animations);
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
      history.pushState({}, "", "/");
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

  about(animations: boolean) {
    if (this.route !== "/about") {
      const duration = animations ? this.getAnimationDuration(Router.pos2) : 0;
      const cameraDuration = duration / 2;
      if (animations) history.pushState({}, "About", "#about");
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/about";
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
  work(animations: boolean) {
    if (this.route !== "/work") {
      const duration = animations ? this.getAnimationDuration(Router.pos3) : 0;
      const cameraDuration = duration / 2;
      if (animations) history.pushState({}, "Work", "#work");
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/work";

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

  contact(animations: boolean) {
    if (this.route !== "/contact") {
      const duration = animations ? this.getAnimationDuration(Router.pos4) : 0;
      const cameraDuration = duration / 2;
      if (animations) history.pushState({}, "Contact", "#contact");
      this.fadeOutCurrentPage(this.pages[this.route]);
      this.route = "/contact";
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
      ? 900
      : amountToRotate > Math.PI
      ? 1150
      : 800;
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
