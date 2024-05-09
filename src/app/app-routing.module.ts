import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //Site routes goes here
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: AppComponent, pathMatch: 'full' }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
