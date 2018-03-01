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
  public welcomeTitleSelected4: string;
  public fuckingclass: string;
  constructor(public navCtrl: NavController, private _fuckingApi: FuckingApi) {

    this._fuckingApi.get('homestuffthaface.json').subscribe((fuckingdata) => {
      this.welcomeIdiot = fuckingdata;
      this.getTheFuckingWord(this.welcomeIdiot);
    }); 
  }

  getTheFuckingWord(fuckingWord){
    this.welcomeTitleSelected = this.randomizeTheShitOutOfTheFuckingWord(this.welcomeIdiot.dude);
    this.welcomeTitleSelected2 = this.randomizeTheShitOutOfTheFuckingWord(this.welcomeIdiot.names);
    this.welcomeTitleSelected3 = this.randomizeTheShitOutOfTheFuckingWord(this.welcomeIdiot.job);
    this.welcomeTitleSelected4 = this.randomizeTheShitOutOfTheFuckingWord(this.welcomeIdiot.quotes);
  }

  randomizeTheShitOutOfTheFuckingWord(fuckingPlace){
    return fuckingPlace[Math.floor(Math.random() * fuckingPlace.length)]
  }

  changeTheFuckingSentence(){
    this.getTheFuckingWord(this.welcomeIdiot);
    this.fuckingclass = 'fuckingclassanimation-' + Math.floor((Math.random() * 5) + 1 )
  }

  // changeTheFuckingClass(){
  //   setInterval(()=>{
  //     this.fuckingclass = 'fuckingclassanimation-' + Math.floor((Math.random() * 5) + 1 )
  //   }, Math.floor((Math.random() * 5000) + 100 ))
  // }

}
