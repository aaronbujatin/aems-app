import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  
  //     subHeader: 'Wrong credentials',
  //     message: 'Invalid username or password',
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }

  // buttonClick(){
  //   this.presentAlert()
  // }




}
