import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { BookingsRoutingModule } from './bookings.routing.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { SearchFilterModule } from '../../pipes/searchFilter/searchFilter.module';

@NgModule({
  imports: [
    BookingsRoutingModule,
    CommonModule,
    FormsModule,
    AngularMultiSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    LoadingSpinnerModule,
    SearchFilterModule,
  ],
  declarations: [
    BookingListComponent,
    BookingFormComponent,
    BookingDetailComponent,
  ],
})
export class BookingsModule {
}
