import * as TWEEN from "@tweenjs/tween.js";
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { IntroTexture } from "../textures";
import { baseColor, cubeSizeFactor } from "../constants";

export class Cube extends Mesh {
  cubeWidth = () => window.innerWidth / cubeSizeFactor;
  cubeHeight = () => window.innerHeight / cubeSizeFactor;
  constructor() {
    super();
    this.geometry = this.createGeometry();
    this.material = this.createMaterials();
  }

  redraw() {
    this.geometry = this.createGeometry();
    this.material = this.createMaterials();
  }

  createGeometry() {
    const width = this.cubeWidth();
    return new BoxGeometry(width, this.cubeHeight(), width);
  }

  createMaterials() {
    return [
      //page 2
      new MeshBasicMaterial({
        color: 0x1b1b1b,
        map: IntroTexture
      }),
      //page 4
      new MeshBasicMaterial({
        color: 0xffffff,
      }),
      new MeshBasicMaterial({
        color: baseColor,
      }),
      new MeshBasicMaterial({
        color: baseColor,
      }),
      //page 1
      new MeshBasicMaterial({
        color: 0x1b1b1b,
        map: IntroTexture,
      }),
      //page 3
      new MeshBasicMaterial({
        color: 0xffffff,
      }),
    ];
  }

  rotate(pos: number) {
    return new TWEEN.Tween(this.rotation)
      .to({ x: 0, y: pos, z: 0 })
      .onUpdate(() => {
        this.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
      })
      .easing(TWEEN.Easing.Quadratic.InOut);
  }
}
