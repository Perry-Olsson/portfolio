import { html, render } from "lit-html";
import { addProjectInfoListeners } from ".";
import { BackIcon, TodoSvg } from "../components/Icons";
import { OpenSourceContributions } from "./OpenSourceContributions";
import { PersonalWork } from "./PersonalWork";
import { ProfessionalWork } from "./ProfessionalWork";
import styles from "./styles.module.css";

export const WorkPage = (page?: SubPage) => {
  return html`
    <div class=${styles.container}>
      ${page ? getTitle(page) : null} ${getPage(page)}
      <div id="work-components"></div>
    </div>
  `;
};

const getTitle = (page?: SubPage) =>
  page
    ? html`
        <h1
          class="text-5xl text-gray-600 font-extrabold text-left flex justify-between mb-8"
        >
          <span
            @click=${() => setPage()}
            class="cursor-pointer hover:text-theme"
            >${BackIcon()}</span
          ><span>${page}<span class="text-theme">.</span></span>
        </h1>
      `
    : null;

const getPage = (page?: SubPage) => {
  switch (page) {
    case "Open Source":
      return OpenSourceContributions();
    case "Professional":
      return ProfessionalWork();
    case "Personal":
      return PersonalWork();
    default:
      return WorkPageNav();
  }
};

export const setPage = (newPage?: SubPage, addListeners?: () => void) => {
  render(WorkPage(newPage), document.getElementById("work-page")!);
  history.pushState(
    { newPage },
    newPage || "#work",
    `#work${newPage ? `/#${newPage.replace(" ", "").toLowerCase()}` : ""}`
  );
  if (addListeners) addListeners();
};

export const WorkPageNav = () => html`
  <nav
    class="fixed top-24 bottom-0 right-0 left-0 flex flex-col justify-between  items-center bg-white"
    style="padding-bottom: 25vh;"
  >
    <div class="${styles.container}">
      <h1
        class="
						text-5xl text-gray-600
						font-extrabold
						text-left
						flex
						justify-between
						items-end
						"
      >
        <span>What I've Done<span class="text-theme">.</span></span>
        <div id="todo-svg-container" class="inline-block relative top-3">
          ${TodoSvg()}
        </div>
      </h1>
      <div class="bg-gray-400 h-2 rounded mt-2 mb-6 w-full"></div>
    </div>
    <h2 @click=${() => setPage("Professional")} class="${styles.navtab}">
      Professional
    </h2>
    <h2 @click=${() => setPage("Open Source")} class="${styles.navtab}">
      Open Source
    </h2>
    <h2
      @click=${() => setPage("Personal", addProjectInfoListeners)}
      class="${styles.navtab}"
    >
      Personal
    </h2>
  </nav>
`;

type SubPage = "Personal" | "Open Source" | "Professional";
