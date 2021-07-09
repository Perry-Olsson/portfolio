import { NavTab } from "./NavTab";

const navBar = document.createElement("div");
navBar.id = "nav-bar";
navBar.append(NavTab({ text: "About" }));
navBar.append(NavTab({ text: "Projects" }));

export { navBar };
