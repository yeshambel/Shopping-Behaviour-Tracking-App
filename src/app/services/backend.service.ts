import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getConfig () {
    return environment.social;
  }

  getCartTotal () {
    let fake = "2";
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fake);
        }, 2000)
      }
    )
  }
}
