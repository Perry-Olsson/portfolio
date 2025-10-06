import * as TWEEN from "@tweenjs/tween.js";
import { BoxGeometry, Mesh, MeshStandardMaterial, TextureLoader } from "three";
import { cubeSizeFactor } from "../constants";

const textureLoader = new TextureLoader();

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
    let textureName = "MetalGalvanizedSteelWorn001"
    let map, metalnessMap, normalMap, roughnessMap, displacementMap;
    map = textureLoader.load(`${textureName}/${textureName}_COL_2K_METALNESS.jpg`)
    metalnessMap = textureLoader.load(`${textureName}/${textureName}_METALNESS_2K_METALNESS.jpg`)
    normalMap = textureLoader.load(`${textureName}/${textureName}_NRM_2K_METALNESS.jpg`)
    roughnessMap = textureLoader.load(`${textureName}/${textureName}_ROUGHNESS_2K_METALNESS.jpg`)
    displacementMap = textureLoader.load(`${textureName}/${textureName}_DISP_2K_METALNESS.jpg`)
    const meshStandardMaterial = new MeshStandardMaterial({
      map,
      metalnessMap,
      normalMap,
      roughnessMap,
      displacementMap,
      color: 0x9b9b9b 
    })
    return [
      //page 2
      meshStandardMaterial.clone(),
      //page 4
      meshStandardMaterial.clone(),
      meshStandardMaterial.clone(),
      meshStandardMaterial.clone(),
      //page 1
      meshStandardMaterial.clone(),
      //page 3
      meshStandardMaterial.clone(),
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
