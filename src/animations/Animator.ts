import { techSlider } from "../components";
import { TeardownFunction } from "../types";

const arrowCircle = document.querySelector("#arrow-circle")!;
export class Animator implements AnimationUtils {
  private static instance: Animator;
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

  techSlideId = 0;
  translateVal = 0;

  startTechSlide(delay = 0) {
    setTimeout(() => {
      this.techSlideId = requestAnimationFrame(() => this.animateTechSlide());
    }, delay);
  }

  stopTechSlide() {
    cancelAnimationFrame(this.techSlideId);
  }

  animateTechSlide() {
    this.techSlideId = requestAnimationFrame(() => this.animateTechSlide());
    techSlider.style.left = `${this.translateVal}%`;
    this.translateVal -= 0.1;
    if (this.translateVal <= -533) this.translateVal = 0;
  }
}

interface AnimationUtils {
  removeIntroArrowAnimation: TeardownFunction;
}
