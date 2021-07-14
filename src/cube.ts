import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { baseColor, cubeDepth, cubeHeight, cubeWidth } from "./constants";
import { Router } from "./router";

export class Cube {
  cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial[]>;

  constructor() {
    this.cube = createCube();
  }

  redraw() {
    this.cube = createCube();
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
}

const textureLoader = new THREE.TextureLoader();
const map = textureLoader.load("metal.jpg");

const createCube = () => {
  const geometry = new THREE.BoxGeometry(
    cubeWidth(),
    cubeHeight(),
    cubeDepth()
  );

  const materials = [
    new THREE.MeshStandardMaterial({
      //page2
      color: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x0000ff,
    }),
    new THREE.MeshStandardMaterial({
      color: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      //page1
      color: 0x202020,
      map,
    }),
    new THREE.MeshStandardMaterial({
      //page3
      color: baseColor,
    }),
  ];
  return new THREE.Mesh(geometry, materials);
};
