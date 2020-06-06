import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { FilsComponent } from './fils/fils.component';
import { ColorComponent } from './color/color.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCVComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCVComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailCvComponent,
    ItemCvComponent,
    ListeCvComponent,
    FilsComponent,
    ColorComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AddCVComponent,
    DeleteCVComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
