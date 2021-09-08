import { html, render } from "lit-html";

export const WorkPageNav = () => html`
  <nav class="flex justify-around w-full p-3 mb-4 border-b-2">
    <div @click=${() => setPage("personal")} class="flex justify-center flex-1">
      Personal
    </div>
    <div
      @click=${() => setPage("open source")}
      class="flex justify-center flex-1"
    >
      Open Source Contributions
    </div>
  </nav>
`;

const OpenSourceContributions = () => html` <h1>Todo</h1> `;

const getPage = (page: WorkNav) => {
  switch (page) {
    case "open source":
      return OpenSourceContributions();
    default:
      return PersonalWork();
  }
};

type WorkNav = "personal" | "open source" | "professional";
const setPage = (newPage: WorkNav) => {
  render(WorkPage(newPage), document.getElementById("work-page")!);
};
export const WorkPage = (page: WorkNav = "personal") => {
  return html`
    <div class="w-11/12 sm:w-4/6 lg:w-3/6">
      <h1
        class="
						text-5xl text-gray-600
						font-extrabold
						text-left
						flex
						justify-between
						items-end
						mb-8
						"
      >
        <span>What I've Done<span class="text-theme">.</span> </span>
        <div id="todo-svg-container" class="inline-block"></div>
      </h1>
      ${WorkPageNav()} ${getPage(page)}
      <div id="work-components"></div>
    </div>
  `;
};
export const PersonalWork = () => html`
  <div class="project-container flex flex-col">
    <div class="w-11/12 m-auto">
      <h5 class="text-theme text-xl pt-3 font-cursive">Featured Project</h5>
      <h2 class="project-title">Online Booking System</h2>
    </div>
    <div class="image-container">
      <img src="/online-booking.png" class="w-full" />
    </div>
    <div class="w-full">
      <div
        class="
									flex
									justify-between
									flex-col
									sm:flex-row
									w-11/12
									m-auto
									my-4
								"
      >
        <div
          class="
										flex
										items-center
										mb-3
										sm:mb-0
										font-cursive
										text-theme text-xl
									"
        >
          <p class="mr-3">Next.js</p>
          <p class="mr-3">Nginx</p>
          <p class="mr-3">Express</p>
          <p class="mr-3">PostgreSQL</p>
        </div>
        <div class="flex">
          <a
            href="https://github.com/Perry-Olsson/appointment-booking"
            class="github-icon mr-5"
            target="_blank"
          >
          </a>
          <a
            href="https://appointment-booking-example.com"
            class="external-link"
            target="_blank"
          >
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="project-container flex flex-col">
    <div class="w-11/12 m-auto">
      <h5 class="text-theme text-xl pt-3 font-cursive">React Native</h5>
      <h2 class="project-title">To Do Manager</h2>
    </div>
    <div class="image-container grid grid-cols-4">
      <img src="/todo-project1.png" />
      <img src="/todo-project2.png" />
      <img src="/todo-project3.png" />
      <img src="/todo-project4.png" />
    </div>
    <div class="w-full">
      <div
        class="
									flex
									justify-between
									flex-col
									sm:flex-row
									w-11/12
									m-auto
									my-4
								"
      >
        <div
          class="
										flex
										items-center
										mb-3
										sm:mb-0
										font-cursive
										text-theme text-xl
									"
        >
          <p class="mr-3">Node.js</p>
          <p class="mr-3">GraphQL</p>
          <p class="mr-3">PostgreSQL</p>
        </div>
        <div class="flex">
          <a
            href="https://github.com/Perry-Olsson/todo-or-not-todo"
            class="github-icon mr-5"
            target="_blank"
          >
          </a>
          <a
            href="https://expo.io/@perry-olsson/todo-or-not-todo"
            class="external-link"
            target="_blank"
          >
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="project-container flex flex-col">
    <div class="w-11/12 m-auto">
      <h5 class="text-theme text-xl pt-3 font-cursive">Full-Stack Open</h5>
      <h2 class="project-title">Blogify</h2>
    </div>
    <div class="image-container">
      <img src="/blogify-project.png" class="w-full" />
    </div>
    <div class="w-full">
      <div
        class="
									flex
									justify-between
									flex-col
									sm:flex-row
									w-11/12
									m-auto
									my-4
								"
      >
        <div
          class="
										flex
										items-center
										mb-3
										sm:mb-0
										font-cursive
										text-theme text-xl
									"
        >
          <p class="mr-3">React</p>
          <p class="mr-3">Express</p>
          <p class="mr-3">MongoDB</p>
        </div>
        <div class="flex">
          <a
            href="https://github.com/Perry-Olsson/Blogify"
            class="github-icon mr-5"
            target="_blank"
          >
          </a>
          <a
            href="https://blogify-app-v1.herokuapp.com/"
            class="external-link"
            target="_blank"
          >
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="project-container flex flex-col" style="margin-bottom: 0">
    <div class="w-11/12 m-auto">
      <h5 class="text-theme text-xl pt-3 font-cursive">Legacy</h5>
      <h2 class="project-title">Javascript Calculator</h2>
    </div>
    <div class="image-container">
      <img src="/calculator-project.png" class="w-full" />
    </div>
    <div class="w-full">
      <div
        class="
									flex
									justify-between
									flex-col
									sm:flex-row
									w-11/12
									m-auto
									my-4
								"
      >
        <div
          class="
										flex
										items-center
										mb-3
										sm:mb-0
										font-cursive
										text-theme text-xl
									"
        >
          <p class="mr-3">VanillaJS</p>
        </div>
        <div class="flex">
          <a
            href="https://github.com/Perry-Olsson/javascript-calculator"
            class="github-icon mr-5"
            target="_blank"
          >
          </a>
          <a
            href="https://perry-olsson.github.io/javascript-calculator/"
            class="external-link"
            target="_blank"
          >
          </a>
        </div>
      </div>
    </div>
  </div>
`;
