import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database-service/database.service';
import {Dude} from '../database-service/dude.interface';

@Component({
  selector: 'app-dude-admin',
  providers: [DatabaseService],
  templateUrl: './dude-admin.component.html',
  styleUrls: ['./dude-admin.component.css']
})
export class DudeAdminComponent implements OnInit {

  public dudes: Array<Dude>;

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit() {
  }

  getAlldudes() {
    this.databaseService.getAllDudes()
      .then((result) => {
        this.dudes = result;
      });
  }

  getADude(name: string) {
    this.dudes = [];
    this.databaseService.getDudebyName(name)
      .then((result) => {
        if (result) {
          this.dudes.push(result);
        }
      });
  }

  saveThisDude(name: string) {
    this.databaseService.createDude(name);
  }

}
