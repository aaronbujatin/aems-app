import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgHttpLoaderModule } from 'ng-http-loader'; 


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({innerHTMLTemplatesEnabled:true}),
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    PdfViewerModule,
    ReactiveFormsModule],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DatePipe, InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule { }
