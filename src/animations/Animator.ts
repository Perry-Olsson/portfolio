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
}

interface AnimationUtils {
  removeIntroArrowAnimation: TeardownFunction;
}
