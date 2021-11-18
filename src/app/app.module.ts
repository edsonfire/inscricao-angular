import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { InscricaoFormComponent } from './components/inscricao-form/inscricao-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatSliderModule} from '@angular/material/slider';
import { InscricaoListComponent } from './components/inscricao-list/inscricao-list.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InscricaoFormComponent,
    InscricaoListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
