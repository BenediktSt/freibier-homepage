import {Contingent} from '../../models/time-management/contingent.model';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContingentService {

  private contingetUrl = 'http://localhost:8080/contingent';

  constructor(
    private http: Http) {
  }

  getAllContingents(): Promise<Array<Contingent>> {
    return this.http.get(this.contingetUrl)
      .toPromise()
      .then(response => response.json() as Array<Contingent>)
      .catch(console.log);
  }

  /*
   SaveContingent returns the ID of the object
   */
  saveContingent(contingent: Contingent): Promise<number> {
    return Promise.resolve(1);
  }

}
