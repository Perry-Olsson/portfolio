import { html, TemplateResult } from "lit-html";
import { StyleInfo, styleMap } from "lit-html/directives/style-map";

export const arrowContainer = (components: TemplateResult[]) => {
  return html` <div class="flex justify-center my-10">${components}</div> `;
};

export const RightArrow = (destination: () => void) => {
  const button = createArrowButton(destination, ArrowIcon());
  return html`
    <div
      class="static sm:fixed bottom-0 right-10 sm:top-2/4 justify-end transition-colors duration-200 sm:flex"
    >
      ${button}
    </div>
  `;
};

export const LeftArrow = (destination: () => void) => {
  const button = createArrowButton(
    destination,
    ArrowIcon({ transform: "rotate(180deg)" })
  );
  return html`
    <div
      class="hidden sm:fixed bottom-0 left-10 sm:top-2/4  sm:flex  justify-start trnasition-colors duration-200"
    >
      ${button}
    </div>
  `;
};

export const BackHomeArrow = (destination: () => void) => {
  const button = createArrowButton(destination, RestartIcon());
  return html`
    <div class="relative bottom-2 transition-colors duration-200">
      ${button}
    </div>
  `;
};

const createArrowButton = (destination: () => void, icon: TemplateResult) => {
  const button = html`
    <button
      @click=${destination}
      class="flex justify-start items-center border border-current rounded-full transition-all hover:text-theme"
      style="width: 48px; height: 48px;"
    >
      ${icon}
    </button>
  `;

  return button;
};

const ArrowIcon = (style: StyleInfo = {}) => {
  return html` <div class="arrow">
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      style=${styleMap({ ...style, marginLeft: "11px" })}
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
        class="fill-current stroke-current"
      />
    </svg>
  </div>`;
};

const RestartIcon = () => {
  return html`
    <style>
      #back-home-arrow {
        transform: rotate(165deg);
        transition: transform 0.7s ease-in-out;
      }
      #back-home-arrow:hover {
        transform: rotate(525deg);
      }
    </style>
    <div
      id="back-home-arrow"
      class="w-full flex justify-center"
      style=" margin-right: 2px"
    >
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
        <path
          class="fill-current stroke-current"
          d="M222.18,67.311c-3.424-2.334-8.088-1.452-10.422,1.97L196.461,91.71c-3.974-18.515-13.179-35.528-26.876-49.224
      c-18.768-18.768-43.721-29.104-70.264-29.104c-26.542,0-51.496,10.336-70.264,29.104c-38.744,38.744-38.744,101.785,0,140.528
      c19.372,19.372,44.818,29.058,70.264,29.058s50.892-9.686,70.264-29.058c2.929-2.929,2.929-7.678,0-10.607
      c-2.929-2.929-7.678-2.929-10.606,0c-32.896,32.895-86.419,32.895-119.314,0c-32.895-32.895-32.895-86.42,0-119.315
      C55.6,37.158,76.786,28.382,99.322,28.382c22.536,0,43.723,8.776,59.657,24.711c12.299,12.298,20.315,27.751,23.34,44.527
      l-26.623-18.158c-3.422-2.334-8.088-1.452-10.422,1.97c-2.334,3.422-1.452,8.088,1.97,10.422l39.714,27.087
      c0.002,0.001,0.004,0.003,0.006,0.005c0.628,0.428,1.298,0.743,1.987,0.958c0.021,0.007,0.041,0.018,0.062,0.024
      c0.117,0.036,0.236,0.05,0.354,0.08c0.6,0.15,1.208,0.242,1.816,0.242c2.396,0,4.751-1.146,6.203-3.274l26.764-39.242
      C226.484,74.311,225.602,69.645,222.18,67.311z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  `;
};
