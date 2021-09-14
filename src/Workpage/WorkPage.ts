import { html, render } from "lit-html";
import { addProjectInfoListeners } from ".";
import { Animator } from "../animations";
import { BackIcon, TodoSvg, todoSvgHeight } from "../components/Icons";
import { halt } from "../utils";
import { OpenSourceContributions } from "./OpenSourceContributions";
import { PersonalWork } from "./PersonalWork";
import { ProfessionalWork } from "./ProfessionalWork";
import styles from "./styles.module.css";

export const WorkPage = (page?: SubPage) => {
  return html`
    <div class=${styles.container}>
      ${page ? getTitle(page) : null} ${getPage(page)}
    </div>
  `;
};

const getTitle = (page?: SubPage) =>
  page
    ? html`
        <h1 class="${styles.header} mb-8" style="height: ${todoSvgHeight};">
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
  render(WorkPage(newPage), document.getElementById("work-content")!);
  history.pushState(
    { newPage },
    `work/${newPage ? newPage : ""}`,
    `#work${newPage ? `/#${newPage.replace(" ", "").toLowerCase()}` : ""}`
  );
  if (addListeners) addListeners();
};

export const WorkPageNav = () => html`
  <nav
    class="fixed top-24 bottom-0 right-0 left-0 flex flex-col justify-between items-center bg-white"
    style="padding-bottom: 25vh;"
  >
    <div class="${styles.container}">
      <h1 class=${styles.header}>
        <div id="todo-svg-container" class="inline-block relative top-3">
          ${TodoSvg()}
        </div>
        <span>What I've Done<span class="text-theme">.</span></span>
      </h1>
      <div class="bg-gray-400 h-2 rounded mt-2 mb-6 w-full"></div>
    </div>
    <button @click=${() => setPage("Professional")} class="${styles.navtab}">
      ${TypeOutTextAnimation("Professional")}
    </button>
    <button @click=${() => setPage("Open Source")} class="${styles.navtab}">
      ${TypeOutTextAnimation("Open Source")}
    </button>
    <button
      @click=${() => setPage("Personal", addProjectInfoListeners)}
      class="${styles.navtab}"
    >
      ${TypeOutTextAnimation("Personal")}
    </button>
  </nav>
`;

const workPageAnimator = Animator.getInstance().workPage;

const Cursor = (text: string) => html`
  ${text.split("").map(
    (char) =>
      //space characters cause a bug on mobile so they are replaced with "s" and and given no opacity
      html`<span class="none ${char === " " ? "opacity-0" : ""}"
        >${char === " " ? "s" : char}</span
      >`
  )}
  <span id="cursor" class="text-theme bg-theme opacity-100 absolute">T</span>
`;

async function typeOut(text: string, renderElementId: string) {
  render(Cursor(text), document.getElementById(renderElementId)!);
  await halt(300);
  for (let i = 1; i <= text.length; i++) {
    const letter = document.querySelector(
      `#${renderElementId} span:nth-child(${i})`
    );
    letter!.classList.remove("none");
    await halt(80);
  }
  await halt(200);
  document.getElementById("cursor")!.remove();
}

const TypeOutTextAnimation = (text: string) => {
  if (workPageAnimator.hasRanTypeAnimation()) return text;
  const elementId = `type-anim-${text.replace(" ", "")}`;

  workPageAnimator.addToTypeAnimationPipe(() => typeOut(text, elementId));

  return html`
    <style>
      /* @keyframes blink {
        from {
          opacity: 1;
        }
        40% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        90% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .blink {
        animation-name: blink;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
      } */
    </style>
    <div id="${elementId}"></div>
  `;
};

type SubPage = "Personal" | "Open Source" | "Professional";
