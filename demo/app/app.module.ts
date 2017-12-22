import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AutoSizeModule } from '../../src/app/app';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutoSizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

