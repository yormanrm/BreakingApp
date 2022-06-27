import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginatorPipe } from './pipes/paginator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardCharacterComponent,
    PaginatorComponent,
    PaginatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
