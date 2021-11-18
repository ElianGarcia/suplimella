import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "products/details",
    component: ProductComponent
  },

  {
    path: "about/about-us",
    component: AboutUsComponent
  },
  {
    path: "home/contact",
    component: ContactComponent
  },

  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
        relativeLinkResolution: 'legacy',
        scrollPositionRestoration: 'enabled'
      }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
