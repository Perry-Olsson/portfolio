import { TeardownFunction } from "../types";
import { halt } from "../utils";

const arrowCircle = document.querySelector("#arrow-circle")!;
export class Animator implements AnimationUtils {
  private static instance: Animator;
  aboutPage = new AboutPageAnimator();
  workPage = new WorkPageAnimator();
  contactPage = new ContactAnimator();
  private constructor() { }

  static getInstance() {
    if (!Animator.instance) {
      Animator.instance = new Animator();
    }
    return Animator.instance;
  }

  removeIntroArrowAnimation() {
    if (arrowCircle.classList.contains("circle-bounce")) {
      arrowCircle.classList.remove("circle-bounce");
      return false;
    }
    return true;
  }
}

class ContactAnimator {
  constructor() { }

  hasBeenShown = false;
  showNavBox(delay = 0) {
    if (!this.hasBeenShown)
      setTimeout(() => {
        document.getElementById("nav-box")!.style.transform = `translateY(0)`;
        this.hasBeenShown = true;
      }, delay);
  }
}

class WorkPageAnimator {
  private animationPipe: Array<() => void | Promise<void>> = [];
  private _hasRanTypeAnimation = false;
  constructor() { }

  hasBeenDrawn = false;
  drawTodoSvg(delay = 0) {
    if (!this.hasBeenDrawn) {
      //initial timeout allows component to client side render first if work page is refreshed
      setTimeout(() => {
        const todoSvg = document.getElementById("todo-svg")!;
        setTimeout(() => {
          todoSvg.style.animation = "draw 2.5s linear forwards";
          setTimeout(() => {
            todoSvg.style.fillOpacity = "1";
            todoSvg.style.strokeDashoffset = "0";
            todoSvg.style.animation = "";
            this.hasBeenDrawn = true;
          }, 2500);
        }, delay + 200);
      }, 0);
    }
  }

  addToTypeAnimationPipe(fn: () => void | Promise<void>) {
    this.animationPipe.push(fn);
  }

  async runTypeAnimationPipe(delay = 0) {
    await halt(delay);
    for (let i = 0; i < this.animationPipe.length; i++) {
      await this.animationPipe[i]();
    }
    this.animationPipe = [];
    this._hasRanTypeAnimation = true;
  }

  hasRanTypeAnimation() {
    return this._hasRanTypeAnimation;
  }
}

class AboutPageAnimator {
  techSlideId = 0;
  translateVal = 0;
  hasStarted = false;
  constructor() { }

  start(baseDelay = 0) {
    this.startTechSlide(baseDelay);
    this.showExclamation(baseDelay);
    this.showDivider(baseDelay);
    this.showProfilePhoto(baseDelay);
  }

  startTechSlide(delay = 0) {
    setTimeout(async () => {
      if (!this.hasStarted) await halt(2000);
      this.hasStarted = true;
      this.techSlideId = requestAnimationFrame(() => this.animateTechSlide());
    }, delay);
  }

  stopTechSlide() {
    cancelAnimationFrame(this.techSlideId);
  }

  duration = Date.now();
  private animateTechSlide() {
    this.techSlideId = requestAnimationFrame(() => this.animateTechSlide());
    document.getElementById(
      "tech-slider-inner"
    )!.style.left = `${this.translateVal}%`;
    if (Date.now() - this.duration > 10) {
      this.translateVal -= 0.2;
      this.duration = Date.now();
    }
    if (this.translateVal <= -533) this.translateVal = 0;
  }

  exclamationShown = false;
  showExclamation(delay = 0) {
    if (!this.exclamationShown) {
      this.exclamationShown = true;
      setTimeout(() => {
        const cover = document.getElementById("exclamation-cover")!;
        cover.style.opacity = "100";
        // setTimeout(() => {
        //   cover.style.transition = "";
        //   cover.style.transform = "scale(0, 0)";
        // }, 1200);
      }, delay);
    }
  }

  showDivider(delay = 0) {
    setTimeout(() => {
      document.getElementById("about-heading-divider")!.style.width = "100%";
    }, delay);
  }
  showProfilePhoto(delay = 0) {
    setTimeout(() => {
      document.getElementById("profile-photo-container")!.style.transform =
        "scale(1)";
    }, delay);
  }
}

interface AnimationUtils {
  removeIntroArrowAnimation: TeardownFunction;
}
