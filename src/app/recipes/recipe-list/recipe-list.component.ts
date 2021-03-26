import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply a test', 'https://usbeketrica.com/media/70842/download/plt-burger-planet-shine.jpeg?v=1&inline=1'),
    new Recipe('Another Test Recipe', 'Simply a test', 'https://usbeketrica.com/media/70842/download/plt-burger-planet-shine.jpeg?v=1&inline=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
