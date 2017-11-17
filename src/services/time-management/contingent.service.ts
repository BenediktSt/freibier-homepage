import {mockdata} from './contingent.mock';
import {Contingent} from '../../models/time-management/contingent.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ContingentService {

  constructor() {
  }

  getAllContingents(): Promise<Array<Contingent>> {
    return Promise.resolve(mockdata);
  }

  /*
   SaveContingent returns the ID of the object
   */
  saveContingent(contingent: Contingent): Promise<number> {
    return Promise.resolve(1);
  }

}
