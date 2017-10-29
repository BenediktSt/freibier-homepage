import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-linkhub',
  templateUrl: './linkhub.component.html',
  styleUrls: ['./linkhub.component.css']
})
export class LinkhubComponent implements OnInit {

  generalLinks = [
    {name: 'Homepage', ref: 'https://benediktst.github.io/freibier-homepage/'},
    {name: 'Finanzen', ref: 'https://secure.splitwise.com/#/groups/5432878'},
    {name: 'Kommunikation', ref: 'https://line.me/de/'}
    ];
  codingLinks = [
    {name: 'Homepage', ref: 'https://benediktst.github.io/freibier-homepage/'},
    {name: 'GitHub-Repo', ref: 'https://github.com/BenediktSt/freibier-homepage'},
    {name: 'GitHub-Wiki', ref: 'https://github.com/BenediktSt/freibier-homepage/wiki'},
    {name: 'Travis Build Jobs', ref: 'https://travis-ci.org/BenediktSt/freibier-homepage'}
  ];
  gamingLinks = [{name: 'Discord', ref: 'https://discordapp.com/'}];

  constructor() {
  }

  ngOnInit() {
  }

}
