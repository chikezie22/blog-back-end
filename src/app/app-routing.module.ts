import { SubscribersComponent } from './subscribers/subscribers.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './post/all-post/all-post.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    component: AllPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'posts/new',
    component: NewPostComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'subscribers',
    component: SubscribersComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
