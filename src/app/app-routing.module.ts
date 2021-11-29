import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GistsComponent} from './gists/gists.component';

const routes: Routes = [
  {path: '', redirectTo: '/gists', pathMatch: 'full'},
  {path: 'gists', component: GistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
