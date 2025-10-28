import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './about/category/category.component';
import { SubCategoryComponent } from './about/sub-category/sub-category.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path:"gallery",
    component:GalleryComponent
  },{
    path:"about",
    component:AboutComponent,
    children:[
      {
        path:"category",
        component:CategoryComponent
      },{
        path:"sub-category",
        component:SubCategoryComponent
      }
    ]
  },{
    path:"contact",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
