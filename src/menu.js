export default function render() {
  const menuItems = [
    {
      item: "The Flashburger",
      description: "Two smashed and grilled patties of our beef and bacon blend, covered in American cheese and sauteed onions"
    },
    {
      item: "The Smashburger",
      description: "Two smashed and grilled patties between a smashed bun with smashed cheese and pickle mash"
    },
    {
      item: "The Trashburger",
      description: "A beef patty, turkey patty, and fish stick smothered in gravy and barbeque sauce between two soft pretzels"
    },
    {
      item: "The Thrashburger",
      description: "Beef crumbles in bernaise sauce on a rye roll"
    },
    {
      item: "The Crashburger",
      description: "Vegan scrambled eggs on a plant-based sausage patty, with sourdough bread and a side of tomato juice"
    }
  ]
  
  const main = document.getElementById("content");
  main.textContent = "";

  const header = document.createElement("h1");
  header.classList.add("text-center", "menu-header", "display-4");
  header.textContent = "Menu";
  main.appendChild(header);

  const container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);

  const cardDeck = document.createElement("div");
  cardDeck.classList.add("card-deck", "mb-3");
  container.appendChild(cardDeck);

  menuItems.forEach(item => {
    addCard(item.item, item.description)
  });

  function addCard(title, content) {
    const card = document.createElement("div");
    card.classList.add("card", "menu-card", "mb-4", "shadow");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", "pt-4");
    card.appendChild(cardHeader);

    const cardTitle = document.createElement("h4");
    cardTitle.textContent = title;
    cardHeader.appendChild(cardTitle);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "pb-2");
    card.appendChild(cardBody);

    const cardContent = document.createElement("p");
    cardContent.textContent = content;
    cardBody.appendChild(cardContent);

    cardDeck.appendChild(card);
  }

}