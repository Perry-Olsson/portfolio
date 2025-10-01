import { render, TemplateResult } from "lit-html";
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
import { NavBox, NavContent } from "./NavBox";

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
