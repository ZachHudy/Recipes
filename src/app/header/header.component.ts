import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    collapsed = true;
    @Output() setPage = new EventEmitter<string>();
    currPage: string;

    setRecipes() {
        this.currPage = 'recipes';
        this.setPage.emit(this.currPage);
    }

    setShoppingList() {
        this.currPage = 'shopping-list';
        this.setPage.emit(this.currPage);
    }
}