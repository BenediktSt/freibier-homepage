import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> implemented magic api service
=======

>>>>>>> Updated to newest angular version for angular materials
import 'rxjs/add/operator/map';

@Injectable()
export class MagicApiService {
  private apiUrl = 'https://api.magicthegathering.io/v1/cards';

  constructor(private http: Http) { }

  getCards(restrictions) {
    return this.http.get(this.apiUrl, restrictions).map((res: Response) => res.json());
  }

}
