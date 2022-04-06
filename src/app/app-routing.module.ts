import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './main/product/product.component';
import { HomeComponent } from './main/home/home.component';


const routes=[
  {path: "", component: HomeComponent},
  {path: "product", component: ProductComponent}
]
@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
