import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'), new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];
  currentRecipe: Recipe;
  @Output() setRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipeData: Recipe) {
    this.setRecipe.emit(recipeData);
  }

}
