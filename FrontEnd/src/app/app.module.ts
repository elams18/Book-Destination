import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule }   from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
