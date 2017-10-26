import { Injectable } from '@angular/core';

import { MagicCard } from '../magic-card/magic-card';

@Injectable()
export class MagicCardParserService {

  constructor() { }

  parseCards(data: any): MagicCard[] {

    const list: MagicCard[] = [];

    if (!data.cards) {
      return [new MagicCard('ERROR', 'ERROR')];
    }

    for (const card of data.cards) {
      list.push(new MagicCard(card.name, card.imageUrl));
    }

    return list;
  }

}
