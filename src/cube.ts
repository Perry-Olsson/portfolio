import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { cubeDepth, cubeHeight, cubeWidth } from "./constants";

export class Cube {
  cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial[]>;
  pos1 = 0;
  pos2 = -Math.PI / 2;
  pos3 = -Math.PI;
  pos4 = -Math.PI * 1.5;
  constructor() {
    this.cube = createCube();
  }

  redraw() {
    this.cube = createCube();
  }

  rotateToPos1() {
    return this.rotate(0, this.getAnimationDuration(this.pos1));
  }
  rotateToPos2() {
    return this.rotate(this.pos2, this.getAnimationDuration(this.pos2));
  }
  rotateToPos3() {
    return this.rotate(-Math.PI, this.getAnimationDuration(this.pos3));
  }
  rotateToPos4() {
    return this.rotate(-Math.PI * 1.5, this.getAnimationDuration(this.pos4));
  }
  rotate(pos: number, dur = 500) {
    return new TWEEN.Tween(this.cube.rotation)
      .to({ x: 0, y: pos, z: 0 })
      .onUpdate(() => {
        this.cube.rotation.set(
          this.cube.rotation.x,
          this.cube.rotation.y,
          this.cube.rotation.z
        );
      })
      .duration(dur);
  }

  getAnimationDuration(pos: number) {
    const amountToRotate = Math.abs(this.cube.rotation.y - pos);
    return amountToRotate === Math.PI
      ? 750
      : amountToRotate > Math.PI
      ? 1000
      : 500;
  }
}

const createCube = () => {
  const geometry = new THREE.BoxGeometry(
    cubeWidth(),
    cubeHeight(),
    cubeDepth()
  );

  const materials = [
    new THREE.MeshStandardMaterial({
      color: 0xff0000,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x00ff00,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x0000ff,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xff0000,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xc242f5,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x0000ff,
    }),
  ];
  return new THREE.Mesh(geometry, materials);
};
