import { PerspectiveCamera } from "three";
import { cubeSizeFactor, zoomOutDistance } from "../constants";
import * as TWEEN from "@tweenjs/tween.js";

export class CameraController {
  camera: PerspectiveCamera;
  distanceFromCube: number;
  constructor(camera: PerspectiveCamera) {
    this.camera = camera;
    this.distanceFromCube = calculateDistanceFromCube();
    this.camera.position.set(0, 0, this.getDistanceFromCube());
  }
  tweenOut() {
    return new TWEEN.Tween(this.camera.position)
      .to({
        x: 0,
        y: 0,
        z: calculateDistanceFromCube() + zoomOutDistance,
      })
      .onUpdate(() => {
        this.camera.position.set(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z
        );
      });
  }
  tweenIn() {
    return new TWEEN.Tween(this.camera.position)
      .to({
        x: 0,
        y: 0,
        z: calculateDistanceFromCube(),
      })
      .onUpdate(() => {
        this.camera.position.set(
          this.camera.position.x,
          this.camera.position.y,
          this.camera.position.z
        );
      })
      .easing(TWEEN.Easing.Quadratic.In);
  }

  getDistanceFromCube() {
    return this.distanceFromCube;
  }

  setDistanceFromCube() {
    this.distanceFromCube = calculateDistanceFromCube();
  }
}

export const calculateDistanceFromCube = () => {
  const distance =
    ((window.innerHeight / cubeSizeFactor) * 0.5) /
    Math.tan(75 * 0.5 * (Math.PI / 180));
  return window.innerWidth / cubeSizeFactor / 2 + distance;
};
