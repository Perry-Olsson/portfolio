import { html, render } from "lit-html";
import { projectData } from "./projectDescriptions";

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
  render(ProjectInfo(projectData[index]), overlayElement);
  overlayElement.classList.remove("none");
  setTimeout(() => {
    overlayElement.style.transform = "scale(1, 1)";
  });
};

export interface ProjectInfoProps {
  projectTitle: string;
}
export const ProjectInfo = (data: ProjectInfoProps) => {
  return html` <div>${InfoPageExitButton()}${data.projectTitle}</div> `;
};

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
        overlayElement.style.transform = "scale(1, 0)";
        setTimeout(() => {
          overlayElement.classList.add("none");
          overlayElement.style.transform = "scale(0, 1)";
        }, 800);
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
