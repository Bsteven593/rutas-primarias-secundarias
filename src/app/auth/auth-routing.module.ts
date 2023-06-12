import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AlumnoComponent } from '../pages/alumno/alumno.component';
import { TareaComponent } from '../pages/tarea/tarea.component';

const routes:Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'alumno', component:AlumnoComponent},
  {path:'tarea', component:TareaComponent},
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class AuthRoutingModule { }
