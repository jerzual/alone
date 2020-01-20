import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutPageModule),
  },
  {
    path: 'scores',
    loadChildren: () =>
      import('./pages/scores/scores.module').then(m => m.ScoresPageModule),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./pages/game/game.module').then(m => m.GamePageModule),
  },
  {
    path: 'options',
    loadChildren: () =>
      import('./pages/options/options.module').then(m => m.OptionsPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
