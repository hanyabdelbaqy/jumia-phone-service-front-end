import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './employee-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsredebListComponent } from './usredeb-list/usredeb-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    UsredebListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
