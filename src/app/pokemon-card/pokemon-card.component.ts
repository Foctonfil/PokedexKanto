import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.sass'
})
export class PokemonCardComponent {
  @Input()
  pokemon: string = '';

  @Input()
  number: number = 0;

  pegarImagePokemon() {
    const formattedNumber = this.leadingZeroes(this.number);
    // Ensure the number is a string with leading zeroes

    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${formattedNumber}.png`;
  }

  leadingZeroes(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
