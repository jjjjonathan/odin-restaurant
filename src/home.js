export default function render() {
  const text = {
    h1: "Juicy, cheesy smashed burgers",
    lead: "And truffle fries with gourmet dipping sauces.",
    body: "Online ordering coming soon!",
    button: "View menu",
  };

  const main = document.getElementById("content");
  main.textContent = "";

  const jumbotron = document.createElement("div");
  jumbotron.classList.add("jumbotron", "text-center");
  main.appendChild(jumbotron);

  const h1 = document.createElement("h1");
  h1.classList.add("display-4");
  h1.textContent = text.h1;
  jumbotron.appendChild(h1);

  const lead = document.createElement("p");
  lead.classList.add("lead");
  lead.textContent = text.lead;
  jumbotron.appendChild(lead);

  const hr = document.createElement("hr");
  hr.classList.add("my-4");
  jumbotron.appendChild(hr);

  const body = document.createElement("p");
  body.textContent = text.body;
  jumbotron.appendChild(body);

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "btn-lg");
  button.textContent = text.button;
  jumbotron.appendChild(button);
}