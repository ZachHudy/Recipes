import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(id);
  }

  addToShopping() {
    for(let i: number = 0; i < this.recipe.ingredients.length; i++) {
      this.shoppingListService.onIngredientAdded(this.recipe.ingredients[i]);
    }
  }

}
