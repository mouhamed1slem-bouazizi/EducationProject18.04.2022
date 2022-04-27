import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/psignin'])

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule),
    //...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'pstart',
    loadChildren: () => import('./pages/pstart/pstart.module').then( m => m.PstartPageModule)
  },
  {
    path: 'psignin',
    loadChildren: () => import('./pages/psignin/psignin.module').then( m => m.PsigninPageModule),
    //...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'psignup',
    loadChildren: () => import('./pages/psignup/psignup.module').then( m => m.PsignupPageModule),
    //...canActivate(redirectLoggedInToHome)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
