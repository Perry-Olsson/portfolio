import { initScene } from "./initScene";
import { handleResize, setupDrag } from "./utils";
import { Cube } from "./cube";
import { Router } from "./router";
import { Navbar } from "./navigation";
import { Components } from "./components";

const { scene, renderer, camera, animate } = initScene();

const cube = new Cube();
scene.add(cube);

handleResize(renderer, camera, cube);
setupDrag();

export const router = new Router({ camera, cube });
const navbar = new Navbar(router);

new Components(navbar).render();

animate();
