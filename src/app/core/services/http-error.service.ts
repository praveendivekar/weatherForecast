import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';

@Injectable()
export class HttpErrorService {

  constructor() { }

/**
 * Merhod to handle the service error
 * @method handleError
 * @param operation - operation that failed
 * @param result - optional value to return as the observable result
 */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return observableOf(error);
    };
  }

}
