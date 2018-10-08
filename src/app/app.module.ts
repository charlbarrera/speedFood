import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { MenuService } from './services/menu.service';
import { MaterialModule } from './material/material.module';
import { CustomizeFoodComponent } from './components/customize-food/customize-food.component';


@NgModule({
  declarations: [
    AppComponent,
    ListMenuComponent,
    CustomizeFoodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
  entryComponents: [CustomizeFoodComponent]
})
export class AppModule { }
