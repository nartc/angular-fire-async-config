import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigResolver } from './shared/config.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      config: ConfigResolver
    }
  },
  {
    path: 'fb1',
    loadChildren: () => import('./fb1/fb1.module').then(m => m.Fb1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
