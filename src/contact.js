export default function render() {
  const text = {
    h1: "Contact",
    lead: "Get in touch with us through any of our available channels:",
    links: [
      {
        iconName: "facebook",
        text: "Like us on Facebook",
      },
    ],
  };

  const main = document.getElementById("content");
  main.textContent = "";

  const container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);

  const h1 = document.createElement("h1");
  h1.classList.add("display-4", "contact-header", "text-center");
  h1.textContent = text.h1;
  container.appendChild(h1);

  const lead = document.createElement("p");
  lead.classList.add("lead", "text-center");
  lead.textContent = text.lead;
  container.appendChild(lead);

  const listGroup = document.createElement("div");
  listGroup.classList.add("list-group", "contact-list", "mx-auto", "my-4");
  container.appendChild(listGroup);

  text.links.forEach(link => {
    addLink(link.iconName, link.text);
  })

  function addLink(iconName, text) {
    const link = document.createElement("a");
    link.href = "#";
    link.classList.add("list-group-item", "list-group-item-action");

    const icon = document.createElement("i");
    icon.classList.add("bi-" + iconName);
    link.appendChild(icon);

    const span = document.createElement("span");
    span.classList.add("i-label");
    span.textContent = text;
    link.appendChild(span);

    listGroup.appendChild(link);
  }
}
