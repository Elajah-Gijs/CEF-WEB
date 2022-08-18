import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { EmailComponent } from './email/email.component';
import { FormsComponent } from './forms/forms.component';
import { EventsComponent } from './events/events.component';
import { DonationsComponent } from './donations/donations.component';
import { MediaComponent } from './media/media.component';
import { ResourcesComponent } from './resources/resources.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: '', component: SidenavComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {
    path:'', 
    component:SidenavComponent,
    children : [
      {path: 'message', component: MessageComponent},
      {path:'email', component:EmailComponent},
      {path:'forms', component:FormsComponent},
      {path:'events', component:EventsComponent},
      {path:'donations', component:DonationsComponent},
      {path:'media', component:MediaComponent},
      {path:'resources', component:ResourcesComponent},
      {path:'account', component:AccountComponent},
    ], canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
