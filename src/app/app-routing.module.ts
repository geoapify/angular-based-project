import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMapComponent } from './components/my-map/my-map.component';

const routes: Routes = [
  { path: '**', component: MyMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
