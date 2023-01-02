import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe = new Recipe('Make a selection', 'select a recipe on the left', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  constructor() { }

  ngOnInit(): void {
  }

}
