import { html, render } from "lit-html";
import { ProfilePhoto } from "./profilePhoto";
import {
  CSS3Svg,
  DockerSvg,
  ExpressJsSvg,
  GitSvg,
  GraphQLSvg,
  HTML5Svg,
  JavaScriptSvg,
  LinuxSvg,
  MongoDBSvg,
  NodeJsSvg,
  PostgresSvg,
  PythonSvg,
  ReactSvg,
  ReduxSvg,
  TypeScriptSvg,
} from "./techSkillsIcons";

export const renderDynamicComponents = () => {
  TechSlider();
  render(ProfilePhoto, document.getElementById("profile-photo-container")!);
};

const TechSlider = () => {
  const techItems = html`
    <div id="tech-slider-inner" class="my-2 relative flex items-center">
      ${tech.map((t, i) => {
        return html`
          <div
            class="flex items-center justify-center"
            style="width: 33.3333%; min-width: 33.3333%;"
          >
            ${techIcons[i]}
            <span class="flex justify-center ml-2 text-gray-600">${t}</span>
          </div>
        `;
      })}
    </div>
  `;
  render(techItems, document.getElementById("tech-slider")!);
};

const techIcons = [
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
  TypeScriptSvg,
  PythonSvg,
  ReactSvg,
  ReduxSvg,
  ReactSvg,
  NodeJsSvg,
  ExpressJsSvg,
  GraphQLSvg,
  PostgresSvg,
  MongoDBSvg,
  GitSvg,
  LinuxSvg,
  DockerSvg,
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
];

const tech = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Redux",
  "React Native",
  "Node.js",
  "Express",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Linux",
  "Docker",
  "HTML",
  "CSS",
  "JavaScript",
];
