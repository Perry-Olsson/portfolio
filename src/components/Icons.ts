import { html } from "lit-html";

export const GitHubIcon = (color = "") => {
  return html`
    <svg
      class="social-icon ${color} theme-hover fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  `;
};

export const FacebookIcon = () => html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 117.7 226.6"
    class="social-icon text-white theme-hover"
  >
    <path
      d="M76.4 226.6V123.2h34.7l5.2-40.3H76.4V57.2c0-11.7 3.2-19.6 20-19.6h21.3v-36C114 1.1 101.3 0 86.6 0 55.8 0 34.8 18.8 34.8 53.2v29.7H0v40.3h34.8v103.4h41.6z"
      class="fill-current"
    ></path>
  </svg>
`;

export const TwitterIcon = () => html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="social-icon text-white theme-hover"
  >
    <path
      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
      class="fill-current"
    />
  </svg>
`;

export const LinkedinIcon = () => html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25.8 25.7"
    class="social-icon text-white theme-hover"
  >
    <g fill="#010202">
      <path
        d="M.4 8.5h5.3v17.2H.4V8.5zM3.1 0c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1C1.4 6.2 0 4.8 0 3.1 0 1.4 1.4 0 3.1 0M9.1 8.5h5.1v2.3h.1C15 9.4 16.8 8 19.4 8c5.4 0 6.4 3.6 6.4 8.2v9.4h-5.3v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.4v8.5H9.1v-17z"
        class="fill-current"
      ></path>
    </g>
  </svg>
`;

export const ExternalLinkIcon = () => {
  return html`
    <svg
      class="social-icon theme-hover stroke-current"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  `;
};

let firstRender = true;
export const TodoSvg = () => {
  const style = firstRender
    ? "transition: fill-opacity 0.5s; fill-opacity: 0; stroke-dasharray: 300px; stroke-dashoffset: 300px"
    : "";

  firstRender = false;
  return html`
    <svg
      id="todo-svg"
      class="stroke-current fill-current mb-1 sm:mb-0"
      style=${style}
      enable-background="new 0 0 64 64"
      height="90px"
      viewBox="0 0 64 64"
      width="65px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m8 19h8c.55225 0 1-.44775 1-1v-3h-2v2h-6v-6h3v-2h-4c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1z"
      />
      <path
        d="m12 13.58594-1.29297-1.29297-1.41406 1.41406 2 2c.19531.19531.45117.29297.70703.29297s.51172-.09766.70703-.29297l6-6-1.41406-1.41406z"
      />
      <path
        d="m15 30h-6v-6h3v-2h-4c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-3h-2z"
      />
      <path
        d="m12 26.58594-1.29297-1.29297-1.41406 1.41406 2 2c.19531.19531.45117.29297.70703.29297s.51172-.09766.70703-.29297l6-6-1.41406-1.41406z"
      />
      <path
        d="m16 35h-8c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-8c0-.55225-.44775-1-1-1zm-1 8h-6v-6h6z"
      />
      <path
        d="m16 48h-8c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-8c0-.55225-.44775-1-1-1zm-1 8h-6v-6h6z"
      />
      <path
        d="m57.70703 5.29297c-.39062-.39062-1.02344-.39062-1.41406 0l-6.29297 6.29297-9.29297-9.29297c-.1875-.1875-.44189-.29297-.70703-.29297h-37c-.55225 0-1 .44775-1 1v58c0 .55225.44775 1 1 1h47c.55225 0 1-.44775 1-1v-39.58594l10.70703-10.70703c.39062-.39062.39062-1.02344 0-1.41406zm-8.70703 54.70703h-45v-56h35.58594l8 8h-6.58594v-5h-2v6c0 .55225.44775 1 1 1h7.58594l-23.29297 23.29297c-.10986.10986-.19238.24365-.2417.39062l-2 6c-.11963.35938-.02637.75586.2417 1.02344.19043.19092.44629.29297.70703.29297.10596 0 .2124-.0166.31641-.05127l6-2c.14697-.04932.28076-.13184.39062-.2417l19.29297-19.29297zm-23.56299-20.14893 1.71191 1.71191-2.56787.85596zm3.56299.73487-2.58594-2.58594 30.58594-30.58594 2.58594 2.58594z"
      />
      <path d="m45 56h2v2h-2z" />
      <path d="m41 56h2v2h-2z" />
      <path d="m37 56h2v2h-2z" />
    </svg>
  `;
};

export const BackIcon = () => html`
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

