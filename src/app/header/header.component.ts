import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    collapsed = true;
    @Output() setPage = new EventEmitter<string>();

    setRecipes() {

    }

    setShoppingList() {

    }
}