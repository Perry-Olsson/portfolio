import { TeardownFunction } from "../types";

const arrowCircle = document.querySelector("#arrow-circle")!;
export class Animator implements AnimationUtils {
  private static instance: Animator;
  aboutPage = new AboutPageAnimator();
  workPage = new WorkPageAnimator();
  contactPage = new ContactAnimator();
  private constructor() {}

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
  constructor() {}

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
  constructor() {}

  hasBeenDrawn = false;
  drawTodoSvg(delay = 0) {
    if (!this.hasBeenDrawn) {
      setTimeout(() => {
        const todoSvg = document.getElementById("todo-svg")!;
        todoSvg.style.animation = "draw 2.5s linear forwards";
        setTimeout(() => {
          todoSvg.style.fillOpacity = "1";
          todoSvg.style.strokeDashoffset = "0";
          todoSvg.style.animation = "";
          this.hasBeenDrawn = true;
        }, 2500);
      }, delay + 500);
    }
  }
}

class AboutPageAnimator {
  techSlideId = 0;
  translateVal = 0;
  hasStarted = false;
  constructor() {}

  start(baseDelay = 0) {
    this.startTechSlide(baseDelay);
    this.showExclamation(baseDelay);
    this.showDivider(baseDelay);
    this.showProfilePhoto(baseDelay);
  }

  startTechSlide(delay = 0) {
    setTimeout(async () => {
      if (!this.hasStarted)
        await new Promise((res) => {
          setTimeout(() => {
            this.hasStarted = true;
            res(true);
          }, 2000);
        });
      this.techSlideId = requestAnimationFrame(() => this.animateTechSlide());
    }, delay);
  }

  stopTechSlide() {
    cancelAnimationFrame(this.techSlideId);
  }

  duration = Date.now()
  private animateTechSlide() {
    this.techSlideId = requestAnimationFrame(() => this.animateTechSlide());
    document.getElementById(
      "tech-slider-inner"
    )!.style.left = `${this.translateVal}%`;
    if (Date.now() - this.duration > 10){
    this.translateVal -= 0.2;
    this.duration = Date.now()
    }
    if (this.translateVal <= -533) this.translateVal = 0;
  }

  exclamationShown = false;
  showExclamation(delay = 0) {
    if (!this.exclamationShown) {
      this.exclamationShown = true;
      setTimeout(() => {
        const cover = document.getElementById("exclamation-cover")!;
        cover.style.transform = "translate(-30px, -90px)";
        setTimeout(() => {
          cover.style.transition = "";
          cover.style.transform = "scale(0, 0)";
        }, 1200);
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
