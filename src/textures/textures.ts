import { TextureLoader } from "three";

const textureLoader = new TextureLoader();

export const WorkTexture = textureLoader.load("work.jpg");
export const BackgroundTexture = textureLoader.load("dark_bg.jpg");

export function loadCubeTexture() {
    return loadMap()
}

function loadMap() {
    // return textureLoader.load("Poliigon_WoodFloorAsh_4186/2K/Poliigon_WoodFloorAsh_4186_BaseColor.jpg")
    return textureLoader.load("MetalCorrodedHeavy001/MetalCorrodedHeavy001_COL_2K_METALNESS.jpg")
}
