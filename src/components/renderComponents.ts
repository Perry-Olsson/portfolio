import { html, render } from "lit-html";
import { Navbar } from "../navigation";
import {
  arrowContainer,
  BackHomeArrow,
  LeftArrow,
  RightArrow,
} from "./NavArrows";
import { externalLinkIcon, gitHubIcon, todoSvg } from "./socialIcons";
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
  ReactNativeSvg,
  ReactSvg,
  ReduxSvg,
  TypeScriptSvg,
} from "./techSkillsIcons";

export class Components {
  navbar: Navbar;
  constructor(navbar: Navbar) {
    this.navbar = navbar;
  }

  appendIntroPageComponents() {
    render(gitHubIcon(), document.getElementById("github-personal")!);
  }

  appendAboutPageComponents() {
    render(
      arrowContainer([
        LeftArrow(() => this.navbar.intro()),
        RightArrow(() => this.navbar.work()),
      ]),
      document.getElementById("about-components")!
    );
  }

  appendWorkPageComponents() {
    render(
      arrowContainer([
        LeftArrow(() => this.navbar.about()),
        RightArrow(() => this.navbar.contact()),
      ]),
      document.getElementById("work-components")!
    );
  }

  appendContactPageComponents() {
    render(
      arrowContainer([
        LeftArrow(() => this.navbar.work()),
        BackHomeArrow(() => this.navbar.intro()),
      ]),
      document.getElementById("contact-components")!
    );
  }

  addIcons() {
    this.addGitHubIcons();
    this.addExternalLinkIcons();
    this.addTodoSvg();
  }

  addGitHubIcons() {
    const links = document.getElementsByClassName("github-icon");
    for (let i = 0; i < links.length; i++) {
      render(gitHubIcon(), links.item(i)!);
    }
  }

  addExternalLinkIcons() {
    const links = document.getElementsByClassName("external-link");

    for (let i = 0; i < links.length; i++) {
      render(externalLinkIcon(), links.item(i)!);
    }
  }

  addTodoSvg() {
    render(todoSvg(), document.getElementById("todo-svg-container")!);
  }

  render() {
    this.appendIntroPageComponents();
    this.appendAboutPageComponents();
    this.appendWorkPageComponents();
    this.appendContactPageComponents();
    this.addIcons();
  }
}

export const renderDynamicComponents = () => {
  TechSlider();
};

const TechSlider = () => {
  const techItems = html`
    <div id="tech-slider-inner" class="my-2 relative flex items-center">
      ${tech.map((t, i) => {
        return html`
          <div
            class="flex items-center justify-center"
            style="width: 33.3333%; min-width: 33.3333%;"
          >
            ${techIcons[i]}
            <span class="flex justify-center ml-2 text-gray-600">${t}</span>
          </div>
        `;
      })}
    </div>
  `;
  render(techItems, document.getElementById("tech-slider")!);
};

const techIcons = [
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
  TypeScriptSvg,
  PythonSvg,
  ReactSvg,
  ReduxSvg,
  ReactNativeSvg,
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
