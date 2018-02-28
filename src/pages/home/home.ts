import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public welcomeIdiot: Array<string> = ['MotherFucker', 'Asshole', 'Shithole', 'DumbFuck', 'Idiot', 'FuckerFace'];
  public welcomeTitleSelected: string;
  constructor(public navCtrl: NavController) {
    this.welcomeTitleSelected = this.welcomeIdiot[Math.floor(Math.random() * this.welcomeIdiot.length)];
    console.log(this.welcomeTitleSelected);
  }

}
