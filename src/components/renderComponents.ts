import { Navbar } from "../navigation";
import { aboutPage } from "./elements";
import { LeftArrow, RightArrow } from "./NavArrows";

export class Components {
  navbar: Navbar;
  constructor(navbar: Navbar) {
    this.navbar = navbar;
  }

  aboutPage() {
    aboutPage.appendChild(LeftArrow(() => this.navbar.intro()));
    aboutPage.appendChild(RightArrow(() => this.navbar.work()));
  }

  render() {
    this.aboutPage();
  }
}
