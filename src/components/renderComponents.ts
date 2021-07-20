import { Navbar } from "../navigation";
import { aboutPage, contactPage, techSlider, workPage } from "./elements";
import { BackHomeArrow, LeftArrow, RightArrow } from "./NavArrows";

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
  tech.forEach((t) => {
    const span = document.createElement("span");
    span.classList.add("border", "flex", "justify-center");
    span.style.minWidth = "33.33333%";
    span.textContent = t;
    techSlider.append(span);
  });
};

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
  "Version Control",
  "Linux",
  "Docker",
  "HTML",
  "CSS",
  "JavaScript",
];
