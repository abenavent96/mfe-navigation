import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./remote-entry/entry.module').then(m => m.RemoteEntryModule)},
  { path: 's1', loadChildren: () => import('./modules/request/s1-intro/s1-intro.module').then(m => m.S1IntroPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

