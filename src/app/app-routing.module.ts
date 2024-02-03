import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepiesComponent } from './Recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepiesDetailComponent } from './Recepies/recepies-detail/recepies-detail.component';
import { RecepiesListComponent } from './Recepies/recepies-list/recepies-list.component';
import { RecepiesItemComponent } from './Recepies/recepies-list/recepies-item/recepies-item.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecepieEditComponent } from './Recepies/recepie-edit/recepie-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'Recepie',pathMatch:'full'},
  {path:'Recepie',component:RecepiesComponent,
          children:[
                     {path:'recepieDetail/:id',component:RecepiesDetailComponent},
                     {path:'addNew',component:RecepieEditComponent},
                     {path:'recepieeEdit/:id',component:RecepieEditComponent},
                    //  {path:'recepieList',component:RecepiesListComponent,
                     
                            // children:[
                                      // {path:'recepieItem',component:RecepiesItemComponent}
                                    //  ]},
                   ]},
  {path:'appShoppingList',component:ShoppingListComponent},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
