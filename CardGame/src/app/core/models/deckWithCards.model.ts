import { CardModel } from './card.model';

export interface DeckWithCardsModel {
  id: string | undefined;
  name: string;
  cards: CardModel[];
}
