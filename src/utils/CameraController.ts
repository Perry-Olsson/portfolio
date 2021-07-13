import { PerspectiveCamera } from "three";
import { cubeSizeFactor, zoomOutDistance } from "../constants";
import * as TWEEN from "@tweenjs/tween.js";

export class CameraController {
  camera: PerspectiveCamera;
  constructor(camera: PerspectiveCamera) {
    this.camera = camera;
    this.camera.position.set(0, 0, getDistanceFromCube());
  }
  tweenOut() {
    return new TWEEN.Tween(this.camera.position)
      .to({
        x: 0,
        y: 0,
        z: getDistanceFromCube() + zoomOutDistance,
      })
      .onUpdate(() => {
        this.camera.position.set(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z
        );
      })
      .duration(200);
  }
  tweenIn() {
    return new TWEEN.Tween(this.camera.position)
      .to({
        x: 0,
        y: 0,
        z: getDistanceFromCube(),
      })
      .onUpdate(() => {
        this.camera.position.set(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z
        );
      })
      .duration(200);
  }
}

export const getDistanceFromCube = () => {
  const distance =
    ((window.innerHeight / cubeSizeFactor) * 0.5) /
    Math.tan(75 * 0.5 * (Math.PI / 180));
  return window.innerWidth / cubeSizeFactor / 2 + distance;
};
