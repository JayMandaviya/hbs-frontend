import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './guests.route';
import { GuestsListComponent } from './guests.list/guests.list.component';
import { GuestsFormComponent } from './guests.form/guests.form.component';
import { GuestsDetailComponent } from './guests.detail/guests.detail.component';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { SearchFilterModule } from 'src/app/pipes/searchFilter/searchFilter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    LoadingSpinnerModule,
    SearchFilterModule,
  ],
  declarations: [
    GuestsListComponent,
    GuestsFormComponent,
    GuestsDetailComponent,
  ],
})
export class GuestModule {
  public static routes = routes;
}
