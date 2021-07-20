export const RightArrow = (destination: () => void) => {
  const container = document.createElement("div");
  container.classList.add(
    "fixed",
    "hidden",
    "justify-end",
    "transition-colors",
    "duration-200",
    "sm:flex"
  );
  container.style.right = "2.5rem";
  container.style.top = "50%";

  const button = createArrowButton(destination, ArrowIcon());
  container.appendChild(button);
  return container;
};

export const LeftArrow = (destination: () => void) => {
  const container = document.createElement("div");
  container.classList.add(
    "fixed",
    "sm:flex",
    "hidden",
    "justify-start",
    "transition-colors",
    "duration-200"
  );
  container.style.left = "2.5rem";
  container.style.top = "50%";

  const button = createArrowButton(destination, ArrowIcon());
  button.style.transform = "rotate(180deg)";
  container.appendChild(button);
  return container;
};

export const BackHomeArrow = (destination: () => void) => {
  const container = document.createElement("div");
  container.classList.add(
    "fixed",
    "hidden",
    "justify-end",
    "transition-colors",
    "duration-200",
    "sm:flex"
  );
  container.style.right = "2.5rem";
  container.style.top = "50%";

  const button = createArrowButton(destination, RestartIcon());
  container.appendChild(button);
  return container;
};

const createArrowButton = (destination: () => void, icon: HTMLElement) => {
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
  button.appendChild(icon);
  button.addEventListener("click", destination);
  return button;
};

const ArrowIcon = () => {
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
  return arrow;
};

const RestartIcon = () => {
  const restart = document.createElement("div");
  restart.classList.add("w-full", "flex", "justify-center");
  restart.style.transform = "rotate(165deg)";
  restart.style.marginRight = "2px";
  restart.innerHTML = `
  <svg 
    version="1.1" 
    id="restart-icon" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px"
    viewBox="0 0 225.455 225.455" 
    style="enable-background:new 0 0 225.455 225.455;" 
    xml:space="preserve"
    height="24px"
    width="24px"
  >
    <path class="fill-current stroke-current" d="M222.18,67.311c-3.424-2.334-8.088-1.452-10.422,1.97L196.461,91.71c-3.974-18.515-13.179-35.528-26.876-49.224
      c-18.768-18.768-43.721-29.104-70.264-29.104c-26.542,0-51.496,10.336-70.264,29.104c-38.744,38.744-38.744,101.785,0,140.528
      c19.372,19.372,44.818,29.058,70.264,29.058s50.892-9.686,70.264-29.058c2.929-2.929,2.929-7.678,0-10.607
      c-2.929-2.929-7.678-2.929-10.606,0c-32.896,32.895-86.419,32.895-119.314,0c-32.895-32.895-32.895-86.42,0-119.315
      C55.6,37.158,76.786,28.382,99.322,28.382c22.536,0,43.723,8.776,59.657,24.711c12.299,12.298,20.315,27.751,23.34,44.527
      l-26.623-18.158c-3.422-2.334-8.088-1.452-10.422,1.97c-2.334,3.422-1.452,8.088,1.97,10.422l39.714,27.087
      c0.002,0.001,0.004,0.003,0.006,0.005c0.628,0.428,1.298,0.743,1.987,0.958c0.021,0.007,0.041,0.018,0.062,0.024
      c0.117,0.036,0.236,0.05,0.354,0.08c0.6,0.15,1.208,0.242,1.816,0.242c2.396,0,4.751-1.146,6.203-3.274l26.764-39.242
      C226.484,74.311,225.602,69.645,222.18,67.311z"/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
  </svg>
`;

  return restart;
};
