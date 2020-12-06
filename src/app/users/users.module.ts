import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UsersModule {}
