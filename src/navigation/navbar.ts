import { Router } from "../router";
import { hideOverlay, setPage } from "../Workpage";

const x1 = document.querySelector<HTMLDivElement>("#x-1")!;
const x2 = document.querySelector<HTMLDivElement>("#x-2")!;
const xNone = document.querySelector<HTMLDivElement>("#x-none")!;

export class Navbar {
  router: Router;
  overlayOpen: boolean;
  navtabContainer: HTMLDivElement;
  contentContainer: HTMLDivElement;
  navbar = document.querySelector<HTMLDivElement>("#navbar")!;
  burger = document.querySelector<HTMLDivElement>("#burger")!;
  activeTab = document.querySelector<HTMLButtonElement>("#intro")!;
  textDark = "rgba(55, 65, 81, 1)";
  textLight = "white";
  constructor(router: Router) {
    this.router = router;
    this.overlayOpen = false;
    this.navtabContainer =
      document.querySelector<HTMLDivElement>("#navtab-container")!;
    this.contentContainer = document.querySelector("#content-container")!;
    this.addListeners();
    if (window.location.hash === "#about") {
      this.about(false);
      this.router.route = "/about";
    } else if (window.location.hash === "#work") {
      this.work(false);
      this.router.route = "/work";
    } else if (window.location.hash === "#contact") {
      this.contact(false);
      this.router.route = "/contact";
    } else if (window.location.hash !== "") {
      console.log("hello");
      this.intro();
      this.router.route = "/intro";
      history.pushState({}, "intro", "");
    }
    window.onhashchange = (e: HashChangeEvent) => {
      console.log(window.location.hash);
      if (e.oldURL.slice(-7) === "overlay") {
        hideOverlay();
      } else {
        switch (window.location.hash) {
          case "":
            this.intro();
            break;
          case "#about":
            this.about();
            break;
          case "#work":
            this.work();
            break;
          case "#contact":
            this.contact();
            break;
        }
      }
    };
  }

  addListeners() {
    document
      .querySelector<HTMLButtonElement>("#intro")!
      .addEventListener("click", () => this.intro());
    document
      .querySelector<HTMLButtonElement>("#work")!
      .addEventListener("click", () => this.work());
    document
      .querySelector<HTMLButtonElement>("#about")!
      .addEventListener("click", () => this.about());
    document
      .querySelector<HTMLButtonElement>("#contact")!
      .addEventListener("click", () => this.contact());
    document
      .querySelector<HTMLButtonElement>("#burger")!
      .addEventListener("click", () => {
        if (this.overlayOpen) this.hideOverlay();
        else this.showOverlay();
      });
    document
      .querySelector<HTMLButtonElement>("#arrow-circle")!
      .addEventListener("click", () => {
        this.about();
      });
  }

  hideOverlay() {
    this.contentContainer.style.opacity = "1";
    this.navtabContainer.classList.replace("top-0", "-top-full");
    this.navtabContainer.classList.replace("bottom-0", "bottom-full");
    x1.style.transform = "";
    x2.style.transform = "";
    xNone.style.opacity = "1";
    this.overlayOpen = false;
  }

  showOverlay() {
    this.contentContainer.style.opacity = "0";
    this.navtabContainer.classList.replace("-top-full", "top-0");
    this.navtabContainer.classList.replace("bottom-full", "bottom-0");
    x1.style.transform = "rotate(45deg) translate(7px, 8px)";
    x2.style.transform = "rotate(-45deg)";
    xNone.style.opacity = "0";
    this.overlayOpen = true;
  }

  intro(animations = true) {
    this.changeTextColor("white", Router.pos1);
    this.navbar.style.background = "transparent";
    this.removeActiveTab();
    this.goTo("/intro", animations);
  }

  aboutContentChanges() {
    this.changeTextColor(this.textDark, Router.pos2);
    this.changeNavBackground("white", Router.pos2);
    this.changeActiveTab("#about");
  }

  about(animations = true) {
    this.aboutContentChanges();
    this.goTo("/about", animations);
  }

  work(animations = true) {
    //sets default subpage
    //maybe create a wrapper class for the history api that can run runctions on back press
    setPage();
    this.changeTextColor(this.textDark, Router.pos3);
    this.changeNavBackground("white", Router.pos3);
    this.changeActiveTab("#work");
    this.goTo("/work", animations);
  }

  contact(animations = true) {
    this.changeTextColor(this.textDark, Router.pos4);
    this.changeNavBackground("white", Router.pos4);
    this.changeActiveTab("#contact");
    this.goTo("/contact", animations);
  }

  changeActiveTab(selector: string) {
    this.removeActiveTab();
    this.activeTab = this.navbar.querySelector(selector)!;
    this.activeTab.classList.add("navtab-active");
  }

  removeActiveTab() {
    this.activeTab.classList.remove("navtab-active");
  }

  changeTextColor(color: string, position: number) {
    this.navbar.style.background = "transparent";
    setTimeout(() => {
      this.navbar.style.color = color;
      this.burger
        .querySelectorAll<HTMLDivElement>("div")
        .forEach((bar) => (bar.style.backgroundColor = color));
    }, this.router.getAnimationDuration(position));
  }

  changeNavBackground(color: string, position: number) {
    setTimeout(() => {
      this.navbar.style.backgroundColor = color;
    }, this.router.getAnimationDuration(position));
  }

  goTo(route: string, animations: boolean) {
    this.hideOverlay();
    this.router.goTo(route, animations);
  }

  goToNext() {
    switch (this.router.route) {
      case "/intro":
        this.about();
        break;
      case "/about":
        this.work();
        break;
      case "/work":
        this.contact();
        break;
      case "/contact":
        break;
    }
  }

  goToPrevious() {
    switch (this.router.route) {
      case "/intro":
        break;
      case "/about":
        this.intro();
        break;
      case "/work":
        this.about();
        break;
      case "/contact":
        this.work();
        break;
    }
  }
}
