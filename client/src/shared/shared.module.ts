import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CenterWrapperComponent } from './components/center-wrapper/center-wrapper.component';

@NgModule({
  declarations: [CardComponent, LoaderComponent, CenterWrapperComponent],
  imports: [CommonModule],
  exports: [CardComponent, LoaderComponent, CenterWrapperComponent]
})
export class SharedModule {}
