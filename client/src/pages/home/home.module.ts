import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeComponent } from './home.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SharedModule } from 'src/shared/shared.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, EventCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}
