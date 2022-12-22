import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Note/agregar/agregar.component';
import { EditarComponent } from './Note/editar/editar.component';
import { ListarComponent } from './Note/listar/listar.component';

const routes: Routes = [{path: 'listar', component:ListarComponent},
                        {path: 'agregar', component:AgregarComponent},
                        {path: 'editar' , component: EditarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
