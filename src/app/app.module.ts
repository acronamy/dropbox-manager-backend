import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ViewDesignComponent } from './view-design/view-design.component';
import { ViewCollectionsComponent } from './view-collections/view-collections.component';
import { View404Component } from './view-404/view-404.component';
import { EditorComponent } from './editor/editor.component';
import { FolderTreeComponent } from './folder-tree/folder-tree.component';

const defaultEditorView = ViewDesignComponent.menu.url;
const appRoutes: Routes = [
  { path: ViewDesignComponent.menu.url, component: ViewDesignComponent },
  { path: ViewCollectionsComponent.menu.url, component: ViewCollectionsComponent },
  { path: '',
    redirectTo: defaultEditorView,
    pathMatch: 'full'
  },
  { path: '**', component: View404Component }
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ViewDesignComponent,
    ViewCollectionsComponent,
    View404Component,
    EditorComponent,
    FolderTreeComponent
  ],
  imports: [
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
