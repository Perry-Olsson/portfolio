export const handleEmailSubmission = () => {
  const form = document.querySelector<HTMLFormElement>("#contact-form")!;

  interface FormData {
    [index: string]: string;
  }
  async function handleSubmit(e: Event) {
    e.preventDefault();
    const data: FormData = {};
    for (let i = 0; i < form.children.length; i++) {
      const child = form.children.item(i)! as HTMLInputElement;
      if (child.getAttribute("name") !== "submit")
        data[child.getAttribute("name")!] = child.value!;
    }
    const response = await fetch("https://formspree.io/f/meqvldnp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);
  }

  form.addEventListener("submit", handleSubmit);
};
