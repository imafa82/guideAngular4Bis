import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1280px-Banjo_Shark_recipe.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1280px-Banjo_Shark_recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
