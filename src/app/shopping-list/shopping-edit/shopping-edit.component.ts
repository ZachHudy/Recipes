import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @Output() ingredientAdd = new EventEmitter<{ingName: string, ingAmount: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(amountInput: HTMLInputElement) {
    this.ingredientAdd.emit({ ingName: this.nameInput.nativeElement.value, ingAmount: Number(amountInput.value) });
  }

}
