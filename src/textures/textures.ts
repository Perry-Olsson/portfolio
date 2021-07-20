import { TextureLoader } from "three";

const textureLoader = new TextureLoader();

export const IntroTexture = textureLoader.load("metal.jpg");
export const WorkTexture = textureLoader.load("work.jpg");
export const BackgroundTexture = textureLoader.load("space.jpg");
