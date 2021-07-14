import { AmbientLight, PointLight, Scene } from "three";

export const setLights = (scene: Scene) => {
  const pointLight1 = new PointLight(0xffffff);
  pointLight1.position.set(0, 0, 20);

  const pointLight2 = new PointLight(0xffffff, 0.5);
  pointLight2.position.set(20, 0, 0);

  const pointLight3 = new PointLight(0xffffff);
  pointLight3.position.set(-20, 0, 0);

  const pointLight4 = new PointLight(0xffffff);
  pointLight4.position.set(0, 0, -20);
  pointLight4.lookAt(0, 0, 0);

  const ambientLight = new AmbientLight(0xffffff);

  scene.add(ambientLight);

  // if (import.meta.env.DEV) {
  //   const lightHelper1 = new PointLightHelper(pointLight1);
  //   const lightHelper2 = new PointLightHelper(pointLight2);
  //   const lightHelper3 = new PointLightHelper(pointLight3);
  //   const lightHelper4 = new PointLightHelper(pointLight4);
  //   scene.add(lightHelper1, lightHelper2, lightHelper3, lightHelper4);
  // }
};
