import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'remote-entry', loadChildren: () => import('./remote-entry/entry.module').then(m => m.RemoteEntryModule)},
  { path: '', loadChildren: () => import('./modules/request/request.module').then(m => m.RequestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

