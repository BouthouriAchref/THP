import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./Pages/place/place.module').then( m => m.PlacePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./Pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'rate',
    loadChildren: () => import('./Pages/rate/rate.module').then( m => m.RatePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-place',
    loadChildren: () => import('./Pages/create-place/create-place.module').then( m => m.CreatePlacePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'place-category',
    loadChildren: () => import('./Pages/place-category/place-category.module').then( m => m.PlaceCategoryPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./Pages/category/category.module').then( m => m.CategoryPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
