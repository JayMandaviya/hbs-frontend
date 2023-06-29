import { GuestsDetailComponent } from './guests.detail/guests.detail.component';
import { GuestsFormComponent } from './guests.form/guests.form.component';
import { GuestsListComponent } from './guests.list/guests.list.component';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GuestsListComponent,
      },
      {
        path: 'create',
        component: GuestsFormComponent,
      },
      {
        path: 'edit/:id',
        component: GuestsFormComponent,
      },
      {
        path: 'view/:id',
        component: GuestsDetailComponent,
      },
    ],
  },
];
