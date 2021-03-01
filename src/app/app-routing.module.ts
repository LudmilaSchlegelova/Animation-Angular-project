import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { FilterStaggerComponent } from './filter-stagger/filter-stagger.component';
import { HeroGroupsComponent } from './hero-groups/hero-groups.component';
import { AutoCalculationComponent } from './auto-calculation/auto-calculation.component';
import { ToggleAnimationComponent } from './toggle-animation/toggle-animation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/start',
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'home',
    data: { animation: 'HomePage' },
    component: HomeComponent,
  },
  {
    path: 'about',
    data: { animation: 'AboutPage' },
    component: AboutComponent,
  },
  {
    path: 'open-close',
    component: OpenCloseComponent,
  },
  {
    path: 'enter-leave',
    component: EnterLeaveComponent,
  },
  {
    path: 'filter-stagger',
    data: { animation: 'FilterPage' },
    component: FilterStaggerComponent,
  },
  {
    path: 'hero-groups',
    component: HeroGroupsComponent,
  },
  {
    path: 'auto-calculation',
    component: AutoCalculationComponent,
  },

  {
    path: 'toggle-animation',
    component: ToggleAnimationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
