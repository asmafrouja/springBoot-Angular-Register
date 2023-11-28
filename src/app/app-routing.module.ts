import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './components/client/client.component';
import CourseComponent from './components/order/order.component';
import { SpecialityComponent } from './components/speciality/speciality.component';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { TeacherGuard } from './guards/client.guard';
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
  },
  {
    path: 'clients',
    component: TeacherComponent,
  },

  {
    path: 'orders',
    component: CourseComponent,
  },

  {
    path: 'specialities',
    component: SpecialityComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    canActivate: [TeacherGuard],
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'roles',
    component: RoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
