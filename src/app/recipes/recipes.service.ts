import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Pizza',
      imageUrl:
        'https://live.staticflickr.com/4097/4932649560_807c7382e4_b.jpg',
      ingredients: ['Cheese', 'Bread', 'Sauce']
    },
    {
      id: '2',
      title: 'Oatmeal',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/08/09/11/13/breakfast-1580328_960_720.jpg',
      ingredients: ['Oats', 'Fruit', 'Cinnamon']
    }
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}
