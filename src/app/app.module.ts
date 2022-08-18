import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MessageComponent } from './message/message.component';
import { DonationsComponent } from './donations/donations.component';
import { EmailComponent } from './email/email.component';
import { EventsComponent } from './events/events.component';
import { FormsComponent } from './forms/forms.component';
import { MediaComponent } from './media/media.component';
import { ResourcesComponent } from './resources/resources.component';
import { CoreModule } from './core/core.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { HomeComponent } from './home/home.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MessageComponent,
    DonationsComponent,
    EmailComponent,
    EventsComponent,
    FormsComponent,
    MediaComponent,
    ResourcesComponent,
    HomeComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthService, AuthGuard,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
