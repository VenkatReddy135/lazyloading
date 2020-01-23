import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Demo2Module } from './demo2/demo2.module';


const routes: Routes = [{
  path:'',component:MainComponent
},
{path:'main',loadChildren:()=> import('./demo1/demo1.module').then(m=>m.Demo1Module)},
{path:"main1",loadChildren:()=> import('./demo2/demo2.module').then(m=>m.Demo2Module)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
