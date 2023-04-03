import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') ingredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.onIngredientAdded(newIngredient);
    console.log(this.ingredientForm);
  }

}
