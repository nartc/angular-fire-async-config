import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config1Resolver } from './config1.resolver';
import { Fb1Component } from './fb1/fb1.component';


const routes: Routes = [
  {
    path: '',
    component: Fb1Component,
    resolve: {
      config: Config1Resolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fb1RoutingModule {
}
