import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { MenuService } from './services/menu.service';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
