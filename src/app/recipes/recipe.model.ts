import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    private ingredients: Ingredient[];

    constructor(public name: string, public description: string, public imagePath: string) {

    }
}