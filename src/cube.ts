import * as TWEEN from "@tweenjs/tween.js";
import { baseColor, cubeDepth, cubeHeight, cubeWidth } from "./constants";
import { Router } from "./router";
import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import { IntroTexture, WorkTexture } from "./textures";

export class Cube {
  cube: Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial[]>;
  constructor() {
    this.cube = this.createCube();
  }

  redraw() {
    this.cube = this.createCube();
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
    return new TWEEN.Tween(this.cube.rotation)
      .to({ x: 0, y: pos, z: 0 })
      .onUpdate(() => {
        this.cube.rotation.set(
          this.cube.rotation.x,
          this.cube.rotation.y,
          this.cube.rotation.z
        );
      })
      .easing(TWEEN.Easing.Quadratic.InOut);
  }

  createCube() {
    const geometry = new BoxGeometry(cubeWidth(), cubeHeight(), cubeDepth());
    return new Mesh(geometry, this.createMaterials());
  }

  createMaterials() {
    return [
      //page2
      new MeshStandardMaterial({
        color: 0x101010,
        map: WorkTexture,
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
        color: 0x151515,
        map: IntroTexture,
      }),
      //page3
      new MeshStandardMaterial({
        color: baseColor,
      }),
    ];
  }
}
