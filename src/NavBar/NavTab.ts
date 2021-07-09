const NavTab: NavTabC = ({ text }) => {
  const container = document.createElement("div");
  container.setAttribute("class", "nav-tab");

  const h2Wrapper = document.createElement("h2");
  h2Wrapper.append(document.createTextNode(text));

  container.append(h2Wrapper);

  return container;
};

type NavTabC = (props: NavTabProps) => HTMLElement;

interface NavTabProps {
  text: string;
}

export { NavTab };
