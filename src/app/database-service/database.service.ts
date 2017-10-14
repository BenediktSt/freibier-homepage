import { Injectable } from '@angular/core';
import neo4j from 'neo4j-driver/lib/browser/neo4j-web';

@Injectable()
export class DatabaseService {

    // neo4j = require('neo4j-driver');

    databaseUrl = 'bolt://localhost';
    session;
    driver;

    constructor() {
        this.driver = neo4j.driver(this.databaseUrl, neo4j.auth.basic('neo4j_reader', 'reader'));
        this.session = this.driver.session();
    }

    getAllDudes() {
        return this.session.run('MATCH (n:Dude) RETURN n LIMIT 25');
    }
}
