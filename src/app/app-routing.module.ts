import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'craft',
    loadChildren: () => import('./craft/craft.module').then( m => m.CraftPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'betula',
    loadChildren: () => import('./betula/betula.module').then( m => m.BetulaPageModule)
  },
  {
    path: 'castanheira',
    loadChildren: () => import('./castanheira/castanheira.module').then( m => m.CastanheiraPageModule)
  },
  {
    path: 'pinho',
    loadChildren: () => import('./pinho/pinho.module').then( m => m.PinhoPageModule)
  },
  {
    path: 'cedro',
    loadChildren: () => import('./cedro/cedro.module').then( m => m.CedroPageModule)
  },
  {
    path: 'carvalho-sangue',
    loadChildren: () => import('./carvalho-sangue/carvalho-sangue.module').then( m => m.CarvalhoSanguePageModule)
  },
  {
    path: 'freixo',
    loadChildren: () => import('./freixo/freixo.module').then( m => m.FreixoPageModule)
  },
  {
    path: 'pau-branco',
    loadChildren: () => import('./pau-branco/pau-branco.module').then( m => m.PauBrancoPageModule)
  },
  {
    path: 'pinho-level1',
    loadChildren: () => import('./pinho-level1/pinho-level1.module').then( m => m.PinhoLevel1PageModule)
  },
  {
    path: 'pinho-lvl2',
    loadChildren: () => import('./pinho-lvl2/pinho-lvl2.module').then( m => m.PinhoLvl2PageModule)
  },
  {
    path: 'pinho-lvl3',
    loadChildren: () => import('./pinho-lvl3/pinho-lvl3.module').then( m => m.PinhoLvl3PageModule)
  },
  {
    path: 'cedro-lvl1',
    loadChildren: () => import('./cedro-lvl1/cedro-lvl1.module').then( m => m.CedroLvl1PageModule)
  },
  {
    path: 'cedro-lvl2',
    loadChildren: () => import('./cedro-lvl2/cedro-lvl2.module').then( m => m.CedroLvl2PageModule)
  },
  {
    path: 'cedro-lvl3',
    loadChildren: () => import('./cedro-lvl3/cedro-lvl3.module').then( m => m.CedroLvl3PageModule)
  },
  {
    path: 'carvalho-lvl1',
    loadChildren: () => import('./carvalho-lvl1/carvalho-lvl1.module').then( m => m.CarvalhoLvl1PageModule)
  },
  {
    path: 'carvalho-lvl2',
    loadChildren: () => import('./carvalho-lvl2/carvalho-lvl2.module').then( m => m.CarvalhoLvl2PageModule)
  },
  {
    path: 'carvalho-lvl3',
    loadChildren: () => import('./carvalho-lvl3/carvalho-lvl3.module').then( m => m.CarvalhoLvl3PageModule)
  },
  {
    path: 'freixo-lvl1',
    loadChildren: () => import('./freixo-lvl1/freixo-lvl1.module').then( m => m.FreixoLvl1PageModule)
  },
  {
    path: 'freixo-lvl2',
    loadChildren: () => import('./freixo-lvl2/freixo-lvl2.module').then( m => m.FreixoLvl2PageModule)
  },
  {
    path: 'freixo-lvl3',
    loadChildren: () => import('./freixo-lvl3/freixo-lvl3.module').then( m => m.FreixoLvl3PageModule)
  },
  {
    path: 'pau-lvl1',
    loadChildren: () => import('./pau-lvl1/pau-lvl1.module').then( m => m.PauLvl1PageModule)
  },
  {
    path: 'pau-lvl2',
    loadChildren: () => import('./pau-lvl2/pau-lvl2.module').then( m => m.PauLvl2PageModule)
  },
  {
    path: 'pau-lvl3',
    loadChildren: () => import('./pau-lvl3/pau-lvl3.module').then( m => m.PauLvl3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
