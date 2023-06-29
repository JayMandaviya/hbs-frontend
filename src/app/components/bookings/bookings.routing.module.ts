import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BookingListComponent,
      },
      {
        path: 'create',
        component: BookingFormComponent,
      },
      {
        path: 'edit/:id',
        component: BookingFormComponent,
      },
      {
        path: 'view/:id',
        component: BookingDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
