interface Deck {
  id: string;
  name: string;
  description: string;
  image: string;
  heroes: string[];
}

interface Card {
  code: string;
  name: string;
  description: string;
  image: string;
  traits: string;
  type_name: string;
  attack: number;
  health: number;
  defense: number;
  willpower: number;
}
