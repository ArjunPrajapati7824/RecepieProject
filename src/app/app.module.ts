import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { RecepiesComponent } from './Recepies/recepies.component';
import { RecepiesDetailComponent } from './Recepies/recepies-detail/recepies-detail.component';
import { RecepiesItemComponent } from './Recepies/recepies-list/recepies-item/recepies-item.component';
import { RecepiesListComponent } from './Recepies/recepies-list/recepies-list.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './sharedModels/DropDown.directive';
import { RecipeService } from './Recepies/Services/RecepieService.service';
import { ShoppingListService } from './shopping-list/Services/ShoppingListService.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecepieEditComponent } from './Recepies/recepie-edit/recepie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepiesDetailComponent,
    RecepiesItemComponent,
    RecepiesListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    ErrorPageComponent,
    RecepieEditComponent

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
