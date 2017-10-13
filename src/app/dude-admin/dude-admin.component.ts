import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database-service/database.service';

@Component({
    selector: 'app-dude-admin',
    providers: [DatabaseService],
  templateUrl: './dude-admin.component.html',
  styleUrls: ['./dude-admin.component.css']
})
export class DudeAdminComponent implements OnInit {

    public dudes = '';

    constructor(private databaseService: DatabaseService) { }

    ngOnInit() {
    this.databaseService.getAllDudes()
        .then((result) => {
            this.dudes = result;
        });
  }

}
