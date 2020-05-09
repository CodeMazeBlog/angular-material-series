import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
 
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'owner', loadChildren: () => import ('./../owner/owner.module').then(m => m.OwnerModule) }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
