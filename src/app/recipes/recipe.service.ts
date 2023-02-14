import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('First Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]), new Recipe('Second Test Recipe', 'This is another test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [
            new Ingredient(' Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}