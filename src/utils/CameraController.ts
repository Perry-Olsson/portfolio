import { PerspectiveCamera } from "three";
import { cubeSizeFactor, zoomOutDistance } from "../constants";
import * as TWEEN from "@tweenjs/tween.js";

export class Camera extends PerspectiveCamera {
  distanceFromCube: number;
  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.distanceFromCube = calculateDistanceFromCube();
    this.position.set(0, 0, this.getDistanceFromCube());
  }
  tweenOut() {
    return new TWEEN.Tween(this.position)
      .to({
        x: 0,
        y: 0,
        z: calculateDistanceFromCube() + zoomOutDistance,
      })
      .onUpdate(() => {
        this.position.set(this.position.x, this.position.y, this.position.z);
      });
  }
  tweenIn() {
    return new TWEEN.Tween(this.position)
      .to({
        x: 0,
        y: 0,
        z: calculateDistanceFromCube(),
      })
      .onUpdate(() => {
        this.position.set(this.position.x, this.position.y, this.position.z);
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
