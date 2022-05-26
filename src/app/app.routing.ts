import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePagesComponent } from './pages/create-pages/create-pages.component';
import { LoadPagesComponent } from './pages/load-pages/load-pages.component';

const routes: Routes = [
  { path: '', component: CreatePagesComponent },
  { path: 'loadPage', component: LoadPagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
