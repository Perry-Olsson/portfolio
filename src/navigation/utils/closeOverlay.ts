let open = false;
const navtabContainer =
  document.querySelector<HTMLDivElement>("#navtab-container")!;

export const hideOverlay = () => {
  navtabContainer.classList.replace("top-0", "-top-full");
  navtabContainer.classList.replace("bottom-0", "bottom-full");
  open = false;
};

export const showOverlay = () => {
  navtabContainer.classList.replace("-top-full", "top-0");
  navtabContainer.classList.replace("bottom-full", "bottom-0");
  open = true;
};
