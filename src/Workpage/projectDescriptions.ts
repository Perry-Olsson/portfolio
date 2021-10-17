//must be in the order the projects are in the dom
export const open_source_contribution_data: ProjectInfoProps[] = [
  {
    projectTitle: "Next.js Webpack Rule",
    imgUrls: ["/nextjs-logo.png"],
    headline: "A custom webpack rule to block unusable static image imports",
    description: "@TODO",
    pullRequestLink: "https://github.com/vercel/next.js/pull/28475",
  },
];
export const personal_project_data: ProjectInfoProps[] = [
  {
    projectTitle: "Online Booking System",
    imgUrls: ["/online-booking.png"],
    headline: "Online booking integration for The Renewal Center",
    description: `
    The Renewal Center offers many different cosmetic 
    services and has multiple employees 
    that provide those services. This 
    website rebuild includes an option 
    for registered users to book services fully online. 
    Currently in development. (demo account: john@example.com | johnsPassword)
    `,
    websiteLink: "https://appointment-booking-example.com",
    githubLink: "https://github.com/Perry-Olsson/appointment-booking",
  },
  {
    projectTitle: "Todo or Not Todo",
    imgUrls: [
      "/todo-project1.png",
      "/todo-project2.png",
      "/todo-project3.png",
      "/todo-project4.png",
    ],
    headline: "React Native task application",
    description: `
    This project offers a simple but 
    aesthetic approach to the classic 
    to do application. It includes 
    account creation and authentication 
    coupled with email confirmaiton. 
    This endeavour is currently on hold, 
    but may blossom into something much larger in the future.`,
    websiteLink: "https://expo.io/@perry-olsson/todo-or-not-todo",
    githubLink: "https://github.com/Perry-Olsson/todo-or-not-todo",
    isMobileApp: true,
  },
  {
    projectTitle: "Blogify",
    imgUrls: ["/blogify-project.png"],
    headline: "A place to post your favorite blogs",
    description: `
    Like, comment, post, delete, change your theme, 
    all things most people expect to be able to do in a modern web application 
    so I went ahead and gave it a try with Blogify. Built as a part of Full-stack Open.`,
    websiteLink: "https://blogify-app-v1.herokuapp.com/",
    githubLink: "https://github.com/Perry-Olsson/Blogify",
  },
  {
    projectTitle: "JavaScript Calculator",
    imgUrls: ["/calculator-project.png"],
    headline: "Pocket style JavaScript caculator",
    description: `
      Find out if 2 + 2 really does equal 5 with this lovely javascript calculator.
    `,
    websiteLink: "https://perry-olsson.github.io/javascript-calculator/",
    githubLink: "https://github.com/Perry-Olsson/javascript-calculator",
  },
];

export interface ProjectInfoProps {
  projectTitle: string;
  imgUrls: string[];
  headline: string;
  description: string;
  pullRequestLink?: string;
  websiteLink?: string;
  githubLink?: string;
  isMobileApp?: boolean;
}
