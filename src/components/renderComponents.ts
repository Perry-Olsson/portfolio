import { Navbar } from "../navigation";
import { aboutPage, contactPage, workPage } from "./elements";
import { BackHomeArrow, LeftArrow, RightArrow } from "./NavArrows";

export class Components {
  navbar: Navbar;
  constructor(navbar: Navbar) {
    this.navbar = navbar;
  }

  appendAboutPageComponents() {
    aboutPage.appendChild(LeftArrow(() => this.navbar.intro()));
    aboutPage.appendChild(RightArrow(() => this.navbar.work()));
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
