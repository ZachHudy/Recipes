import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('First Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'), new Recipe('Second Test Recipe', 'This is another test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}