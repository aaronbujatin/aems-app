import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController,
     private authenticationService : AuthenticationServiceService,
     private router : Router,
     private loadingController: LoadingController) { }

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

  async loginBtn() {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
      spinner: 'crescent', // You can change the spinner type here
    });
    await loading.present();

    this.authenticationService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(["/tabs"])
        localStorage.setItem('loggedInUsername', this.username);
        console.log(response); 
        loading.dismiss();
      },
      (error) => {
        console.error('Login failed', error);
        loading.dismiss();
        this.presentAlert()
      }
    );
  }

}
