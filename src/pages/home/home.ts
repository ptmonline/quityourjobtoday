import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FuckingApi } from '../../providers/fuckingapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public welcomeIdiot: any = [];
  public welcomeTitleSelected: string;
  public welcomeTitleSelected2: string;
  public welcomeTitleSelected3: string;
  constructor(public navCtrl: NavController, private _fuckingApi: FuckingApi) {
    this._fuckingApi.get('homestuffthaface.json').subscribe((fuckingdata) => {
      this.welcomeIdiot = fuckingdata;
      // this.welcomeTitleSelected = this.welcomeIdiot.dude[Math.floor(Math.random() * this.welcomeIdiot.dude.length)];
      // this.welcomeTitleSelected2 = this.welcomeIdiot.names[Math.floor(Math.random() * this.welcomeIdiot.names.length)];
      this.welcomeTitleSelected = this.getTheFuckingWord(this.welcomeIdiot.dude);
      this.welcomeTitleSelected2 = this.getTheFuckingWord(this.welcomeIdiot.names);
      this.welcomeTitleSelected3 = this.getTheFuckingWord(this.welcomeIdiot.job);
      console.log(this.welcomeTitleSelected);
    });
  }

  getTheFuckingWord(fuckingPlace){
    return fuckingPlace[Math.floor(Math.random() * fuckingPlace.length)]
  }

}
