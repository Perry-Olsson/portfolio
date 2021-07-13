import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { cubeDepth, cubeHeight, cubeWidth } from "./constants";

export class Cube {
  cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial[]>;
  constructor() {
    this.cube = createCube();
  }

  redraw() {
    this.cube = createCube();
  }

  rotateToPos1() {
    return this.rotate(0);
  }
  rotateToPos2() {
    return this.rotate(-Math.PI / 2);
  }
  rotateToPos3() {
    return this.rotate(-Math.PI);
  }
  rotateToPos4() {
    return this.rotate(-Math.PI * 1.5);
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
      });
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
