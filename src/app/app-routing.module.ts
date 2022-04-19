import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'pstart',
    loadChildren: () => import('./pages/pstart/pstart.module').then( m => m.PstartPageModule)
  },
  {
    path: 'psignin',
    loadChildren: () => import('./pages/psignin/psignin.module').then( m => m.PsigninPageModule)
  },
  {
    path: 'psignup',
    loadChildren: () => import('./pages/psignup/psignup.module').then( m => m.PsignupPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
