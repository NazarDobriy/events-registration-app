import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CenterWrapperComponent } from './components/center-wrapper/center-wrapper.component';

@NgModule({
  declarations: [CardComponent, LoaderComponent, CenterWrapperComponent],
  imports: [CommonModule],
  exports: [
    CardComponent,
    LoaderComponent,
    CenterWrapperComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class SharedModule {}
