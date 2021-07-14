import { initScene } from "./initScene";
import { handleResize, setupDrag } from "./utils";
import { Cube } from "./cube";
import { Router } from "./router";
import { Navbar } from "./navigation";

const { scene, renderer, camera, animate } = initScene();

const cube = new Cube();
scene.add(cube);

handleResize(renderer, camera, cube);
setupDrag();

const router = new Router({ camera, cube });
new Navbar(router);

animate();
