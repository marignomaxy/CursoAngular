import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"registro",component:RegistroComponent},
  {path:"login",component:LoginComponent},
  {path:"detalle/:id",component:DetalleComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
