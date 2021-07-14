import * as TWEEN from "@tweenjs/tween.js";
import { Router } from "../router";
import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import { IntroTexture } from "../textures";
import { baseColor, cubeSizeFactor } from "../constants";

export class Cube extends Mesh {
  cubeWidth = () => window.innerWidth / cubeSizeFactor;
  cubeHeight = () => window.innerHeight / cubeSizeFactor;
  cubeDepth = () => this.cubeWidth();
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
    return new BoxGeometry(
      this.cubeWidth(),
      this.cubeHeight(),
      this.cubeDepth()
    );
  }

  createMaterials() {
    return [
      //page2
      new MeshStandardMaterial({
        color: 0xffffff,
      }),
      new MeshStandardMaterial({
        color: baseColor,
      }),
      new MeshStandardMaterial({
        color: 0x0000ff,
      }),
      new MeshStandardMaterial({
        color: baseColor,
      }),
      //page1
      new MeshStandardMaterial({
        color: baseColor,
        map: IntroTexture,
      }),
      //page3
      new MeshStandardMaterial({
        color: baseColor,
        map: IntroTexture,
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
