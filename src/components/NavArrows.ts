export const RightArrow = (destination: () => void) => {
  const container = document.createElement("div");
  container.classList.add(
    "row-start-2",
    "col-start-12",
    "hidden",
    "justify-end",
    "mr-4",
    "transition-colors",
    "duration-200",
    "sm:flex"
  );

  const button = createArrowButton(destination);
  container.appendChild(button);
  return container;
};

export const LeftArrow = (destination: () => void) => {
  const container = document.createElement("div");
  container.classList.add(
    "sm:flex",
    "row-start-2",
    "col-start-1",
    "hidden",
    "justify-start",
    "ml-4",
    "transition-colors",
    "duration-200"
  );

  const button = createArrowButton(destination);
  button.style.transform = "rotate(180deg)";
  container.appendChild(button);
  return container;
};

const createArrowButton = (destination: () => void) => {
  const button = document.createElement("button");
  button.classList.add(
    "flex",
    "justify-start",
    "items-center",
    "border",
    "border-current",
    "rounded-full",
    "transition-all",
    "hover:text-theme"
  );
  button.style.width = "48px";
  button.style.height = "48px";
  const arrow = document.createElement("div");
  arrow.classList.add("arrow");
  arrow.innerHTML = `
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        style="margin-left: 11px"
      >
        <path
          d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
          class="fill-current stroke-current"
        />
      </svg>`;
  button.appendChild(arrow);
  button.addEventListener("click", destination);
  return button;
};
