import { Injectable } from '@angular/core';
import {Dude} from './dude.interface';
// import neo4j from 'neo4j-driver/lib/browser/neo4j-web';

const mockData: Array<Dude> = [
  {name: 'Bene', title: 'President Business', image: 'https://avatars1.githubusercontent.com/u/7793020?s=460&v=4'}
];

@Injectable()
export class DatabaseService {

    // neo4j = require('neo4j-driver');

    // databaseUrl = 'bolt://localhost';
    // session;
    // driver;
    private data: Array<Dude>;

    constructor() {
        // this.driver = neo4j.driver(this.databaseUrl, neo4j.auth.basic('neo4j_reader', 'reader'));
        // this.session = this.driver.session();
        this.data = mockData;
    }

    getAllDudes(): Promise<Array<Dude>> {
      return Promise.resolve(this.data);
        // return this.session.run('MATCH (n:Dude) RETURN n LIMIT 25');
    }

    createDude(inputName: string, title: string = 'nub', img: string = 'https://avatars0.githubusercontent.com/u/22455262?s=460&v=4') {
      this.data.push({name: inputName, title: title, image: img});
    }

    getDudebyName(name: string): Promise<Dude> {
      for (const element of this.data){
        if (element.name === name) {
          return Promise.resolve(element);
        }
      }
      return Promise.resolve(null);
    }
}
