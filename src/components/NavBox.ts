import { html } from "lit-html";

export const NavBox = () => {
  const halfWidth = window.innerWidth / 2;
  const quarterHeight = window.innerHeight / 3;
  return html`
    <style>
      #nav-box {
        width: 0;
        height: 0;
        border-left: ${halfWidth}px solid transparent;
        border-right: ${halfWidth}px solid transparent;
        border-bottom: ${quarterHeight}px solid;
        transform: translateY(${quarterHeight}px);
        transition: transform 1s ease-in-out;
      }
    </style>
    <div id="nav-box" class="border-gray-600"></div>
  `;
};

export const NavContent = () => {
  return html`
    <div
      id="nav-box-content"
      class="border  text-white flex flex-col justify-between item-center w-full"
      style="height: ${window.innerHeight / 3}px;"
    >
      <a
        href="https://www.linkedin.com/in/perry-olsson-94a32217a/"
        target="_blank"
        class="linkedin-icon  flex justify-center mt-5 sm:mt-3"
      ></a>
      <div class="flex justify-evenly">
        <a
          href="https://github.com/Perry-Olsson"
          target="_blank"
          class="github-icon"
        ></a>
        <a
          href="https://codepen.io/Perry_O"
          target="_blank"
          class="codepen-icon"
        ></a>
      </div>
      <div
        class="flex justify-between mb-2"
        style="margin-left: 10%; margin-right: 10%;"
      >
        <a
          href="https://www.facebook.com/perry.olsson.7"
          target="_blank"
          class="facebook-icon"
        ></a>
        <a
          href="https://twitter.com/Perry_A_Olsson"
          target="_blank"
          class="twitter-icon"
        >
        </a>
        <a
          href="https://www.instagram.com/perryol/"
          target="_blank"
          class="instagram-icon"
        ></a>
      </div>
    </div>
  `;
};
