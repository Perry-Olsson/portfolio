export class Animator {
  private static instance: Animator;
  private constructor() {}

  static getInstance() {
    if (!Animator.instance) {
      Animator.instance = new Animator();
    }
    return Animator.instance;
  }

  removeIntroArrowAnimation() {
    setTimeout(() => {
      document
        .querySelector<HTMLDivElement>("#arrow-circle")!
        .classList.remove("circle-bounce");
    }, 4400);
  }
}
