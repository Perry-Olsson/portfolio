import { AmbientLight, PointLight, PointLightHelper, Scene } from "three";

export const setLights = (scene: Scene) => {
  const pointLight1 = new PointLight(0xffffff);
  pointLight1.position.set(0, 10, 20);

  const pointLight2 = new PointLight(0xffffff);
  pointLight2.position.set(20, 10, 0);

  const pointLight3 = new PointLight(0xffffff);
  pointLight3.position.set(-20, 10, 0);

  const pointLight4 = new PointLight(0xffffff);
  pointLight4.position.set(0, 10, -20);

  const ambientLight = new AmbientLight(0x404040);

  scene.add(pointLight1, pointLight2, pointLight3, pointLight4, ambientLight);

  if (import.meta.env.DEV) {
    const lightHelper1 = new PointLightHelper(pointLight1);
    const lightHelper2 = new PointLightHelper(pointLight2);
    const lightHelper3 = new PointLightHelper(pointLight3);
    const lightHelper4 = new PointLightHelper(pointLight4);
    scene.add(lightHelper1, lightHelper2, lightHelper3, lightHelper4);
  }
};
