import { Navbar } from "../navigation";

let xStart: number;
let xEnd: number;
let yStart: number;
let yEnd: number;
const xMin = 100;
const yMax = 60;
const durationMax = 300;
let touchStart = 0;
let touchEnd = 0;
export const setupSwipe = (navbar: Navbar) => {
  document.addEventListener("touchstart", (e) => {
    touchStart = Date.now();
    xStart = e.touches[0].screenX;
    yStart = e.touches[0].screenY;
  });
  document.addEventListener("touchmove", (e) => {
    xEnd = e.touches[0].screenX;
    yEnd = e.touches[0].screenY;
  });
  document.addEventListener("touchend", () => {
    touchEnd = Date.now();
    if (isYMovementSmallEnough() && touchIsShortEnough()) {
      if (xEnd - xMin > xStart) {
        //right swipe
        console.log("right swipe");
        navbar.goToPrevious();
      }

      if (xEnd + xMin < xStart) {
        //left swipe
        console.log("left swipe");
        navbar.goToNext();
      }
    }
    resetValues();
  });
};

const resetValues = () => {
  xStart = NaN;
  xEnd = NaN;
  yStart = NaN;
  yEnd = NaN;
};

const isYMovementSmallEnough = () => Math.abs(yEnd - yStart) < yMax;

const touchIsShortEnough = () => touchEnd - touchStart < durationMax;
