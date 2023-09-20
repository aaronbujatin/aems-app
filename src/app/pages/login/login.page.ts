import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController,
     private authenticationService : AuthenticationServiceService,
     private router : Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
  
      subHeader: 'Wrong credentials',
      message: 'Invalid username or password',
      buttons: ['OK'],
    });

    await alert.present();
  }

  username : string
  password : string

  buttonClick(){
    this.presentAlert()
  }

  login(){
    this.authenticationService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(["/tabs"])
        console.log(response);  
      }, (error) => {
        this.presentAlert()
        console.log(error);
        
      }
    )
  }




}
