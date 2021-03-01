import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StartComponent } from './start/start.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { EnterLeaveItemComponent } from './components/enter-leave-item/enter-leave-item.component';
import { FilterStaggerComponent } from './filter-stagger/filter-stagger.component';
import { HeroGroupsComponent } from './hero-groups/hero-groups.component';
import { AutoCalculationComponent } from './auto-calculation/auto-calculation.component';
import { ToggleAnimationComponent } from './toggle-animation/toggle-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StartComponent,
    OpenCloseComponent,
    EnterLeaveComponent,
    EnterLeaveItemComponent,
    FilterStaggerComponent,
    HeroGroupsComponent,
    AutoCalculationComponent,
    ToggleAnimationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
