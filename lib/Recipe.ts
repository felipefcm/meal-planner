
import axios from "axios";
import { Ingredient } from "./Ingredient";

export class Recipe {

	name: string;
	ingredients: Ingredient[] = [];

	imageURL?: string;

	constructor(name, ingredients?: Ingredient[]) {
		
		this.name = name;

		if(ingredients)
			this.ingredients = ingredients;
	}
}
