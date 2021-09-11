import { html, render, TemplateResult } from "lit-html";
import { Navbar } from "../navigation";
import {
  arrowContainer,
  BackHomeArrow,
  LeftArrow,
  RightArrow,
} from "./NavArrows";
import {
  CodepenIcon,
  ExternalLinkIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./Icons";
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
import { NavBox, NavContent } from "./NavBox";
import { ProfilePhoto } from "./profilePhoto";

export class Components {
  navbar: Navbar;
  constructor(navbar: Navbar) {
    this.navbar = navbar;
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
    this.addNavBox();
    render(
      arrowContainer([LeftArrow(() => this.navbar.work())]),
      document.getElementById("contact-components")!
    );
    render(
      BackHomeArrow(() => this.navbar.intro()),
      document.getElementById("backhome-container")!
    );
  }

  addNavBox() {
    render(NavBox(), document.getElementById("contact-nav-box-container")!);
    render(
      NavContent(),
      document.getElementById("contact-nav-content-container")!
    );
  }

  addIcons() {
    this.appendIcons("github-icon", () => GitHubIcon("text-white"));
    this.appendIcons("external-link", ExternalLinkIcon);
    this.appendIcons("facebook-icon", FacebookIcon);
    this.appendIcons("twitter-icon", TwitterIcon);
    this.appendIcons("linkedin-icon", LinkedinIcon);
    this.appendIcons("codepen-icon", CodepenIcon);
    this.appendIcons("instagram-icon", InstagramIcon);
  }

  appendIcons(className: string, icon: () => TemplateResult) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      render(icon(), elements.item(i)!);
    }
  }

  render() {
    this.appendAboutPageComponents();
    this.appendWorkPageComponents();
    this.appendContactPageComponents();
    this.addIcons();
  }

  reRender() {
    this.addNavBox();
  }
}

export const renderDynamicComponents = () => {
  TechSlider();
  render(ProfilePhoto, document.getElementById("profile-photo-container")!);
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
