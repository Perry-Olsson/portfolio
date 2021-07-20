import { Navbar } from "../navigation";
import { aboutPage, contactPage, techSlider, workPage } from "./elements";
import { BackHomeArrow, LeftArrow, RightArrow } from "./NavArrows";
import {
  CSS3Svg,
  DockerSvg,
  ExpressJsSvg,
  GitSvg,
  GraphQLSvg,
  HTML5Svg,
  JavaScriptSvg,
  LinuxSvg,
  MongoDBSvg,
  NodeJsSvg,
  PostgresSvg,
  PythonSvg,
  ReactSvg,
  ReduxSvg,
  TypeScriptSvg,
} from "./techSkillsIcons";

export class Components {
  navbar: Navbar;
  constructor(navbar: Navbar) {
    this.navbar = navbar;
  }

  appendAboutPageComponents() {
    aboutPage.appendChild(LeftArrow(() => this.navbar.intro()));
    aboutPage.appendChild(RightArrow(() => this.navbar.work()));
    TechSlider();
  }

  appendWorkPageComponents() {
    workPage.appendChild(LeftArrow(() => this.navbar.about()));
    workPage.appendChild(RightArrow(() => this.navbar.contact()));
  }

  appendContactPageComponents() {
    contactPage.appendChild(LeftArrow(() => this.navbar.work()));
    contactPage.appendChild(BackHomeArrow(() => this.navbar.intro()));
  }

  render() {
    this.appendAboutPageComponents();
    this.appendWorkPageComponents();
    this.appendContactPageComponents();
  }
}

const TechSlider = () => {
  tech.forEach((t, i) => {
    const container = document.createElement("div");
    container.classList.add("flex", "items-center", "justify-center");
    container.style.width = "33.33333%";
    container.style.minWidth = "33.33333%";
    const span = document.createElement("span");
    span.classList.add("flex", "justify-center", "ml-2", "text-gray-600");
    span.textContent = t;
    container.innerHTML = techIcons[i];
    container.appendChild(span);
    techSlider.appendChild(container);
  });
};

const techIcons = [
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
  TypeScriptSvg,
  PythonSvg,
  ReactSvg,
  ReduxSvg,
  ReactSvg,
  NodeJsSvg,
  ExpressJsSvg,
  GraphQLSvg,
  PostgresSvg,
  MongoDBSvg,
  GitSvg,
  LinuxSvg,
  DockerSvg,
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
];

const tech = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Redux",
  "React Native",
  "Node.js",
  "Express",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Linux",
  "Docker",
  "HTML",
  "CSS",
  "JavaScript",
];
