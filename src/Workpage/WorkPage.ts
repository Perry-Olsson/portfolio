import { html, render } from "lit-html";
import { ExternalLinkIcon, GitHubIcon } from "../components/Icons";
import { projectData, ProjectInfoProps } from "./projectDescriptions";

const overlayElement = document.getElementById("overlay-container")!;

export const addProjectInfoListeners = () => {
  const titles = document.querySelectorAll<HTMLHeadElement>(".project-title");
  const images = document.querySelectorAll<HTMLDivElement>(".image-container");

  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", () => showProjectInfo(i));
    images[i].addEventListener("click", () => showProjectInfo(i));
  }
};

const showProjectInfo = (index: number) => {
  history.pushState({ overlay: true }, "Overlay", "#overlay");
  render(ProjectInfo(projectData[index]), overlayElement);
  overlayElement.classList.remove("none");
  setTimeout(() => {
    overlayElement.style.transform = "scale(1, 1)";
  }, 10);
};

export const ProjectInfo = (data: ProjectInfoProps) => {
  return html`
    <div class="w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto">
      ${InfoPageExitButton()}
      <h3 class="text-4xl font-bold m-3 w-11/12 sm:w-full">
        ${data.projectTitle}<span class="text-theme">.</span>
      </h3>
      <div
        id="image-carousel"
        class="border border-gray-300 shadow-xl ${data.isMobileApp
          ? "grid grid-cols-4"
          : ""}"
      >
        ${data.imgUrls.map((img) => html`<img src=${img} class="w-full" />`)}
      </div>
      <div class="w-11/12 sm:w-full mt-3  text-gray-600 flex flex-col">
        <h6 class="text-2xl text-gray-500">${data.headline}</h6>
        <br class="h-2" />
        <p class="overflow-auto" style="max-height: 149px;">
          ${data.description}
        </p>
        <div class="flex">
          ${ViewSiteButton(data.websiteLink)}
          ${ViewSourceButton(data.githubLink)}
        </div>
      </div>
    </div>
  `;
};

export const ViewSiteButton = (href: string) => html`
  <style>
    .overlay-website-link:hover span,
    .overlay-website-link:hover svg {
      color: white;
    }
  </style>
  <a
    href=${href}
    target="_blank"
    class="overlay-website-link  w-3/6 sm:w-1/4 py-2 mt-4 flex items-center justify-center bg-theme hover:bg-gray-600 border-2 border-gray-600 rounded-md transition-colors duration-300"
  >
    ${ExternalLinkIcon()}
    <span class="ml-3">VIEW SITE</span>
  </a>
`;

export const ViewSourceButton = (href: string) => html`
  <a
    href=${href}
    target="_blank"
    class="overlay-website-link w-3/6 sm:w-1/4 py-2 mt-4 ml-4 flex items-center justify-center bg-theme hover:bg-gray-600 border-2 border-gray-600 rounded-md transition-colors duration-300"
  >
    ${GitHubIcon()}
    <span class="ml-3">CODE</span>
  </a>
`;

export const InfoPageExitButton = () => {
  return html` <style>
      .cross-bar {
        width: 35px;
        height: 5px;
        margin: 3px 0;
        transition: color 0.1s ease-in-out;
        background: currentColor;
        border-radius: 2px;
      }
      #overlay-close-container:hover .cross-bar {
        color: var(--theme);
      }
    </style>
    <button
      @click=${() => {
        history.back();
        overlayElement.style.transform = "scale(1, 0)";
        setTimeout(() => {
          overlayElement.classList.add("none");
          overlayElement.style.transform = "scale(0, 1)";
        }, 500);
      }}
      id="overlay-close-container"
      class="fixed top-3 right-3 h-9"
    >
      <div
        class="cross-bar"
        style="transform: rotate(45deg) translate(6px, 6px);"
      ></div>
      <div class="cross-bar" style="transform: rotate(-45deg);"></div>
    </button>`;
};

export const hideOverlay = () => {
  overlayElement.style.transform = "scale(1, 0)";
  setTimeout(() => {
    overlayElement.classList.add("none");
    overlayElement.style.transform = "scale(0, 1)";
  }, 500);
};
