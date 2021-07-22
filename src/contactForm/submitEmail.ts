import { Router } from "../router";

export const handleEmailSubmission = () => {
  const form = document.querySelector<HTMLFormElement>("#contact-form")!;
  const formStatus = document.getElementById("contact-form-status")!;

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
    try {
      const response = await fetch("https://formspree.io/f/meqvldnp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        formStatus.style.transform = "scale(1)";
        form.reset();
        Router.teardownFunctions.push(() => {
          formStatus.style.transform = "scale(0)";
          return false;
        });
      } else {
        console.log(response);
        showError(formStatus);
      }
    } catch (err) {
      console.log(err);
      showError(formStatus);
    }
  }

  form.addEventListener("submit", handleSubmit);
};

function showError(formStatus: HTMLElement) {
  formStatus.textContent = "Oops, Something went wrong!";
  formStatus.classList.replace("text-theme", "text-red-700");
  formStatus.style.transform = "scale(1)";
  Router.teardownFunctions.push(() => {
    formStatus.textContent = "Success, thank you!";
    formStatus.classList.replace("text-red-700", "text-theme");
    formStatus.style.transform = "scale(0)";
    return false;
  });
}
