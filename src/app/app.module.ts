import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserInfoComponent} from './menu/user-info/user-info.component';
import {ActivitiesComponent} from './activities/activities.component';
import {RouterModule, Routes} from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './menu/navigation/navigation.component';
import { ActivityComponent } from './activities/activity/activity.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/activities/daily'
  },
  {
    path: 'activities',
    children: [
      {
        path: ':timeFrame',
        component: ActivitiesComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    ActivitiesComponent,
    MenuComponent,
    NavigationComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
