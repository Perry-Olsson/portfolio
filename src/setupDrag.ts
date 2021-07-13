export const setupDrag = () => {
  let isMouseDown = false;
  document.addEventListener("mousemove", (e) => {
    e.preventDefault();

    if (isMouseDown) {
      console.log("hello");
    }
  });

  document.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
};
