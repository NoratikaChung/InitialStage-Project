// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProjectsComponent} from './components/projects/projects.component';
// import { FeedbackComponent } from './feedback/feedback.component';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ProjectsComponent,
//     FeedbackComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiteDataService } from './site-data.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SiteDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
