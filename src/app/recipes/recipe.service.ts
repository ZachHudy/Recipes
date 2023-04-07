import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>;
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

    getRecipe(i: number) {
        return this.recipes[i];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}