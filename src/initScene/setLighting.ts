import { AmbientLight, PointLight, Scene } from "three";

const pointLightPosition = () => Math.ceil(window.innerWidth / 155);

const pointLightColor = 0xaaaaaa
const pointLight1 = new PointLight(pointLightColor);
const pointLight2 = new PointLight(pointLightColor);
const pointLight3 = new PointLight(pointLightColor);
const pointLight4 = new PointLight(pointLightColor);

const y = 2
export const setLights = (scene: Scene) => {
  pointLight1.position.set(0, y, pointLightPosition());

  pointLight2.position.set(pointLightPosition(), y, 0);

  pointLight3.position.set(pointLightPosition(), y, 0);

  pointLight4.position.set(0, y, pointLightPosition());

  const ambientLight = new AmbientLight(pointLightColor);

  scene.add(ambientLight, pointLight1, pointLight2, pointLight3, pointLight4);
};

export const repositionLights = () => {
  pointLight1.position.set(0, y, pointLightPosition());

  pointLight2.position.set(pointLightPosition(), y, 0);

  pointLight3.position.set(pointLightPosition(), y, 0);

  pointLight4.position.set(0, y, pointLightPosition());
};
