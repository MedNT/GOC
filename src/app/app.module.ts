import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ObjectService } from './services/ObjectService';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import {AuthService} from './services/AuthService';
import {AuthGuard} from './services/AuthGuard';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'list', canActivate: [AuthGuard], component: ContentComponent},
  {path: 'list/:id', canActivate: [AuthGuard], component: DetailComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AuthComponent,
    DetailComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ObjectService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
