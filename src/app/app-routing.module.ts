import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GistsComponent} from './gists/gists.component';
import {GistFileViewComponent} from './gist-file-view/gist-file-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/gists', pathMatch: 'full'},
  {path: 'gists', component: GistsComponent},
  {path: 'gist/:id', component: GistFileViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
