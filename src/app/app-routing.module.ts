import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //Site routes goes here
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
