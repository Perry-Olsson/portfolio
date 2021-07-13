import { Cube } from "../cube";
import { CameraController } from "../utils";

interface Controllers {
  camera: CameraController;
  cube: Cube;
}
export class Router {
  controllers: Controllers;
  constructor(controllers: Controllers) {
    this.controllers = controllers;
  }

  intro() {
    this.controllers.camera
      .tweenOut()
      .start()
      .chain(
        this.controllers.cube
          .rotateToPos1()
          .chain(this.controllers.camera.tweenIn())
      );
  }
  work() {
    this.controllers.camera
      .tweenOut()
      .start()
      .chain(
        this.controllers.cube
          .rotateToPos2()
          .chain(this.controllers.camera.tweenIn())
      );
  }
  about() {
    this.controllers.camera
      .tweenOut()
      .start()
      .chain(
        this.controllers.cube
          .rotateToPos3()
          .chain(this.controllers.camera.tweenIn())
      );
  }
  contact() {
    this.controllers.camera
      .tweenOut()
      .start()
      .chain(
        this.controllers.cube
          .rotateToPos4()
          .chain(this.controllers.camera.tweenIn())
      );
  }
}
