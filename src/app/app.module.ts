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
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
