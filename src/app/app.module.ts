import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GistsComponent} from './gists/gists.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {GistSearchComponent} from './gist-search/gist-search.component';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {GistPreviewComponent} from './gist-preview/gist-preview.component';
import {GistFilePreviewComponent} from './gist-file-preview/gist-file-preview.component';
import {MatChipsModule} from '@angular/material/chips';
import {GistForkPreviewComponent} from './gist-fork-preview/gist-fork-preview.component';
import {GistFileViewComponent} from './gist-file-view/gist-file-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GistsComponent,
    HeaderComponent,
    GistSearchComponent,
    GistPreviewComponent,
    GistFilePreviewComponent,
    GistForkPreviewComponent,
    GistFileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
