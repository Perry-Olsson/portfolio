import { AmbientLight, PointLight, Scene } from "three";

export const setLights = (scene: Scene) => {
  const pointLight1 = new PointLight(0xffffff);
  pointLight1.position.set(0, 10, 20);

  const pointLight2 = new PointLight(0xffffff);
  pointLight2.position.set(20, 10, 0);

  const pointLight3 = new PointLight(0xffffff);
  pointLight3.position.set(-20, 10, 0);

  const pointLight4 = new PointLight(0xffffff);
  pointLight4.position.set(0, 10, -20);
  pointLight4.lookAt(0, 0, 0);

  const ambientLight = new AmbientLight(0x404040);

  scene.add(ambientLight, pointLight1, pointLight2, pointLight3, pointLight4);
};
