export default function render() {
  const text = {
    h1: "Juicy, cheesy smashed burgers",
    lead: "We keep it simple and we do it well.",
    body: "Online ordering coming soon!",
    button: "View menu",
  };

  const main = document.getElementById("content");
  main.textContent = "";

  const jumbotron = document.createElement("div");
  jumbotron.classList.add("jumbotron", "text-center", "vertical-center");
  main.appendChild(jumbotron);

  const container = document.createElement("div");
  container.classList.add("container")
  jumbotron.appendChild(container)

  const h1 = document.createElement("h1");
  h1.classList.add("display-4");
  h1.textContent = text.h1;
  container.appendChild(h1);

  const lead = document.createElement("p");
  lead.classList.add("lead");
  lead.textContent = text.lead;
  container.appendChild(lead);

  const body = document.createElement("p");
  body.textContent = text.body;
  container.appendChild(body);

  const button = document.createElement("button");
  button.classList.add("btn", "btn-light", "btn-lg", "shadow");
  button.id = "menu-button";
  button.textContent = text.button;
  
  container.appendChild(button);
}