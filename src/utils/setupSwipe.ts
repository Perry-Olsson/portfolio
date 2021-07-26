export const setupSwipe = () => {
  document.addEventListener("touchstart", (e) => {
    console.log(e.touches);
  });
  document.addEventListener("touchmove", (e) => {});
};
