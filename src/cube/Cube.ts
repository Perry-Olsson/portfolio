import * as TWEEN from "@tweenjs/tween.js";
import { Router } from "../router";
import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
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
      new MeshStandardMaterial({
        color: 0xffffff,
      }),
      //page 4
      new MeshStandardMaterial({
        color: 0xffffff,
      }),
      new MeshStandardMaterial({
        color: baseColor,
      }),
      new MeshStandardMaterial({
        color: baseColor,
      }),
      //page 1
      new MeshStandardMaterial({
        color: 0x1b1b1b,
        map: IntroTexture,
      }),
      //page 3
      new MeshStandardMaterial({
        color: 0xffffff,
      }),
    ];
  }

  rotateToPos1() {
    return this.rotate(Router.pos1);
  }
  rotateToPos2() {
    return this.rotate(Router.pos2);
  }
  rotateToPos3() {
    return this.rotate(Router.pos3);
  }
  rotateToPos4() {
    return this.rotate(Router.pos4);
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
