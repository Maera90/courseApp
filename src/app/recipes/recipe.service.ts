import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test asdasd',
    'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
    [
      new Ingredient('Tomatoes', 2 ),
      new Ingredient('Oil', 1)
    ]),

    new Recipe('A Test Recipe2',
    'This is simply a testfdsfsdaf',
    'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
    [
      new Ingredient('Bread', 7),
      new Ingredient('Garlic', 2)
    ]),

    new Recipe('A Test Recipe3',
    'This is simply a testgfgagf',
    'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Oil', 2)
    ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
      return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}
