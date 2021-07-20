import { TeardownFunction } from "../types";

const arrowCircle = document.querySelector("#arrow-circle")!;
export class Animator implements AnimationUtils {
  private static instance: Animator;
  aboutPage = new AboutPageAnimator();
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

class AboutPageAnimator {
  techSlideId = 0;
  translateVal = 0;
  hasStarted = false;
  constructor() {}

  start(baseDelay = 0) {
    this.startTechSlide(baseDelay);
    this.showExclamation(baseDelay);
    this.showDivider(baseDelay);
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

  private animateTechSlide() {
    this.techSlideId = requestAnimationFrame(() => this.animateTechSlide());
    document.getElementById(
      "tech-slider-inner"
    )!.style.left = `${this.translateVal}%`;
    this.translateVal -= 0.1;
    if (this.translateVal <= -533) this.translateVal = 0;
  }

  showExclamation(delay = 0) {
    setTimeout(() => {
      document.getElementById("exclamation-cover")!.style.transform =
        "translateY(-80px)";
    }, delay);
  }

  showDivider(delay = 0) {
    setTimeout(() => {
      document.getElementById("about-heading-divider")!.style.width = "100%";
    }, delay);
  }
}

interface AnimationUtils {
  removeIntroArrowAnimation: TeardownFunction;
}
