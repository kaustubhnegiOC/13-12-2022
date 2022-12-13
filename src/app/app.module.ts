import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { StartDayComponent } from './start-day/start-day.component';
import { EndDayComponent } from './end-day/end-day.component';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StartDayComponent } from './start-day/start-day.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestparentComponent } from './testparent/testparent.component';
import { StartdaytestComponent } from './testparent/startdaytest/startdaytest.component';

@NgModule({
  declarations: [
    AppComponent,
    EndDayComponent,
    ReportComponent,
    LoginComponent,
    StartDayComponent,
    DashboardComponent,
    routingComponents,
    TestparentComponent,
    StartdaytestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
