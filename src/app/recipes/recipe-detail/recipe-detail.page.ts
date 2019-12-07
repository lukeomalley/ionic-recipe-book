import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss']
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;
  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.router.navigate(['/recipes']);
        return;
      }

      this.recipe = this.recipesService.getRecipe(paramMap.get('id'));
    });
  }

  onDeleteRecipe(id: string) {
    this.alertController
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete this recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(id);
              console.log(this.recipesService.getRecipes());
              this.router.navigate(['/recipes']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
