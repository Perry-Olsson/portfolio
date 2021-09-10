import { html, render } from "lit-html";
import { addProjectInfoListeners } from ".";
import { TodoSvg } from "../components/Icons";
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
            >${backIcon()}</span
          ><span>${page}<span class="text-theme">.</span></span>
        </h1>
      `
    : null;

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

type SubPage = "Personal" | "Open Source" | "Professional";

const backIcon = () => html`
  <?xml version="1.0" encoding="iso-8859-1"?>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    height="41px"
    viewBox="0 0 55.753 55.753"
    style="enable-background:new 0 0 55.753 55.753;"
    xml:space="preserve"
    class="fill-current stroke-current"
  >
    <g>
      <path
        d="M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001
		c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637
		c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727
		c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z"
      />
    </g>
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
`;
