import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-linkhub',
  templateUrl: './linkhub.component.html',
  styleUrls: ['./linkhub.component.css']
})
export class LinkhubComponent implements OnInit {

  generalLinks = [
    {name: 'Homepage', ref: 'https://freibier-homepage.herokuapp.com'},
    {name: 'Finanzen', ref: 'https://secure.splitwise.com/#/groups/5432878'},
    {name: 'Kommunikation', ref: 'https://line.me/de/'}
    ];
  codingLinks = [
    {name: 'GitHub-Repo', ref: 'https://github.com/BenediktSt/freibier-homepage'},
    {name: 'GitHub-Wiki', ref: 'https://github.com/BenediktSt/freibier-homepage/wiki'},
    {name: 'Travis Build Jobs', ref: 'https://travis-ci.org/BenediktSt/freibier-homepage'},
    {name: 'Statische Code Analyse', ref: 'https://www.codacy.com/app/benediktstraube/freibier-homepage/dashboard'},
    {name: 'Heroku Deployment', ref: 'https://dashboard.heroku.com/apps/freibier-homepage'}
  ];
  gamingLinks = [
    {name: 'Discord', ref: 'https://discordapp.com/'},
    {name: 'Twitch - Jetpack-Netpek', ref: 'https://www.twitch.tv/baalnetpek'},
    {name: 'Twitch - Hyxadria', ref: 'https://twitch.tv/hyxadria'}
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
