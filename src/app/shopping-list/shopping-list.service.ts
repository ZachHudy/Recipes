import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    onIngredientAdded(ingData: Ingredient) {
        this.ingredients.push(ingData);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
      return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }

}