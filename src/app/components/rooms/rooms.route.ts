import { RoomsListComponent } from './rooms.list/rooms.list.component';
import { RoomsFormComponent } from './rooms.form/rooms.form.component';
import { RoomsDetailComponent } from './rooms.detail/rooms.detail.component';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RoomsListComponent,
      },
      {
        path: 'create',
        component: RoomsFormComponent,
      },
      {
        path: 'edit/:id',
        component: RoomsFormComponent,
      },
      {
        path: 'view/:id',
        component: RoomsDetailComponent,
      },
    ],
  },
];
