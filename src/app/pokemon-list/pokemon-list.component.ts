import { Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.sass'
})

export class PokemonListComponent {

  pokemon = PokemonCardComponent
  pokemons = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu"];
  
}
