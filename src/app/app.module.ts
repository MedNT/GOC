import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ObjectService } from './services/ObjectService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ObjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
