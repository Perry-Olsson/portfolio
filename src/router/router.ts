import { Cube } from "../cube";
import { Camera } from "../utils";

interface Controllers {
  camera: Camera;
  cube: Cube;
}
export class Router {
  controllers: Controllers;
  route: string;
  static pos1 = 0;
  static pos2 = -Math.PI / 2;
  static pos3 = -Math.PI;
  static pos4 = -Math.PI * 1.5;
  constructor(controllers: Controllers) {
    this.controllers = controllers;
    this.route = "/intro";
  }

  goTo(route: string) {
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

  intro() {
    if (this.route !== "/intro") {
      this.route = "/intro";

      const duration = this.getAnimationDuration(Router.pos1);
      const cameraDuration = duration / 2;
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos1().duration(duration).start();
    }
  }
  work() {
    if (this.route !== "/work") {
      this.route = "/work";

      const duration = this.getAnimationDuration(Router.pos2);
      const cameraDuration = duration / 2;
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos2().duration(duration).start();
    }
  }
  about() {
    if (this.route !== "/about") {
      this.route = "/about";
      const duration = this.getAnimationDuration(Router.pos3);
      const cameraDuration = duration / 2;
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos3().duration(duration).start();
    }
  }

  contact() {
    if (this.route !== "/contact") {
      this.route = "/contact";
      const duration = this.getAnimationDuration(Router.pos4);
      const cameraDuration = duration / 2;
      this.controllers.camera
        .tweenOut()
        .duration(cameraDuration)
        .start()
        .chain(this.controllers.camera.tweenIn().duration(cameraDuration));
      this.controllers.cube.rotateToPos4().duration(duration).start();
    }
  }

  getAnimationDuration(pos: number) {
    const amountToRotate = Math.abs(
      this.controllers.cube.cube.rotation.y - pos
    );
    return amountToRotate === Math.PI
      ? 750
      : amountToRotate > Math.PI
      ? 1000
      : 500;
  }
}
