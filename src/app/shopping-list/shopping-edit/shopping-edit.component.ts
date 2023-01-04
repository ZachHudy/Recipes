import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @Output() ingredientAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(amountInput: HTMLInputElement) {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = Number(amountInput.value);
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdd.emit(newIngredient);
  }

}