export const CodepenIcon = () => {
  return html`
    <svg
      class="social-icon text-white theme-hover fill-current"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        d="M255.807 87.087c-.059-.31-.11-.62-.193-.924-.052-.183-.114-.355-.172-.535a11.007 11.007 0 0 0-.283-.8c-.076-.182-.162-.358-.245-.534a9.74 9.74 0 0 0-.376-.73c-.096-.176-.207-.342-.313-.51a11.038 11.038 0 0 0-.842-1.142 11.166 11.166 0 0 0-.544-.596c-.145-.145-.29-.29-.442-.431a9.07 9.07 0 0 0-.624-.52c-.165-.128-.327-.26-.5-.377-.061-.044-.117-.096-.182-.138L134.099 1.85a10.989 10.989 0 0 0-12.201 0l-117 77.998c-.065.041-.116.093-.182.138-.172.12-.334.248-.5.376a15.52 15.52 0 0 0-.624.517 8.604 8.604 0 0 0-.438.43c-.193.194-.372.39-.548.597-.13.155-.255.31-.376.483-.165.217-.317.438-.465.669-.107.169-.214.334-.314.51a9.593 9.593 0 0 0-.372.724c-.083.176-.172.355-.245.534-.107.262-.2.531-.286.8-.058.18-.12.355-.169.517-.08.303-.138.61-.193.924-.03.159-.069.314-.09.476-.062.475-.096.951-.096 1.437v78.016c0 .482.034.965.103 1.437.025.173.07.31.104.476.055.31.103.62.207.931.048.172.103.345.172.534.086.276.172.552.276.804.072.172.172.344.241.517.114.241.242.482.38.734.096.172.206.345.31.503.148.242.31.449.482.655.121.173.242.31.38.476.175.207.344.414.551.597.141.137.276.31.448.413.2.173.414.345.62.524.166.138.346.242.483.376.066.034.104.103.173.134l116.968 78.04a10.815 10.815 0 0 0 6.102 1.851 11.06 11.06 0 0 0 6.102-1.85l117-78c.065-.04.12-.089.182-.134.172-.12.334-.248.5-.375.214-.17.424-.345.624-.524.151-.135.296-.283.441-.428a9.876 9.876 0 0 0 .92-1.072c.166-.217.318-.441.466-.669.107-.165.214-.334.314-.503.138-.242.258-.486.375-.734.083-.176.17-.352.245-.531.107-.266.197-.535.283-.804.058-.179.12-.355.172-.534.08-.303.135-.614.193-.924.028-.159.07-.314.086-.476.063-.475.097-.951.097-1.437V89c0-.486-.038-.962-.097-1.438-.027-.169-.079-.306-.113-.475h.017zm-127.81 66.935l-38.905-26.021 38.905-26.025 38.907 26.025-38.907 26.021zm-10.998-71.155l-47.692 31.9L30.81 89.013 117 31.555v51.312zm-67.477 45.13l-27.517 18.406v-36.811l27.517 18.405zm19.785 13.245L117 173.138v51.312l-86.19-57.465 38.498-25.75v.007zm69.69 31.89l47.692-31.896 38.501 25.749-86.193 57.458v-51.312zm67.477-45.128l27.521-18.409v36.815l-27.52-18.413v.007zm-19.785-13.238L138.997 82.87V31.555l86.193 57.459-38.5 25.752z"
      />
    </svg>
  `;
};

export const InstagramIcon = () => {
  return html`
    <svg
      class="social-icon text-white theme-hover fill-current"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
        ></path>
      </g>
    </svg>
  `;
};
