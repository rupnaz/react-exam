import localforage from "localforage";

export async function getCards() {
  let cards = await localforage.getItem("cards");
  if (!cards) cards = [];
  return cards;
}


export async function createCard(card) {
  let id = Math.random().toString(36).substring(2, 9);
  card.id = id;
  let cards = await getCards();
  cards.push(card);
  await set(cards);
  return card;
}

function set(cards) {
    return localforage.setItem("cards", cards);
  }