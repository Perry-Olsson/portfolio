import { initScene } from "./initScene";
import { handleResize } from "./utils";
import { Cube } from "./cube";
import { Router } from "./router";
import { Navbar } from "./navigation";
import { Components } from "./components";
import { handleEmailSubmission } from "./contactForm";
import { setupSwipe } from "./utils/setupSwipe";

const cube = new Cube();

const { scene, renderer, camera, animate } = initScene();

scene.add(cube);

handleEmailSubmission();

export const router = new Router({ camera, cube });
const navbar = new Navbar(router);
const components = new Components(navbar);
components.render();

handleResize(renderer, camera, cube, components);
setupSwipe(navbar);

animate();
