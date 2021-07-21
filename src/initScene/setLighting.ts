import { AmbientLight, PointLight, Scene } from "three";

const pointLightPosition = () => Math.ceil(window.innerWidth / 155);

const pointLight1 = new PointLight(0xffffff);
const pointLight2 = new PointLight(0xffffff);
const pointLight3 = new PointLight(0xffffff);
const pointLight4 = new PointLight(0xffffff);
export const setLights = (scene: Scene) => {
  pointLight1.position.set(0, 0, pointLightPosition());

  pointLight2.position.set(pointLightPosition(), 0, 0);

  pointLight3.position.set(pointLightPosition(), 0, 0);

  pointLight4.position.set(0, 0, pointLightPosition());

  const ambientLight = new AmbientLight(0xaaaaaa);

  scene.add(ambientLight, pointLight1, pointLight2, pointLight3, pointLight4);
};

export const repositionLights = () => {
  pointLight1.position.set(0, 0, pointLightPosition());

  pointLight2.position.set(pointLightPosition(), 0, 0);

  pointLight3.position.set(pointLightPosition(), 0, 0);

  pointLight4.position.set(0, 0, pointLightPosition());
};
