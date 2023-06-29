import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { BookingsController } from '../../../ducks/bookings/bookings.controller';
import { types } from '../../../ducks/bookings/bookings.types';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookingDetailComponent implements OnInit, OnDestroy {
  public id: number;
  public sub: any;
  public booking$: any;

  /**
   * [constructor description]
   * @method  constructor
   * @author jackfiallos
   * @version [version]
   * @date    2017-10-31
   * @param   {ActivatedRoute} private route [description]
   * @param   {BookingsController} private _bookings [description]
   * @param   {Store<any>} private _store [description]
   * @return  {[type]} [description]
   */
  constructor(
    private route: ActivatedRoute,
    private _bookings: BookingsController,
    private _store: Store<any>
  ) {
    _store.select('bookings').subscribe((response: any) => {
      this.booking$ = response;
    });
  }

  /**
   * [ngOnInit description]
   * @method  ngOnInit
   * @author jackfiallos
   * @version [version]
   * @date    2017-10-31
   * @return  {[type]} [description]
   */
  public ngOnInit() {
    this.sub = this.route.params.subscribe((params: { [x: string]: any }) => {
      this.id = Number(params['id']);
      this._store.dispatch({
        type: types.GET_BOOKINGS,
        uid: this.id,
      });

      this._bookings.getBookingById(this.id).subscribe(
        (data: any) => {
          this._store.dispatch({
            type: types.GET_BOOKINGS_SUCCESS,
            payload: data,
          });
        },
        (error: any) => {
          this._store.dispatch({
            type: types.GET_BOOKINGS_FAILURE,
            error: error.error,
          });
        }
      );
    });
  }

  /**
   * [ngOnDestroy description]
   * @method  ngOnDestroy
   * @author jackfiallos
   * @version [version]
   * @date    2017-10-31
   * @return  {[type]} [description]
   */
  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
