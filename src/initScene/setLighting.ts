import { AmbientLight, PointLight, Scene } from "three";

const pointLightPosition = Math.ceil(window.innerWidth / 155);

console.log(pointLightPosition);
export const setLights = (scene: Scene) => {
  const pointLight1 = new PointLight(0xffffff);
  pointLight1.position.set(0, 0, pointLightPosition);

  const pointLight2 = new PointLight(0xffffff);
  pointLight2.position.set(pointLightPosition, 0, 0);

  const pointLight3 = new PointLight(0xffffff);
  pointLight3.position.set(-20, 0, 0);

  const pointLight4 = new PointLight(0xffffff);
  pointLight4.position.set(0, 0, -20);
  pointLight4.lookAt(0, 0, 0);

  const ambientLight = new AmbientLight(0xaaaaaa);

  scene.add(ambientLight, pointLight1, pointLight2, pointLight3, pointLight4);
};
